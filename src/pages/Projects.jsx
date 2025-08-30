import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  };
  return (
    <div className="max-w-6xl mx-auto px-6 space-y-6">
      <div className="pt-2 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-[#93C5FD] via-[#38BDF8] to-[#22D3EE] bg-clip-text text-transparent">Projects</span>
        </h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8] to-[#06B6D4] shadow-[0_0_16px_rgba(56,189,248,0.55)]" />
      </div>
      <motion.div
        className="flex justify-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={item} className="w-full max-w-md">
          <ProjectCard 
            title="QuickMeds - Online Pharmacy" 
            description="A comprehensive Django-based online pharmacy management system featuring secure user authentication, product catalog, shopping cart, order management, admin dashboard, and prescription verification. Built with modern web technologies and deployed on Render." 
            href="https://github.com/TanmayWarthe/QuickMeds-An-Online-Pharamacy"
            demoUrl="https://dawai-ki-dukan.onrender.com"
            tags={["Django", "Python", "Bootstrap", "SQLite", "JavaScript", "HTML/CSS"]} 
            image="/src/assets/projects/quickmeds-thumbnail.svg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}


