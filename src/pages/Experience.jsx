import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const experienceData = [
    {
      period: "Jun 2024 - Jul 2024 · 2 mos",
      title: "Intern",
      company: "SSIT Pvt Ltd Nagpur",
      location: "Nagpur, Maharashtra, India · On-site",
      description:
        "Contributed to real-world projects as an intern focusing on modern web development. Helped build clean UI, wire APIs, and test features.",
      highlights: [
        "Implemented responsive UI components",
        "Collaborated on API integration",
        "Wrote testable, maintainable code",
        "Participated in code reviews",
      ],
      icon: "🧑‍💻",
      color: "from-blue-500 to-cyan-500",
      skills: ["Python (Programming Language)", "Django",  "Web Development", "Bootstrap (Framework)"],
      // Optional: add your logo (e.g., "/logos/ssit.png") and certificate link here
      logo: "",
      certificateUrl: "",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <motion.div 
        className="mb-8 sm:mb-12 text-center"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
           Experience
        </h2>
        <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Internship details highlighting responsibilities, tools used, and impact.
        </p>
      </motion.div>

      <motion.div 
        className="grid lg:grid-cols-1 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Single prominent internship card */}
        <div className="space-y-6">
          {experienceData.map((exp, idx) => (
            <motion.div key={idx} variants={item}>
              <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-5 sm:p-6 shadow-lg/50 transition-colors">
                <div className="flex items-start gap-4">
                  {/* Company logo (falls back to placeholder) */}
                  {exp.logo ? (
                    <img src={exp.logo} alt={`${exp.company} logo`} className="h-12 w-12 shrink-0 rounded-md object-cover border border-gray-200 dark:border-gray-700" />
                  ) : (
                    <div className="h-12 w-12 shrink-0 rounded-md bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300">🏢</div>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 justify-between">
                      <div className="min-w-0">
                        <h3 className="truncate text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="whitespace-nowrap rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400">{exp.period}</span>
                        <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                      {exp.description}
                    </p>

                    {/* Skills row */}
                    {exp.skills && (
                      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 dark:border-gray-700 px-2.5 py-1 bg-gray-50 dark:bg-gray-700/40">
                          <span>💠</span>
                          {exp.skills[0]}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 dark:border-gray-700 px-2.5 py-1 bg-gray-50 dark:bg-gray-700/40">
                          <span>💠</span>
                          {exp.skills[1]}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 dark:border-gray-700 px-2.5 py-1 bg-gray-50 dark:bg-gray-700/40">
                          <span>💠</span>
                          {exp.skills[2]}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 dark:border-gray-700 px-2.5 py-1 bg-gray-50 dark:bg-gray-700/40">
                          <span>💠</span>
                          {exp.skills[3]}
                        </span>
                      </div>
                    )}

                    <div className="mt-4 grid sm:grid-cols-2 gap-3">
                      {exp.highlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">✓</span>
                          <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Certificate link */}
                    {exp.certificateUrl && (
                      <div className="mt-4">
                        <a
                          href={exp.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-blue-300 dark:border-blue-700 px-3 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                        >
                          <span>📄</span>
                          <span>View certificate</span>
                        </a>
                      </div>
                    )}
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


