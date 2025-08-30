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
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-[#93C5FD] via-[#38BDF8] to-[#22D3EE] bg-clip-text text-transparent">About Me</span>
        </h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8] to-[#06B6D4] shadow-[0_0_16px_rgba(56,189,248,0.55)]" />
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
            <h3 className="text-2xl font-bold text-[#E2E8F0]">Hi, I'm Tanmay 👋</h3>
            <p className="text-[#94A3B8] leading-relaxed">
              I'm a passionate full-stack developer with a love for creating innovative web applications. 
              My journey in software development started with curiosity and has evolved into a passion for 
              building solutions that make a difference.
            </p>
            <p className="text-[#94A3B8] leading-relaxed">
              I specialize in modern web technologies and enjoy working on projects that challenge me to 
              learn and grow. From Django backends to React frontends, I love bringing ideas to life 
              through clean, efficient code.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-[#E2E8F0]">What I Do</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[#38BDF8] rounded-full"></div>
                <span className="text-[#94A3B8]">Full-Stack Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[#22D3EE] rounded-full"></div>
                <span className="text-[#94A3B8]">Web Applications</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[#0EA5E9] rounded-full"></div>
                <span className="text-[#94A3B8]">API Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[#06B6D4] rounded-full"></div>
                <span className="text-[#94A3B8]">Database Design</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#0B1220] to-[#1F2937] border border-[#132235] p-8 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#38BDF8] to-[#22D3EE] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.3)]">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-[#E2E8F0]">Developer & Creator</h4>
                <p className="text-sm text-[#94A3B8]">Passionate about building amazing web experiences</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
