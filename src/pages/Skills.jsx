import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const tickerRef = useRef(null);

  // Skills data with official Devicon classes and colors
  const skills = [
    {
      name: "Python",
      icon: "devicon-python-plain",
      color: "#3776AB"
    },
    {
      name: "Django",
      icon: "devicon-django-plain",
      color: "#092E20"
    },
    {
      name: "React",
      icon: "devicon-react-original",
      color: "#61DAFB"
    },
    {
      name: "Node.js",
      icon: "devicon-nodejs-plain",
      color: "#339933"
    },
    {
      name: "MongoDB",
      icon: "devicon-mongodb-plain",
      color: "#47A248"
    },
    {
      name: "TypeScript",
      icon: "devicon-typescript-plain",
      color: "#3178C6"
    },
    {
      name: "JavaScript",
      icon: "devicon-javascript-plain",
      color: "#F7DF1E"
    },
    {
      name: "C",
      icon: "devicon-c-plain",
      color: "#659AD2"
    },
    {
      name: "C++",
      icon: "devicon-cplusplus-plain",
      color: "#00599C"
    },
    {
      name: "HTML5",
      icon: "devicon-html5-plain",
      color: "#E34F26"
    },
    {
      name: "CSS3",
      icon: "devicon-css3-plain",
      color: "#1572B6"
    },
    {
      name: "Tailwind CSS",
      icon: "devicon-tailwindcss-plain",
      color: "#06B6D4"
    },
    {
      name: "Bootstrap",
      icon: "devicon-bootstrap-plain",
      color: "#7952B3"
    }
  ];

  // Auto-scrolling ticker effect
  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    let scrollPos = 0;
    const scrollSpeed = 1;
    
    const scrollTicker = () => {
      scrollPos += scrollSpeed;
      if (scrollPos >= ticker.scrollWidth / 2) {
        scrollPos = 0;
      }
      ticker.scrollLeft = scrollPos;
    };

    const interval = setInterval(scrollTicker, 50);
    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.2 
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

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
      {/* Header Section */}
      <motion.div 
        className="text-center"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          Skills & Technologies
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here are the technologies and tools I work with on a daily basis
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={item}
            className="group"
          >
            {/* Skill Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300">
              
              {/* Icon */}
              <div className="mb-3 sm:mb-4">
                <i className={`${skill.icon} text-3xl sm:text-4xl`} style={{ color: skill.color }}></i>
              </div>
              
              {/* Skill Name */}
              <h3 className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Categories */}
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Programming Languages */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-4">Programming Languages</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">Python</span>
                <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">JavaScript</span>
                <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">C/C++</span>
                <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Frontend */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-4">Frontend</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">React</span>
                <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">HTML/CSS</span>
                <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">Tailwind</span>
                <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend & Database */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-4">Backend & Database</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">Django</span>
                <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">Node.js</span>
                <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">MongoDB</span>
                <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Skills Ticker */}
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center">Technologies I Work With</h3>
          <div className="relative">
            <div 
              ref={tickerRef}
              className="flex gap-4 sm:gap-6 overflow-hidden py-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <i className={`${skill.icon} text-base sm:text-lg`} style={{ color: skill.color }}></i>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


