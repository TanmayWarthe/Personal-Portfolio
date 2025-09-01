import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="max-w-6xl mx-auto px-6 space-y-8">
      <motion.div 
        className="text-center"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">About Me</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Get to know me better and understand my journey in software development
        </p>
      </motion.div>

      <motion.div 
        className="grid lg:grid-cols-2 gap-8 items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={item} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Hi, I'm Tanmay 👋</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating innovative web applications. 
              My journey in software development started with curiosity and has evolved into a passion for 
              building solutions that make a difference.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in modern web technologies and enjoy working on projects that challenge me to 
              learn and grow. From Django backends to React frontends, I love bringing ideas to life 
              through clean, efficient code.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">What I Do</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">Full-Stack Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">Web Applications</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">API Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">Database Design</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="relative">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 flex items-center justify-center shadow-sm">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Developer & Creator</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Passionate about building amazing web experiences</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Additional Information */}
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center">My Approach</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-800 dark:text-white mb-2">Problem Solving</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">I approach challenges with creativity and logical thinking</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-800 dark:text-white mb-2">Fast Learning</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Quickly adapt to new technologies and frameworks</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-800 dark:text-white mb-2">Team Collaboration</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Work effectively with others to achieve common goals</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
