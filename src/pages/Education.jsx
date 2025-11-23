import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const educationData = [
    {
      year: "2025 - Present",
      degree: "Bachelor of Technology in Computer Technology",
      institution: "Yeshwantrao Chavan College of Engineering (YCCE)",
      location: "Nagpur, Maharashtra",
      description: "Currently pursuing B.Tech in Computer Technology through Direct Second Year (DSY) admission. Focus on advanced computer engineering concepts, software development, and emerging technologies.",
      achievements: ["Computer Technology Specialization", "Advanced Engineering Curriculum"],
      icon: "🎓",
      color: "from-blue-400 via-blue-500 to-cyan-500",
      accentColor: "blue"
    },
    {
      year: "2022 - 2025",
      degree: "Diploma in Computer Technology",
      institution: "Government Polytechnic Bramhapuri",
      location: "Bramhapuri, Maharashtra",
      description: "Completed comprehensive diploma program covering computer fundamentals, programming, networking, and practical applications in computer technology.",
      achievements: ["Computer Technology Diploma", "Practical Programming Skills", "Networking Fundamentals", "Database Management"],
      icon: "📚",
      color: "from-cyan-500 via-cyan-600 to-blue-600",
      accentColor: "cyan"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl"
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
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-red-100/20 to-pink-100/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Header Section */}
      <motion.div
        className="text-center mb-8 sm:mb-10 relative z-10"
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
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-red-500/30">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-red-600 to-gray-900">
          Educational Journey
        </h2>

        <motion.div
          className="mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          My academic path through computer technology and engineering, building a strong foundation for innovation and problem-solving
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
        {/* Enhanced Timeline Line with Gradient */}
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-200 via-red-400 to-red-200 rounded-full shadow-lg" />

        <div className="space-y-6 sm:space-y-10">
          {educationData.map((edu, index) => (
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
                    className="w-5 h-5 bg-gradient-to-br from-red-500 to-red-600 rounded-full border-4 border-white shadow-xl"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(239, 68, 68, 0.4)",
                        "0 0 0 10px rgba(239, 68, 68, 0)",
                        "0 0 0 0 rgba(239, 68, 68, 0)"
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

              {/* Enhanced Content Card with Glassmorphism */}
              <motion.div
                className="ml-14 sm:ml-20 relative"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative Corner Element */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-2xl group-hover:from-red-500/20 transition-all duration-500" />

                <div className="relative backdrop-blur-sm bg-white/90 border border-gray-200/50 rounded-2xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-red-300/50 overflow-hidden">

                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-2xl" />
                  </div>

                  {/* Header Section */}
                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-5">
                    <div className="flex-1">
                      {/* Degree Icon and Title */}
                      <div className="flex items-start gap-4 mb-3">
                        <motion.div
                          className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg flex-shrink-0`}
                          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {edu.icon}
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                            {edu.degree}
                          </h3>
                          <h4 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                            {edu.institution}
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Year and Location */}
                    <div className="flex flex-col items-start lg:items-end gap-3 mt-4 lg:mt-0">
                      <motion.span
                        className="px-4 py-2 text-sm font-bold text-red-600 bg-gradient-to-r from-red-50 to-red-100 rounded-full border-2 border-red-200 shadow-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        {edu.year}
                      </motion.span>
                      <div className="flex items-center gap-2 text-gray-600">
                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm font-medium">{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative z-10 mb-4 sm:mb-5">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {edu.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="relative z-10 space-y-3 mb-4">
                    <h5 className="text-sm sm:text-base font-bold text-gray-900 flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                      Key Achievements & Skills
                    </h5>
                    <div className="flex flex-wrap gap-2.5">
                      {edu.achievements.map((achievement, idx) => (
                        <motion.span
                          key={idx}
                          className="px-4 py-2 text-xs sm:text-sm font-medium bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-full border border-gray-200 hover:border-red-300 hover:from-red-50 hover:to-red-100 hover:text-red-700 transition-all duration-300 cursor-pointer shadow-sm"
                          whileHover={{ scale: 1.08, y: -2 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          ✓ {achievement}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Progress Indicator */}
                  <div className="relative z-10 mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-gray-200/50">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-600 mb-3">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        Program Progress
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${index === 0 ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                        {index === 0 ? "In Progress" : "Completed"}
                      </span>
                    </div>
                    <div className="relative w-full bg-gray-200 rounded-full h-2.5 overflow-hidden shadow-inner">
                      <motion.div
                        className={`h-2.5 rounded-full bg-gradient-to-r ${edu.color} shadow-lg`}
                        initial={{ width: 0 }}
                        whileInView={{ width: index === 0 ? "48%" : "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Floating Elements */}
        <motion.div
          className="absolute top-20 right-12 w-3 h-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-70 shadow-lg"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-24 left-20 w-2.5 h-2.5 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-70 shadow-lg"
          animate={{
            y: [0, 15, 0],
            x: [0, -8, 0],
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 right-6 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60 shadow-lg"
          animate={{
            y: [0, -12, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.4, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>

      {/* Enhanced Educational Philosophy Section */}
      {/* <motion.div
        className="mt-12 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative backdrop-blur-sm bg-gradient-to-br from-gray-50/90 via-red-50/50 to-orange-50/30 rounded-3xl p-6 sm:p-8 border border-gray-200/50 shadow-2xl overflow-hidden">

          {/* Decorative Background */}
          {/* <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-200/30 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block mb-4"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </motion.div>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Learning Philosophy
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              My approach to education combines theoretical knowledge with practical application
            </p>
          </div>

          <div className="relative z-10 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                ),
                title: "Innovation",
                description: "Embracing new technologies and creative problem-solving approaches",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                ),
                title: "Continuous Learning",
                description: "Always seeking to expand knowledge and stay current with industry trends",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                title: "Collaboration",
                description: "Working with peers and mentors to achieve shared learning goals",
                color: "from-purple-500 to-pink-500"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </motion.div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div> */}
    </div>
  );
}
