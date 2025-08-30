import React, { memo } from "react";
import { motion } from "framer-motion";

function SkillCard({ skill, index }) {
  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      className="flex-shrink-0"
    >
      <div className="w-36 h-36 rounded-2xl border border-[#38BDF8]/60 bg-[#0B1220] p-6 flex flex-col items-center justify-center text-center relative group">
        {/* 3D Icon with enhanced depth */}
        <div className="relative mb-3">
          {/* Main icon with 3D shadows */}
          <i 
            className={`${skill.icon} text-6xl relative z-10`} 
            style={{ 
              color: skill.color,
              filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.4)) drop-shadow(0 3px 6px rgba(0,0,0,0.3))',
              textShadow: '0 4px 8px rgba(0,0,0,0.4)'
            }}
          ></i>
          
          {/* Enhanced 3D depth layers */}
          <div 
            className="absolute inset-0 opacity-30 blur-sm scale-110"
            style={{ 
              color: skill.color,
              transform: 'translateZ(-15px)',
              filter: 'blur(3px)'
            }}
          >
            <i className={`${skill.icon} text-6xl`}></i>
          </div>
          
          <div 
            className="absolute inset-0 opacity-15 blur-md scale-125"
            style={{ 
              color: skill.color,
              transform: 'translateZ(-25px)',
              filter: 'blur(4px)'
            }}
          >
            <i className={`${skill.icon} text-6xl`}></i>
          </div>
        </div>
        
        <span className="text-sm font-semibold text-[#E2E8F0] mt-2">
          {skill.name}
        </span>
        
        {/* Enhanced glow effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ 
          background: `radial-gradient(circle at center, ${skill.color}15, transparent 60%)`,
          boxShadow: `inset 0 0 30px ${skill.color}20, 0 0 20px ${skill.color}10`
        }}></div>
      </div>
    </motion.div>
  );
}

export default memo(SkillCard);
 
 
