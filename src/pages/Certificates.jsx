import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  const certificatesData = [
    {
      id: 1,
      title: "GenAI Powered Data Analytics",
      issuer: "Forage",
      date: "2025",
      description: "Advanced certification in Generative AI applications for data analytics, covering AI-powered insights and automated data processing.",
      skills: ["Generative AI", "Data Analytics", "Machine Learning", "Python", "Data Visualization"],
      icon: "🤖",
      color: "from-purple-500 to-pink-500",
      imagePath: "/certify/GenAI Powered Data Analytics.jpg"
    },
    {
      id: 2,
      title: "Python (Basic)",
      issuer: "HackerRank",
      date: "2025",
      description: "Fundamental Python programming certification covering basic syntax, data structures, and problem-solving techniques.",
      skills: ["Python", "Data Structures", "Algorithms", "Problem Solving", "Programming Logic"],
      icon: "🐍",
      color: "from-green-500 to-emerald-500",
      imagePath: "/certify/python(basic).jpg"
    },
    {
      id: 3,
      title: "Linux Fundamentals",
      issuer: "TrainWithShubham",
      date: "2025",
      description: "Comprehensive Linux certification covering command line operations, system administration, and shell scripting.",
      skills: ["Linux", "Command Line", "Shell Scripting", "System Administration", "File Systems"],
      icon: "🐧",
      color: "from-orange-500 to-red-500",
      imagePath: "/certify/linux.jpg"
    },
    {
      id: 4,
      title: "HackNexus Competition",
      issuer: "Yeshwantrao Chavan College of Engineering - YCCE",
      date: "2025",
      description: "Competitive programming and hackathon certification demonstrating problem-solving skills and algorithmic thinking.",
      skills: ["Competitive Programming", "Algorithms", "Data Structures", "Problem Solving", "Time Complexity"],
      icon: "🏆",
      color: "from-yellow-500 to-orange-500",
      imagePath: "/certify/hackNexux.jpg"
    },
    {
      id: 5,
      title: "Introduction to Retrieval Augmented Generation",
      issuer: "IBM",
      date: "2025",
      description: "Specialized certification in RAG systems, covering advanced AI techniques for information retrieval and generation.",
      skills: ["RAG", "Natural Language Processing", "Vector Databases", "AI Systems", "Information Retrieval"],
      icon: "🧠",
      color: "from-blue-500 to-cyan-500",
      imagePath: "/certify/Introduction to Retrieval Augmented Generation.jpg"
    },
    {
      id: 6,
      title: "Ethical Considerations for Generative AI",
      issuer: "IBM",
      date: "2025",
      description: "Critical certification covering ethical frameworks, responsible AI development, and governance in generative AI systems.",
      skills: ["AI Ethics", "Responsible AI", "Governance", "Bias Detection", "Fairness"],
      icon: "⚖️",
      color: "from-indigo-500 to-purple-500",
      imagePath: "/certify/Ethical Considerations for Generative AI.jpg"
    },
    {
      id: 7,
      title: "Deloitte Technology Job Simulation",
      issuer: "Deloitte",
      date: "2025",
      description: "Professional simulation certification from Deloitte covering technology consulting, project management, and client solutions.",
      skills: ["Technology Consulting", "Project Management", "Client Solutions", "Business Analysis", "Strategic Planning"],
      icon: "💼",
      color: "from-slate-500 to-gray-600",
      imagePath: "/certify/Deloitte Tchnology Job Simulation.jpg"
    },
    {
      id: 8,
      title: "Viksit Bharat Young Leaders Dialogue (VBYLD) 2026 Online Quiz",
      issuer: "Ministry of Youth Affairs & Sports, Government of India",
      date: "2025",
      description: "Successfully completed the VBYLD 2026 Online Quiz demonstrating knowledge and engagement with India's development vision. This quiz covered topics related to youth leadership, national development goals, and the Viksit Bharat initiative.",
      skills: ["National Development", "Youth Leadership", "Civic Engagement", "India's Vision 2047", "Government Initiatives"],
      icon: "🇮🇳",
      color: "from-orange-500 to-green-500",
      imagePath: "/certify/VBYLD.jpg"
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <motion.div 
        className="text-center mb-8 sm:mb-12"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Certificates
        </h2>
        <div className="mx-auto w-20 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4" />
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Professional certifications and achievements showcasing my learning journey and technical expertise
        </p>
      </motion.div>

      {/* Certificate Grid - Horizontal Layout */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {certificatesData.map((cert) => (
          <motion.div 
            key={cert.id} 
            variants={item}
            className="cursor-pointer group"
            onClick={() => openModal(cert)}
          >
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
              {/* Icon Header */}
              <div className={`w-14 h-14 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {cert.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                {cert.title}
              </h3>
              
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm mb-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="line-clamp-1">{cert.issuer}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs mb-4">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{cert.date}</span>
              </div>
              
              {/* View Button */}
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                <span>View</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Simple Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60" />
            
                         {/* Modal Content */}
             <motion.div
               className="relative bg-white dark:bg-gray-900 rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl scrollbar-hide"
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.9, opacity: 0 }}
               transition={{ duration: 0.2 }}
               onClick={(e) => e.stopPropagation()}
               style={{
                 scrollbarWidth: 'none',
                 msOverflowStyle: 'none'
               }}
             >
              {/* Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${selectedCert.color} rounded-lg flex items-center justify-center text-xl`}>
                    {selectedCert.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{selectedCert.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{selectedCert.issuer}</p>
                  </div>
                </div>
                
                {/* Simple Close Button */}
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Certificate Info */}
              <div className="p-6 space-y-4">
                {/* Description */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">About</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedCert.description}
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Skills & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certificate Image */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src={selectedCert.imagePath}
                    alt={selectedCert.title}
                    className="w-full h-auto rounded-lg shadow-md"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="hidden text-center py-8 text-gray-400">
                    <svg className="w-10 h-10 mx-auto mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs">Certificate image not available</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
