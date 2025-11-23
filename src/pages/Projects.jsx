import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const projectsData = [
    {
      title: "QuickMeds - Online Pharmacy",
      description: "A comprehensive Django-based online pharmacy management system featuring secure user authentication, product catalog, shopping cart, order management, admin dashboard, and prescription verification. Built with modern web technologies and deployed on Render.",
      href: "https://github.com/TanmayWarthe/QuickMeds-An-Online-Pharamacy",
      demoUrl: "https://dawai-ki-dukan.onrender.com",
      tags: ["Django", "Python", "Bootstrap", "SQLite", "JavaScript", "HTML/CSS"],
      image: "/src/assets/projects/quickmeds-thumbnail.svg",
      category: "Full-Stack Web App",
      status: "Live Demo"
    }
  ];

  return (
    <motion.section
      className="relative isolate bg-[#F5F5DC] py-20 sm:py-24"
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
            Portfolio • Work • Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-600">
            Showcasing my technical skills through innovative projects that solve real-world problems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={heroVariants} className="space-y-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              href={project.href}
              demoUrl={project.demoUrl}
              tags={project.tags}
              image={project.image}
              category={project.category}
              status={project.status}
            />
          ))}
        </motion.div>

        {/* Development Approach */}
        <motion.div variants={heroVariants} className="space-y-6">
          <div className="text-center space-y-2">
            <p className="text-xs uppercase tracking-[0.35em] text-red-500">Process</p>
            <h3 className="text-2xl font-semibold text-gray-800">Development Approach</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My systematic approach to building robust and scalable applications
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "01", title: "Planning", desc: "Requirements analysis and architecture design", icon: "📋" },
              { num: "02", title: "Development", desc: "Clean code implementation and testing", icon: "💻" },
              { num: "03", title: "Testing", desc: "Comprehensive testing and quality assurance", icon: "🧪" },
              { num: "04", title: "Deployment", desc: "Production deployment and monitoring", icon: "🚀" }
            ].map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{step.icon}</span>
                  <span className="text-xs font-semibold tracking-[0.3em] text-red-500">{step.num}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
