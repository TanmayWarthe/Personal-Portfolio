import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const lastSubmitTime = useRef(0);
  const formRef = useRef(null);

  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Initialize EmailJS on component mount
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'xu-alu3FkS-WZWtk_';
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  // Auto-dismiss success/error messages after 5 seconds
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  // Validate form fields
  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
      isValid = false;
    } else if (formData.subject.trim().length < 3) {
      errors.subject = "Subject must be at least 3 characters";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
      isValid = false;
    } else if (formData.message.trim().length > 2000) {
      errors.message = "Message must be less than 2000 characters";
      isValid = false;
    }

    setFieldErrors(errors);
    return isValid;
  };

  const sanitizeInput = (input) => {
    return input.trim().replace(/[<>]/g, "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (fieldErrors[name]) {
      setFieldErrors({
        ...fieldErrors,
        [name]: ""
      });
    }

    if (submitStatus === 'error') {
      setSubmitStatus(null);
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmitTime.current < 3000) {
      setSubmitStatus('error');
      setErrorMessage("Please wait a moment before submitting again.");
      return;
    }
    lastSubmitTime.current = now;

    if (!validateForm()) {
      setSubmitStatus('error');
      setErrorMessage("Please fix the errors in the form.");
      return;
    }

    if (formData.company && formData.company.trim().length > 0) {
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_l5wokda';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_zdj7wvw';

      if (!publicKey || publicKey.includes('your_emailjs') || publicKey.includes('here')) {
        throw new Error("VITE_EMAILJS_PUBLIC_KEY is missing or using placeholder.");
      }
      if (!serviceId || serviceId.includes('your_emailjs') || serviceId.includes('here')) {
        throw new Error("VITE_EMAILJS_SERVICE_ID is missing or using placeholder.");
      }
      if (!templateId || templateId.includes('your_emailjs') || templateId.includes('here')) {
        throw new Error("VITE_EMAILJS_TEMPLATE_ID is missing or using placeholder.");
      }

      const sanitizedName = sanitizeInput(formData.name);
      const sanitizedEmail = sanitizeInput(formData.email);
      const sanitizedSubject = sanitizeInput(formData.subject);
      const sanitizedMessage = sanitizeInput(formData.message);

      const templateParams = {
        from_name: sanitizedName,
        from_email: sanitizedEmail,
        user_email: sanitizedEmail,
        user_name: sanitizedName,
        subject: sanitizedSubject,
        message: sanitizedMessage,
        message_html: sanitizedMessage.replace(/\n/g, '<br>'),
        to_name: "Tanmay Warthe",
        reply_to: sanitizedEmail,
        reply_email: sanitizedEmail,
        date: new Date().toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      const emailPromise = emailjs.send(serviceId, templateId, templateParams);
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timeout. Please try again.")), 10000)
      );

      const result = await Promise.race([emailPromise, timeoutPromise]);

      console.log("Email sent successfully:", result);

      setSubmitStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "", company: "" });
      setFieldErrors({});

      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Error sending email:", error);

      let userMessage = "";

      if (error.message) {
        if (error.message.includes("VITE_EMAILJS")) {
          userMessage = error.message;
        } else if (error.message.includes("timeout")) {
          userMessage = "The request took too long. Please check your connection and try again.";
        } else if (error.text) {
          userMessage = `EmailJS Error: ${error.text}. `;
          if (error.text.includes("Invalid template ID")) {
            userMessage += "Please check your VITE_EMAILJS_TEMPLATE_ID in your .env file.";
          } else if (error.text.includes("Invalid service ID")) {
            userMessage += "Please check your VITE_EMAILJS_SERVICE_ID in your .env file.";
          } else if (error.text.includes("Invalid public key")) {
            userMessage += "Please check your VITE_EMAILJS_PUBLIC_KEY in your .env file.";
          } else {
            userMessage += "Please verify your EmailJS configuration.";
          }
        } else {
          userMessage = error.message;
        }
      }

      if (!userMessage) {
        userMessage = "There was an error sending your message. Please try again or contact me directly at tanmaywarthe02@gmail.com";
      }

      setSubmitStatus('error');
      setErrorMessage(userMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/TanmayWarthe",
      icon: "🐙",
      description: "Check out my projects and code"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tanmay-warthe/",
      icon: "💼",
      description: "Connect professionally"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/_tanmay_warthe",
      icon: "🐦",
      description: "Follow my updates"
    }
  ];

  return (
    <motion.section
      className="relative isolate bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
      }}
    >
      {/* Subtle Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-50/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 space-y-12 text-gray-800">
        {/* Header */}
        <motion.div variants={heroVariants} className="text-center space-y-4">
          <span className="px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-red-700 bg-red-100 rounded-full inline-block">
            Connect • Collaborate • Create
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-600">
            I'm always interested in hearing about new opportunities, interesting projects, or just want to say hello. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          {/* Contact Form */}
          <motion.div variants={heroVariants}>
            <div className="rounded-3xl border border-red-100 bg-white/80 shadow-[0_10px_50px_rgba(220,38,38,0.08)] backdrop-blur p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send me a message</h3>

              {/* Success/Error Messages */}
              <AnimatePresence mode="wait">
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3"
                  >
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <div className="flex-1">
                      <p className="text-green-800 text-sm font-medium">
                        Message sent successfully!
                      </p>
                      <p className="text-green-700 text-xs mt-1">
                        Thank you for your message! I'll get back to you within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3"
                  >
                    <span className="text-red-600 text-xl flex-shrink-0">✕</span>
                    <div className="flex-1">
                      <p className="text-red-800 text-sm font-medium">
                        Failed to send message
                      </p>
                      <p className="text-red-700 text-xs mt-1">
                        {errorMessage || "There was an error sending your message. Please try again."}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot field */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-colors ${fieldErrors.name
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-300 focus:border-red-500'
                      }`}
                    placeholder="Your name"
                  />
                  {fieldErrors.name && (
                    <p className="mt-1 text-xs text-red-600">{fieldErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-colors ${fieldErrors.email
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-300 focus:border-red-500'
                      }`}
                    placeholder="your.email@example.com"
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-colors ${fieldErrors.subject
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-300 focus:border-red-500'
                      }`}
                    placeholder="What's this about?"
                  />
                  {fieldErrors.subject && (
                    <p className="mt-1 text-xs text-red-600">{fieldErrors.subject}</p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <span className={`text-xs ${formData.message.length > 2000
                      ? 'text-red-600'
                      : formData.message.length > 1800
                        ? 'text-yellow-600'
                        : 'text-gray-500'
                      }`}>
                      {formData.message.length}/2000
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    maxLength={2000}
                    className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-colors resize-none ${fieldErrors.message
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-300 focus:border-red-500'
                      }`}
                    placeholder="Tell me more about your project or inquiry..."
                  />
                  {fieldErrors.message && (
                    <p className="mt-1 text-xs text-red-600">{fieldErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div variants={heroVariants} className="space-y-6">
            {/* Direct Contact */}
            <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-red-500 mb-4">Direct Contact</p>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <a
                    href="mailto:tanmaywarthe02@gmail.com"
                    className="text-red-600 hover:text-red-700 transition-colors font-medium"
                  >
                    tanmaywarthe02@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">Phone</p>
                  <a
                    href="tel:+918468853407"
                    className="text-red-600 hover:text-red-700 transition-colors font-medium"
                  >
                    +91 8468853407
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">Location</p>
                  <p className="text-gray-900 font-medium">Nagpur, Maharashtra, India</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">Response Time</p>
                  <p className="text-gray-900 font-medium">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-red-500 mb-4">Connect With Me</p>

              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 bg-gray-50 hover:border-red-300 hover:bg-red-50 transition-all duration-300 group"
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium group-hover:text-red-600 transition-colors">
                        {social.name}
                      </p>
                      <p className="text-sm text-gray-600">{social.description}</p>
                    </div>
                    <div className="text-gray-400 group-hover:text-red-500 transition-colors">
                      ↗
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
