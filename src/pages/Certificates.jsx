import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("all");

  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
  };

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
    document.body.style.overflow = 'unset';
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) closeModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

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
      imagePath: "/certify/GenAI Powered Data Analytics.jpg",
      category: "completion"
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
      imagePath: "/certify/python(basic).jpg",
      category: "completion"
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
      imagePath: "/certify/linux.jpg",
      category: "completion"
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
      imagePath: "/certify/hackNexux.jpg",
      category: "participation"
    },
    {
      id: 5,
      title: "Introduction to Retrieval Augmented Generation",
      issuer: "IBM",
      date: "2025",
      description: "Specialized certification in RAG systems, covering advanced AI techniques for information retrieval and generation.",
      skills: ["RAG", "Natural Language Processing", "Vector Databases", "AI Systems", "Information Retrieval"],
      icon: "🧠",
      color: "from-red-500 to-red-600",
      imagePath: "/certify/Introduction to Retrieval Augmented Generation.jpg",
      category: "completion"
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
      imagePath: "/certify/Ethical Considerations for Generative AI.jpg",
      category: "completion"
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
      imagePath: "/certify/Deloitte Tchnology Job Simulation.jpg",
      category: "completion"
    },
    {
      id: 8,
      title: "Viksit Bharat Young Leaders Dialogue (VBYLD) 2026 Online Quiz",
      issuer: "Ministry of Youth Affairs & Sports, Government of India",
      date: "2025",
      description: "Successfully completed the VBYLD 2026 Online Quiz demonstrating knowledge and engagement with India's development vision.",
      skills: ["National Development", "Youth Leadership", "Civic Engagement", "India's Vision 2047", "Government Initiatives"],
      icon: "🇮🇳",
      color: "from-orange-500 to-green-500",
      imagePath: "/certify/VBYLD.jpg",
      category: "participation"
    },
  ];

  const filteredCerts = filter === "all"
    ? certificatesData
    : certificatesData.filter(c => c.category === filter);

  return (
    <motion.section
      className="relative isolate bg-purple-50/30 py-20 sm:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
      }}
    >
      {/* Subtle Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-red-300/30 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-red-500/20 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 space-y-12 text-gray-800">
        {/* Header */}
        <motion.div variants={heroVariants} className="text-center space-y-4">
          <span className="px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-red-700 bg-red-100 rounded-full inline-block">
            Achievements • Certifications • Learning
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Certificates & Achievements
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-600">
            Professional certifications and achievements showcasing my learning journey and technical expertise
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div variants={heroVariants} className="flex justify-center gap-3">
          {[
            { label: "All", value: "all", count: certificatesData.length },
            { label: "Completion", value: "completion", count: certificatesData.filter(c => c.category === "completion").length },
            { label: "Participation", value: "participation", count: certificatesData.filter(c => c.category === "participation").length }
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === tab.value
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-white/80 text-gray-700 border border-gray-200 hover:border-red-300 hover:bg-red-50'
                }`}
            >
              {tab.label} <span className="ml-1.5 text-xs opacity-75">({tab.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                variants={item}
                layout
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(cert)}
                className="cursor-pointer group"
              >
                <div className="h-full rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-red-200 flex flex-col">
                  {/* Icon & Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {cert.icon}
                    </div>
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${cert.category === 'completion'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                      }`}>
                      {cert.category === 'completion' ? 'Completed' : 'Participated'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[56px] group-hover:text-red-600 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="line-clamp-1">{cert.issuer}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">
                    {cert.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{cert.date}</span>
                    </div>
                    <span className="text-xs font-semibold text-red-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                      View
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={heroVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { label: "Total Certificates", value: certificatesData.length, icon: "📜" },
            { label: "Completion", value: certificatesData.filter(c => c.category === "completion").length, icon: "✅" },
            { label: "Participation", value: certificatesData.filter(c => c.category === "participation").length, icon: "🎯" },
            { label: "Skills Gained", value: "25+", icon: "🚀" }
          ].map((stat, idx) => (
            <div key={idx} className="rounded-2xl border border-gray-200 bg-white/70 p-5 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-2xl font-bold text-red-600 mb-1">{stat.value}</p>
              <p className="text-xs uppercase tracking-wider text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && selectedCert && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

              <motion.div
                className="relative bg-white rounded-2xl w-full max-w-2xl md:max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl"
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 p-5 flex items-start justify-between z-10">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className={`w-12 h-12 bg-gradient-to-r ${selectedCert.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                      {selectedCert.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 pr-8">{selectedCert.title}</h3>
                      <p className="text-sm text-gray-600">{selectedCert.issuer}</p>
                      <p className="text-xs text-gray-500 mt-1">{selectedCert.date}</p>
                    </div>
                  </div>

                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                    aria-label="Close modal"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Certificate Image */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <img
                      src={selectedCert.imagePath}
                      alt={`${selectedCert.title} certificate`}
                      className="w-full h-auto max-h-[56vh] object-contain rounded-lg"
                    />
                  </div>

                  {/* Description */}
                  <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">About this certification</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {selectedCert.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Skills & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 text-sm rounded-full border border-gray-200 bg-white text-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
