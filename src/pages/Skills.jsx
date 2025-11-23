import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skills = [
    { name: "Python", icon: "devicon-python-plain", color: "#3776AB" },
    { name: "Django", icon: "devicon-django-plain", color: "#092E20" },
    { name: "React", icon: "devicon-react-original", color: "#61DAFB" },
    { name: "JavaScript", icon: "devicon-javascript-plain", color: "#F7DF1E" },
    { name: "C", icon: "devicon-c-plain", color: "#659AD2" },
    { name: "C++", icon: "devicon-cplusplus-plain", color: "#00599C" },
    { name: "HTML5", icon: "devicon-html5-plain", color: "#E34F26" },
    { name: "CSS3", icon: "devicon-css3-plain", color: "#1572B6" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", color: "#06B6D4" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain", color: "#7952B3" },
    { name: "Node.js", icon: "devicon-nodejs-plain", color: "#339933" },
    { name: "MongoDB", icon: "devicon-mongodb-plain", color: "#47A248" },
    { name: "TypeScript", icon: "devicon-typescript-plain", color: "#3178C6" },
    { name: "Git", icon: "devicon-git-plain", color: "#F05032" },
    { name: "GitHub", icon: "devicon-github-original", color: "#181717" },
    { name: "VS Code", icon: "devicon-vscode-plain", color: "#007ACC" },
    { name: "Linux", icon: "devicon-linux-plain", color: "#FCC624" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain", color: "#336791" },
    { name: "Docker", icon: "devicon-docker-plain", color: "#2496ED" },
    { name: "AWS", icon: "devicon-amazonwebservices-plain", color: "#FF9900" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "backOut" }
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Header Section */}
      <motion.div
        className="text-center mb-12 sm:mb-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="inline-block mb-4"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-purple-500/30">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900">
          Technical Skills
        </h2>

        <motion.div
          className="mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent rounded-full mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A comprehensive toolkit of technologies and frameworks I use to build digital solutions
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6 relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={item}
            className="group relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className="relative aspect-square rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col items-center justify-center p-4 cursor-pointer overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              style={{
                borderColor: hoveredIndex === index ? skill.color : 'rgba(243, 244, 246, 1)'
              }}
            >
              {/* Background Gradient on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-200"
                style={{ background: skill.color }}
              />

              {/* Icon */}
              <motion.i
                className={`${skill.icon} text-4xl sm:text-5xl mb-3 relative z-10 transition-colors duration-200`}
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                  rotate: hoveredIndex === index ? [0, -5, 5, -5, 0] : 0,
                }}
                transition={{ duration: 0.2 }}
                style={{
                  color: hoveredIndex === index ? skill.color : '#4B5563'
                }}
              />

              {/* Skill Name */}
              <span
                className="text-xs sm:text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors duration-200 text-center relative z-10"
                style={{
                  color: hoveredIndex === index ? skill.color : undefined
                }}
              >
                {skill.name}
              </span>

              {/* Shine Effect */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1s_ease-in-out_infinite]"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
