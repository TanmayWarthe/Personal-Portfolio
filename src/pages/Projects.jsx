import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const projectsData = [
    // {
    //   title: "QuickMeds - Online Pharmacy",
    //   description: "A comprehensive Django-based online pharmacy management system featuring secure user authentication, product catalog, shopping cart, order management, admin dashboard, and prescription verification. Built with modern web technologies and deployed on Render.",
    //   href: "https://github.com/TanmayWarthe/QuickMeds-An-Online-Pharamacy",
    //   demoUrl: "https://dawai-ki-dukan.onrender.com",
    //   tags: ["Django", "Python", "Bootstrap", "SQLite", "JavaScript", "HTML/CSS"],
    //   image: "/src/assets/projects/quickmeds-thumbnail.svg",
    //   category: "Full-Stack Web App",
    //   status: "Live Demo"
    // }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <motion.div 
        className="text-center mb-8 sm:mb-12"
        variants={item}
        initial="hidden"
        whileInV   iew="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <div className="mx-auto w-20 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4" />
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Showcasing my technical skills through innovative projects that solve real-world problems
        </p>
      </motion.div>


      <motion.div
        className="mb-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Project Categories Overview */}
        {/* <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div variants={item} className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Web Development</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Full-stack applications with modern frameworks</p>
          </motion.div>
          
          <motion.div variants={item} className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Mobile Apps</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Cross-platform mobile applications</p>
          </motion.div>
          
          <motion.div variants={item} className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI & ML</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Intelligent systems and data analysis</p>
          </motion.div>
        </div> */}

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <motion.div key={index} variants={item} className="group">
          <ProjectCard 
                title={project.title}
                description={project.description}
                href={project.href}
                demoUrl={project.demoUrl}
                tags={project.tags}
                image={project.image}
                category={project.category}
                status={project.status}
          />
        </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Development Process */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Development Approach
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm">
              My systematic approach to building robust and scalable applications
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm sm:text-lg">1</span>
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-1">Planning</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">Requirements analysis and architecture design</p>
            </div>
            
            <div className="text-center group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm sm:text-lg">2</span>
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-1">Development</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">Clean code implementation and testing</p>
            </div>
            
            <div className="text-center group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm sm:text-lg">3</span>
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-1">Testing</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">Comprehensive testing and quality assurance</p>
            </div>
            
            <div className="text-center group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm sm:text-lg">4</span>
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-1">Deployment</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">Production deployment and monitoring</p>
            </div>
          </div>
      </div>
      </motion.div>
    </div>
  );
}


