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

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Subject validation
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
      isValid = false;
    } else if (formData.subject.trim().length < 3) {
      errors.subject = "Subject must be at least 3 characters";
      isValid = false;
    }

    // Message validation
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

  // Sanitize input to prevent XSS
  const sanitizeInput = (input) => {
    return input.trim().replace(/[<>]/g, "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors({
        ...fieldErrors,
        [name]: ""
      });
    }
    
    // Clear general error message
    if (submitStatus === 'error') {
      setSubmitStatus(null);
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Rate limiting: prevent submissions within 3 seconds
    const now = Date.now();
    if (now - lastSubmitTime.current < 3000) {
      setSubmitStatus('error');
      setErrorMessage("Please wait a moment before submitting again.");
      return;
    }
    lastSubmitTime.current = now;

    // Validate form
    if (!validateForm()) {
      setSubmitStatus('error');
      setErrorMessage("Please fix the errors in the form.");
      return;
    }

    // Honeypot check: if filled, treat as spam and silently ignore
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

      // Check for missing configuration
      if (!publicKey || publicKey.includes('your_emailjs') || publicKey.includes('here')) {
        throw new Error("VITE_EMAILJS_PUBLIC_KEY is missing or using placeholder. Please add your actual Public Key to your .env file.");
      }
      if (!serviceId || serviceId.includes('your_emailjs') || serviceId.includes('here')) {
        throw new Error("VITE_EMAILJS_SERVICE_ID is missing or using placeholder. Please add your actual Service ID to your .env file.");
      }
      if (!templateId || templateId.includes('your_emailjs') || templateId.includes('here')) {
        throw new Error("VITE_EMAILJS_TEMPLATE_ID is missing or using placeholder. Please add your actual Template ID to your .env file.");
      }

      // Sanitize inputs
      const sanitizedName = sanitizeInput(formData.name);
      const sanitizedEmail = sanitizeInput(formData.email);
      const sanitizedSubject = sanitizeInput(formData.subject);
      const sanitizedMessage = sanitizeInput(formData.message);

      // Template parameters - these must match your EmailJS template variables
      const templateParams = {
        from_name: sanitizedName,
        from_email: sanitizedEmail,
        user_email: sanitizedEmail, // Alternative name some templates use
        user_name: sanitizedName, // Alternative name some templates use
        subject: sanitizedSubject,
        message: sanitizedMessage,
        message_html: sanitizedMessage.replace(/\n/g, '<br>'), // HTML version for better formatting
        to_name: "Tanmay Warthe",
        reply_to: sanitizedEmail,
        reply_email: sanitizedEmail, // Alternative name
        date: new Date().toLocaleString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      // Send email with timeout
      const emailPromise = emailjs.send(serviceId, templateId, templateParams);
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Request timeout. Please try again.")), 10000)
      );

      const result = await Promise.race([emailPromise, timeoutPromise]);
      
      // Log success for debugging (remove in production if needed)
      console.log("Email sent successfully:", result);

      setSubmitStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "", company: "" });
      setFieldErrors({});
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Error sending email:", error);
      
      // Provide user-friendly error messages with specific details
      let userMessage = "";
      
      if (error.message) {
        // Configuration errors
        if (error.message.includes("VITE_EMAILJS")) {
          userMessage = error.message;
        } 
        // Timeout errors
        else if (error.message.includes("timeout")) {
          userMessage = "The request took too long. Please check your connection and try again.";
        }
        // EmailJS API errors
        else if (error.text) {
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
        }
        // Other errors
        else {
          userMessage = error.message;
        }
      }
      
      // Fallback message
      if (!userMessage) {
        userMessage = "There was an error sending your message. Please try again or contact me directly at tanmaywarthe02@gmail.com";
      }
      
      setSubmitStatus('error');
      setErrorMessage(userMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.1 
      } 
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    },
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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <motion.div 
        className="text-center mb-8 sm:mb-12"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Get In Touch
        </h2>
        <div className="mx-auto w-20 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4" />
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I'm always interested in hearing about new opportunities, interesting projects, or just want to say hello. Feel free to reach out!
        </p>
      </motion.div>

      <motion.div 
        className="grid lg:grid-cols-2 gap-6 sm:gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Contact Form */}
        <motion.div variants={item} className="space-y-4 sm:space-y-6">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Send me a message</h3>
            
            {/* Success/Error Messages */}
            <AnimatePresence mode="wait">
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                  className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start space-x-3"
                >
                  <span className="text-green-600 dark:text-green-400 text-xl flex-shrink-0">✓</span>
                  <div className="flex-1">
                    <p className="text-green-800 dark:text-green-200 text-sm font-medium">
                      Message sent successfully!
                    </p>
                    <p className="text-green-700 dark:text-green-300 text-xs mt-1">
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
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                  className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start space-x-3"
                >
                  <span className="text-red-600 dark:text-red-400 text-xl flex-shrink-0">✕</span>
                  <div className="flex-1">
                    <p className="text-red-800 dark:text-red-200 text-sm font-medium">
                      Failed to send message
                    </p>
                    <p className="text-red-700 dark:text-red-300 text-xs mt-1">
                      {errorMessage || "There was an error sending your message. Please try again or contact me directly via email."}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" noValidate>
              {/* Honeypot field (hidden from users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company" className="sr-only">Company</label>
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
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors text-sm sm:text-base ${
                    fieldErrors.name 
                      ? 'border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:border-blue-500'
                  }`}
                  placeholder="Your name"
                  aria-invalid={fieldErrors.name ? "true" : "false"}
                  aria-describedby={fieldErrors.name ? "name-error" : undefined}
                />
                {fieldErrors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-600 dark:text-red-400" role="alert">
                    {fieldErrors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  inputMode="email"
                  autoComplete="email"
                  pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors text-sm sm:text-base ${
                    fieldErrors.email 
                      ? 'border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:border-blue-500'
                  }`}
                  placeholder="your.email@example.com"
                  aria-invalid={fieldErrors.email ? "true" : "false"}
                  aria-describedby={fieldErrors.email ? "email-error" : undefined}
                />
                {fieldErrors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-600 dark:text-red-400" role="alert">
                    {fieldErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors text-sm sm:text-base ${
                    fieldErrors.subject 
                      ? 'border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:border-blue-500'
                  }`}
                  placeholder="What's this about?"
                  aria-invalid={fieldErrors.subject ? "true" : "false"}
                  aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
                />
                {fieldErrors.subject && (
                  <p id="subject-error" className="mt-1 text-xs text-red-600 dark:text-red-400" role="alert">
                    {fieldErrors.subject}
                  </p>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message *
                  </label>
                  <span className={`text-xs ${
                    formData.message.length > 2000 
                      ? 'text-red-600 dark:text-red-400' 
                      : formData.message.length > 1800 
                        ? 'text-yellow-600 dark:text-yellow-400' 
                        : 'text-gray-500 dark:text-gray-400'
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
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors resize-none text-sm sm:text-base ${
                    fieldErrors.message 
                      ? 'border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:border-blue-500'
                  }`}
                  placeholder="Tell me more about your project or inquiry..."
                  aria-invalid={fieldErrors.message ? "true" : "false"}
                  aria-describedby={fieldErrors.message ? "message-error" : undefined}
                />
                {fieldErrors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-600 dark:text-red-400" role="alert">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl text-sm sm:text-base flex items-center justify-center space-x-2"
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

        {/* Contact Information & Social Links */}
        <motion.div variants={item} className="space-y-4 sm:space-y-6">
          {/* Direct Contact */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Direct Contact</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm sm:text-lg">📧</span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Email</p>
                  <a 
                    href="mailto:tanmaywarthe02@gmail.com" 
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium text-sm sm:text-base"
                  >
                    tanmaywarthe02@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">📱</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                  <a 
                    href="tel:+918468853407" 
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                  >
                    +91 8468853407
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">📍</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                  <p className="text-gray-900 dark:text-white font-medium">Nagpur, Maharashtra, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">⏰</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Response Time</p>
                  <p className="text-gray-900 dark:text-white font-medium">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-lg hover:shadow-xl transition-all duration-500">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h3>
            
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {social.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{social.description}</p>
                  </div>
                  <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
                    ↗
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}


