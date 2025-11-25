import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function Skills() {
    // Memoized animation variants for better performance
    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.02, delayChildren: 0.03 },
        },
    }), []);

    const itemVariants = useMemo(() => ({
        hidden: { opacity: 0, scale: 0.95 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.25, ease: "easeOut" } },
    }), []);

    // Memoized skills data
    const SKILLS_DATA = useMemo(() => [
        // Frontend
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },

        // Backend
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#000000" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },

        // Tools & Technologies
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#181717" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "#007ACC" },
        { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", color: "#646CFF" },
        { name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", color: "#CB3837" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", color: "#FCC624" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
    ], []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            {/* Header - Simplified */}
            <div className="text-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto shadow-md shadow-red-500/20 mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-red-600 to-gray-900">
                    Skills & Technologies
                </h2>

                <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full mb-3" />

                <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
                    Technologies and tools I work with
                </p>
            </div>

            {/* Skills Grid - Optimized */}
            <motion.div
                className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 sm:gap-4 max-w-5xl mx-auto place-items-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15, margin: "50px" }}
            >
                {SKILLS_DATA.map((skill, skillIndex) => (
                    <motion.div
                        key={`skill-${skillIndex}`}
                        variants={itemVariants}
                        className="group relative"
                    >
                        {/* Skill Icon - Optimized */}
                        <div
                            className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 flex items-center justify-center border border-gray-100 hover:border-red-200 cursor-pointer"
                            style={{
                                willChange: "transform",
                                transform: "translateZ(0)"
                            }}
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-7 h-7 sm:w-9 sm:h-9 object-contain group-hover:scale-110 transition-transform duration-200"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        {/* Tooltip - Optimized */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-10 whitespace-nowrap">
                            <div className="bg-gray-900 text-white px-2 py-0.5 rounded text-[10px] sm:text-xs font-medium shadow-md">
                                {skill.name}
                                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-900 rotate-45"></div>
                            </div>
                        </div>

                        {/* Subtle Glow - Optimized */}
                        <div
                            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-200 blur-md pointer-events-none"
                            style={{ backgroundColor: skill.color }}
                        />
                    </motion.div>
                ))}
            </motion.div>

        </div>
    );
}
