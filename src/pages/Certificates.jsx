import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollButtons, setShowScrollButtons] = useState({ completion: false, participation: false });

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  
  const completionRowRef = useRef(null);
  const participationRowRef = useRef(null);

  // Check if scroll buttons should be shown
  useEffect(() => {
    const checkScroll = () => {
      const completion = completionRowRef.current;
      const participation = participationRowRef.current;
      
      setShowScrollButtons({
        completion: completion && completion.scrollWidth > completion.clientWidth,
        participation: participation && participation.scrollWidth > participation.clientWidth
      });
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollRowByOneCard = (ref, direction = 1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector('[data-card="true"]');
    const cardWidth = card ? card.offsetWidth : 340;
    const gap = 24; // matches gap-6
    const amount = cardWidth + gap;
    el.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
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
      color: "from-blue-500 to-cyan-500",
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
      description: "Successfully completed the VBYLD 2026 Online Quiz demonstrating knowledge and engagement with India's development vision. This quiz covered topics related to youth leadership, national development goals, and the Viksit Bharat initiative.",
      skills: ["National Development", "Youth Leadership", "Civic Engagement", "India's Vision 2047", "Government Initiatives"],
      icon: "🇮🇳",
      color: "from-orange-500 to-green-500",
      imagePath: "/certify/VBYLD.jpg",
      category: "participation"
    },
  ];

  const completionCerts = certificatesData.filter(c => c.category === "completion");
  const participationCerts = certificatesData.filter(c => c.category === "participation");

  const CertificateRow = ({ certs, rowRef, title, showButtons }) => (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mt-10"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <span className="px-2.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full">
            {certs.length}
          </span>
        </div>
        {showButtons && (
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scrollRowByOneCard(rowRef, -1)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scrollRowByOneCard(rowRef, 1)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="relative group">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="overflow-x-auto overflow-y-visible no-scrollbar snap-x snap-mandatory py-3" ref={rowRef}>
          <div className="flex gap-6 items-stretch">
            {certs.map((cert) => (
              <motion.div 
                key={cert.id}
                variants={item}
                data-card="true"
                className="flex-none w-[300px] sm:w-[340px] md:w-[360px] cursor-default group/card snap-start"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 transition-all duration-300 h-full flex flex-col hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-500 ring-1 ring-transparent hover:ring-blue-400/30">
                  <div className={`w-14 h-14 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center text-3xl mb-4 group-hover/card:scale-110 transition-transform duration-300 shadow-lg`}>
                    {cert.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors line-clamp-2 min-h-[48px] sm:min-h-[52px]">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm mb-3">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="line-clamp-1">{cert.issuer}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 flex-grow">
                    {cert.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{cert.date}</span>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); openModal(cert); }}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-sm flex items-center gap-1"
                      aria-label={`View ${cert.title} certificate`}
                    >
                      View
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

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
          Certificates & Achievements
        </h2>
        <div className="mx-auto w-20 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4" />
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Professional certifications and achievements showcasing my learning journey and technical expertise
        </p>
      </motion.div>

      <CertificateRow 
        certs={completionCerts} 
        rowRef={completionRowRef} 
        title="Completion Certificates" 
        showButtons={showScrollButtons.completion}
      />
      
      <CertificateRow 
        certs={participationCerts} 
        rowRef={participationRowRef} 
        title="Participation Certificates" 
        showButtons={showScrollButtons.participation}
      />

      {/* Enhanced Modal */}
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
              className="relative bg-white dark:bg-gray-900 rounded-2xl w-full max-w-2xl md:max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl scrollbar-hide overscroll-contain"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              style={{ scrollbarWidth: 'none' }}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4 md:p-5 flex items-start justify-between z-10">
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className={`w-12 h-12 bg-gradient-to-r ${selectedCert.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}>
                    {selectedCert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 pr-8">{selectedCert.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {selectedCert.issuer}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {selectedCert.date}
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 space-y-5 md:space-y-6">
                {/* Certificate Image */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-xl p-3 md:p-4 shadow-inner">
                  <img
                    src={selectedCert.imagePath}
                    alt={`${selectedCert.title} certificate`}
                    className="w-full h-auto max-h-[48vh] md:max-h-[56vh] object-contain rounded-lg shadow-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden flex-col items-center justify-center py-10 md:py-12 text-gray-400">
                    <svg className="w-16 h-16 mb-3 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm font-medium">Certificate image not available</p>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-xl p-4 md:p-5 border border-blue-100 dark:border-blue-900/30">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">About this certification</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {selectedCert.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Skills & Technologies</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
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
  );
}
