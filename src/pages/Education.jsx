import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
      color: "from-blue-400 to-cyan-500"
    },
    {
      year: "2022 - 2025",
      degree: "Diploma in Computer Technology",
      institution: "Government Polytechnic Bramhapuri",
      location: "Bramhapuri, Maharashtra",
      description: "Completed comprehensive diploma program covering computer fundamentals, programming, networking, and practical applications in computer technology.",
      achievements: ["Computer Technology Diploma", "Practical Programming Skills", "Networking Fundamentals", "Database Management"],
      icon: "📚",
      color: "from-cyan-500 to-blue-600"
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
          Educational Journey
        </h2>
        <div className="mx-auto w-20 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4" />
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          My academic path through computer technology and engineering, building a strong foundation for innovation and problem-solving
        </p>
      </motion.div>

      <motion.div 
        className="relative"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Subtle Timeline Line */}
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-cyan-300 to-blue-200 dark:from-blue-800 dark:via-cyan-700 dark:to-blue-800" />
        
        <div className="space-y-8 sm:space-y-12">
          {educationData.map((edu, index) => (
            <motion.div key={index} variants={item} className="relative group">
              {/* Timeline Dot */}
              <motion.div 
                className="absolute left-3 sm:left-5 top-6 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-3 border-white dark:border-gray-900 shadow-lg"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Content Card */}
              <div className="ml-12 sm:ml-16 p-4 sm:p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:border-blue-200 dark:group-hover:border-blue-700">
                
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6">
                  <div className="flex-1">
                    {/* Degree Icon and Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${edu.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl shadow-lg`}>
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <h4 className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {edu.institution}
                        </h4>
                      </div>
                    </div>
                  </div>
                  
                  {/* Year and Location */}
                  <div className="flex flex-col items-end gap-2 mt-3 lg:mt-0">
                    <span className="px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800">
                      {edu.year}
                    </span>
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-xs">{edu.location}</span>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                    {edu.description}
                  </p>
                </div>
                
                {/* Achievements */}
                <div className="space-y-3">
                  <h5 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                    Key Achievements & Skills
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, idx) => (
                      <motion.span 
                        key={idx} 
                        className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 cursor-pointer"
                        whileHover={{ scale: 1.05, y: -1 }}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        {achievement}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1.5">
                    <span>Program Progress</span>
                    <span>{index === 0 ? "In Progress" : "Completed"}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <motion.div 
                      className={`h-1.5 rounded-full bg-gradient-to-r ${edu.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: index === 0 ? "48%" : "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-16 right-8 w-2.5 h-2.5 bg-blue-400 rounded-full opacity-60"
          animate={{
            y: [0, -12, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-16 left-16 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
          animate={{
            y: [0, 8, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>

      {/* Educational Philosophy Section */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Learning Philosophy
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm">
              My approach to education combines theoretical knowledge with practical application
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1.5">Innovation</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Embracing new technologies and creative problem-solving approaches</p>
            </div>
            
            <div className="text-center group">
              <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1.5">Continuous Learning</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Always seeking to expand knowledge and stay current with industry trends</p>
            </div>
            
            <div className="text-center group">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1.5">Collaboration</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Working with peers and mentors to achieve shared learning goals</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
