import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const educationData = [
    {
      year: "2025 - 2028",
      degree: "Bachelor of Technology in Computer Technology",
      institution: "Yeshwantrao Chavan College of Engineering (YCCE)",
      location: "Nagpur, Maharashtra",
      description: "Currently pursuing B.Tech in Computer Technology through Direct Second Year (DSY) admission. Focus on advanced computer engineering concepts, software development, and emerging technologies.",
      achievements: ["Computer Technology Specialization", "Advanced Engineering Curriculum"]
    },
    {
      year: "2022 - 2025",
      degree: "Diploma in Computer Technology",
      institution: "Government Polytechnic Bramhapuri",
      location: "Bramhapuri, Maharashtra",
      description: "Completed comprehensive diploma program covering computer fundamentals, programming, networking, and practical applications in computer technology.",
      achievements: ["Computer Technology Diploma", "Practical Programming Skills", "Networking Fundamentals", "Database Management"]
    }
  ];

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
          <span className="bg-gradient-to-r from-[#93C5FD] via-[#38BDF8] to-[#22D3EE] bg-clip-text text-transparent">Education</span>
        </h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8] to-[#06B6D4] shadow-[0_0_16px_rgba(56,189,248,0.55)]" />
      </motion.div>

      <motion.div 
        className="relative"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#38BDF8] via-[#22D3EE] to-[#0EA5E9]"></div>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div key={index} variants={item} className="relative">
              {/* Timeline Dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-full border-4 border-[#0B1220] shadow-[0_0_10px_rgba(56,189,248,0.4)]"></div>
              
              {/* Content Card */}
              <div className="ml-16 p-6 rounded-2xl border border-[#132235] bg-[#0B1220] hover:border-[#38BDF8]/40 transition-colors shadow-[0_8px_30px_rgba(2,6,23,0.6)]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-[#38BDF8] bg-[#38BDF8]/10 rounded-full border border-[#38BDF8]/20">
                    {edu.year}
                  </span>
                  <span className="text-sm text-[#64748B] mt-2 sm:mt-0">{edu.location}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-2">{edu.degree}</h3>
                <h4 className="text-lg font-semibold text-[#38BDF8] mb-3">{edu.institution}</h4>
                
                <p className="text-[#94A3B8] mb-4 leading-relaxed">{edu.description}</p>
                
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-[#E2E8F0]">Key Achievements:</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-[#1F2937] text-[#9CA3AF] rounded-full border border-[#374151]">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
