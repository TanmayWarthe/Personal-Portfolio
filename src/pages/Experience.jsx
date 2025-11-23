import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const experienceData = [
    {
      period: "Jun 2024 - Jul 2024",
      duration: "2 mos",
      title: "Intern",
      company: "SSIT Pvt Ltd Nagpur",
      location: "Nagpur, Maharashtra",
      description:
        "Learned about the basics of web development and how to build a website. Helped build clean UI, and test features.",
      highlights: [
        "Gained proficiency in Python and Django framework",
        "Learned and applied MVT (Model-View-Template) architecture principles",
        "Understood and implemented best practices for project structure",
        "Developed foundational skills in web development using Python and Django",
      ],
      skills: ["Python", "Django", "Web Development", "Bootstrap"],
      icon: "💻",
      color: "from-blue-500 via-blue-600 to-cyan-500",
      certificateUrl: "",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-40 left-0 w-72 h-72 bg-gradient-to-br from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Header Section */}
      <motion.div
        className="text-center mb-12 sm:mb-16 relative z-10"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="inline-block mb-4"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/30">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900">
          Professional Experience
        </h2>

        <motion.div
          className="mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          My professional journey and practical experience in the tech industry
        </p>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        className="relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Timeline Line */}
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 rounded-full shadow-lg" />

        <div className="space-y-10 sm:space-y-16">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
            >
              {/* Animated Timeline Dot */}
              <motion.div
                className="absolute left-2.5 sm:left-6.5 top-8 z-20"
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <motion.div
                    className="w-5 h-5 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full border-4 border-white shadow-xl"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0.4)",
                        "0 0 0 10px rgba(59, 130, 246, 0)",
                        "0 0 0 0 rgba(59, 130, 246, 0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>

              {/* Content Card */}
              <motion.div
                className="ml-14 sm:ml-20 relative"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative Corner Element */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl group-hover:from-blue-500/20 transition-all duration-500" />

                <div className="relative backdrop-blur-sm bg-white/90 border border-gray-200/50 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-blue-300/50 overflow-hidden">

                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-full blur-2xl" />
                  </div>

                  {/* Header Section */}
                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 sm:mb-8">
                    <div className="flex-1">
                      {/* Role and Company */}
                      <div className="flex items-start gap-4 mb-5">
                        <motion.div
                          className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg flex-shrink-0`}
                          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {exp.icon}
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                            {exp.title}
                          </h3>
                          <h4 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            {exp.company}
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Date and Location */}
                    <div className="flex flex-col items-start lg:items-end gap-3 mt-4 lg:mt-0">
                      <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="px-4 py-2 text-sm font-bold text-blue-600 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border-2 border-blue-200 shadow-sm">
                          {exp.period}
                        </span>
                        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                          {exp.duration}
                        </span>
                      </motion.div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm font-medium">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative z-10 mb-6 sm:mb-8">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {exp.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="relative z-10 mb-6">
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="relative z-10 space-y-4 mb-6">
                    <h5 className="text-sm sm:text-base font-bold text-gray-900 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                      Key Responsibilities
                    </h5>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {exp.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-2.5"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          <span className="text-sm text-gray-700 leading-relaxed">
                            {highlight}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Certificate Link */}
                  {exp.certificateUrl && (
                    <div className="relative z-10 mt-6 pt-6 border-t border-gray-200/50">
                      <a
                        href={exp.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group/link"
                      >
                        <span>View Certificate</span>
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
