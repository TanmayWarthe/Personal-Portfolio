import React, { useEffect, useMemo, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink, Code, Database, Globe, Cpu, Zap, Layers } from "lucide-react";
import { Link } from "react-scroll";

function Hero() {
  const phrases = useMemo(() => [
    "Building code, crafting ideas.",
    "Exploring full-stack dev & AI integrations.",
    "Learning daily. Shipping often.",
    "Passionate about technology & innovation."
  ], []);
  
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    const step = () => {
      if (!deleting) {
        const next = current.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1200);
      } else {
        const next = current.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (next.length === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % phrases.length);
        }
      }
    };
    const speed = deleting ? 40 : 70;
    const t = setTimeout(step, speed);
    return () => clearTimeout(t);
  }, [displayText, deleting, index, phrases]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const floatingIcons = [
    { icon: Code, color: "from-blue-500 to-cyan-500", delay: 0, label: "Code" },
    { icon: Database, color: "from-cyan-500 to-blue-600", delay: 0.5, label: "Data" },
    { icon: Globe, color: "from-blue-600 to-blue-500", delay: 1, label: "Web" },
    { icon: Cpu, color: "from-purple-500 to-pink-500", delay: 1.5, label: "Tech" },
    { icon: Zap, color: "from-yellow-500 to-orange-500", delay: 2, label: "Fast" },
    { icon: Layers, color: "from-green-500 to-teal-500", delay: 2.5, label: "Stack" }
  ];

  return (
    <motion.section
      className="relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-20 sm:pt-24 md:pt-28 min-h-screen text-gray-900 dark:text-white"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      
      {/* Left Text Content */}
      <motion.div className="flex-1 z-10 text-center lg:text-left max-w-xl mx-auto lg:mx-0" variants={itemUp}>
        <motion.div className="mb-4" variants={itemUp}>
          <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800">
            Computer Technology Student
          </span>
        </motion.div>
        
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-600 dark:from-white dark:via-blue-200 dark:to-cyan-300 bg-clip-text text-transparent" variants={itemUp}>
          Tanmay Warthe
        </motion.h1>
        
        <motion.p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 whitespace-pre leading-relaxed" variants={itemUp}>
          {displayText}
          <span className="ml-1 inline-block w-3 border-r-2 border-blue-500 align-middle animate-pulse" />
        </motion.p>
        
        <motion.p className="mt-4 text-base text-gray-500 dark:text-gray-400 leading-relaxed" variants={itemUp}>
          Aspiring developer passionate about creating innovative solutions and building the future of technology.
        </motion.p>
        
        <motion.div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4" variants={itemUp}>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border-2 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Résumé
          </a>
        </motion.div>

        {/* Quick Stats
        <motion.div className="mt-8 flex justify-center md:justify-start gap-6 text-sm" variants={itemUp}>
          <div className="text-center">
            <div className="text-xl font-bold text-blue-600 dark:text-blue-400">2+</div>
            <div className="text-gray-500 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-cyan-600 dark:text-cyan-400">10+</div>
            <div className="text-gray-500 dark:text-gray-400">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-blue-600 dark:text-blue-400">5+</div>
            <div className="text-gray-500 dark:text-gray-400">Technologies</div>
          </div>
        </motion.div> */}
      </motion.div>

      {/* Right Visual: Enhanced Design */}
      <motion.div className="flex-1 w-full mt-8 sm:mt-12 lg:mt-0" variants={itemUp}>
        <div className="relative mx-auto w-full max-w-[400px] sm:max-w-[520px] aspect-[4/3] lg:aspect-auto lg:h-[460px]">
          {/* Main Card */}
          <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
            
            {/* Enhanced Floating Icons with Labels */}
            {floatingIcons.map((item, idx) => (
              <motion.div
                key={idx}
                className={`absolute w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg group cursor-pointer`}
                style={{
                  top: `${15 + (idx % 3) * 25}%`,
                  left: `${10 + (Math.floor(idx / 3)) * 30}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: item.delay,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                {/* Tooltip Label */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.label}
                </div>
              </motion.div>
            ))}

            {/* Enhanced Code Snippet */}
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 bg-gray-900 dark:bg-gray-950 rounded-xl p-3 sm:p-4 shadow-xl border border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs text-gray-400 font-mono">portfolio.js</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-mono leading-relaxed">
                <div className="text-blue-400">const</div>
                <div className="text-yellow-400">developer</div>
                <div className="text-gray-300">= {`{`}</div>
                <div className="ml-4 text-green-400">name:</div>
                <div className="ml-4 text-orange-400">'Tanmay Warthe',</div>
                <div className="ml-4 text-green-400">passion:</div>
                <div className="ml-4 text-orange-400">'Explore New Technologies',</div>
                <div className="ml-4 text-green-400">status:</div>
                <div className="ml-4 text-orange-400">'Keep Learning'</div>
                <div className="text-gray-300">{`}`}</div>
              </div>
            </div>

            {/* Device/Platform Selector Grid */}
            <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6 bg-gray-800/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-gray-700/50">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: Code, label: "Web", active: false },
                  { icon: Database, label: "Backend", active: false },
                  { icon: Cpu, label: "AI/ML", active: false },
                  { icon: Globe, label: "Full Stack", active: true },
                  { icon: Layers, label: "DevOps", active: false },
                  { icon: Zap, label: "Mobile", active: false }
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      item.active 
                        ? 'bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg shadow-purple-500/25' 
                        : 'bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/30'
                    }`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + idx * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      item.active ? 'text-white' : 'text-gray-400'
                    }`} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.path
                d="M 100 150 Q 200 100 300 200 T 500 300"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
              />
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent"></div>
          </div>

          {/* Enhanced Background Elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl -z-10"></div>
          <div className="absolute -inset-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl -z-20"></div>
        </div>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <Link to="about" smooth={true} duration={500}>
          <ArrowDown className="animate-bounce w-6 h-6 text-blue-500 dark:text-blue-400 cursor-pointer hover:text-blue-600 dark:hover:text-blue-300 transition-colors" />
        </Link>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
