import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2 } from "lucide-react";

export default function Experience() {
  // Memoized animation variants
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 }
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
  }), []);

  // Memoized data
  const EXPERIENCE_DATA = useMemo(() => [
    {
      period: "Jun 2024 - Jul 2024",
      duration: "2 mos",
      title: "Web Development Intern",
      company: "SSIT Pvt Ltd",
      location: "Nagpur, Maharashtra",
      description: "Gained hands-on experience in full-stack web development, contributing to real-world projects and learning industry best practices.",
      highlights: [
        "Developed proficiency in Python & Django framework",
        "Implemented MVT (Model-View-Template) architecture",
        "Built responsive UI with Bootstrap & CSS",
        "Collaborated on project structure & version control"
      ],
      skills: ["Python", "Django", "HTML/CSS", "Bootstrap", "Git"],
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
      certificateUrl: "", // Add URL if available
    },
  ], []);

  return (
    <div className="relative isolate bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-20 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-50/30 rounded-full blur-3xl -translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/20 mb-4">
            <Briefcase className="w-7 h-7 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900">
            Professional Experience
          </h2>

          <div className="mx-auto w-20 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full mb-4" />

          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            My professional journey and practical experience in the tech industry
          </p>
        </div>

      {/* Timeline */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Vertical Line */}
        <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-gray-200 via-blue-200 to-gray-200" />

        <div className="space-y-8 sm:space-y-12">
          {EXPERIENCE_DATA.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-12 sm:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-1.5 sm:left-[26px] top-6 z-20">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white border-4 border-blue-500 rounded-full shadow-md" />
                </div>

                {/* Content Card */}
                <div
                  className="group relative bg-white rounded-2xl p-5 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
                  style={{ willChange: "transform" }}
                >
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                  <div className="relative z-10">
                    {/* Top Row: Icon + Title */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white shadow-lg shrink-0`}>
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 text-xs font-bold text-blue-600 bg-blue-50 rounded-full border border-blue-100">
                              {exp.period}
                            </span>
                            <span className="text-xs text-gray-500 font-medium hidden sm:inline-block">
                              ({exp.duration})
                            </span>
                          </div>
                        </div>
                        <div className="text-sm sm:text-base font-medium text-gray-700 mb-1">
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description & Highlights */}
                    <div className="mb-5 pl-0 sm:pl-[72px]">
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Highlights Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 mb-5">
                        {exp.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span className="text-sm text-gray-600 leading-relaxed">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-gray-600 bg-gray-50 rounded-md border border-gray-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-colors"
                          >
                            <CheckCircle2 className="w-3 h-3 text-blue-500" />
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Certificate Link (if exists) */}
                      {exp.certificateUrl && (
                        <div className="pt-4 border-t border-gray-100">
                          <a
                            href={exp.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            View Certificate
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      </div>
    </div>
  );
}
