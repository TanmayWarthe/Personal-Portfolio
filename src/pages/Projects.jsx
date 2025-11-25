import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projectsData = [
    {
        image: '/assets/projects/salesbot.jpg',
        category: 'Featured Project',
        title: 'SalesBot - AI-Powered Voice Assistant',
        description: 'SalesBot is an AI-powered voice assistant designed to automate real-time customer interactions over phone calls. Using Natural Language Processing (NLP) and the Twilio API, it provides intelligent, human-like responses with an 85% accuracy rate. Optimized for low-latency performance (<600ms response time), SalesBot enhances customer support by reducing manual intervention and improving query resolution by 30%.',
        tags: ['Python', 'Flask', 'Twilio API', 'Redis', 'RAG', 'AWS'],
        href: 'https://github.com/yourusername/salesbot',
        demoUrl: 'https://salesbot-demo.com'
    },
    {
        image: '/assets/projects/vidya-sangam.jpg',
        category: 'Featured Project',
        title: 'Vidya Sangam - AI Mentorship Platform',
        description: 'Vidya Sangam is an AI-powered mentorship platform that connects students with mentors based on intelligent matchmaking. Leveraging LLMs and context-aware AI, the platform achieves 90% match accuracy, supporting 1,000+ users. It integrates LinkedIn for profile authentication and Calendly for seamless scheduling, making mentorship more accessible and efficient.',
        tags: ['Python', 'Flask', 'LLMs', 'RESTful APIs', 'LinkedIn API', 'Calendly API', 'AWS'],
        href: 'https://github.com/yourusername/vidya-sangam',
        demoUrl: 'https://vidyasangam.com'
    },
    {
        image: '/assets/projects/codecollab.jpg',
        category: 'Featured Project',
        title: 'CodeCollab - Real-time Collaborative Code Editor',
        description: 'CodeCollab is a cloud-based real-time collaborative code editor that enables multiple users to code together seamlessly. Utilizing WebSocket-based low-latency communication, the platform supports multi-user sessions with advanced conflict resolution algorithms and role-based access control, improving productivity for remote development teams.',
        tags: ['Python', 'Django', 'Django-channel', 'WebSockets', 'Redis'],
        href: 'https://github.com/yourusername/codecollab',
        demoUrl: 'https://codecollab-demo.com'
    }
];

export default function Projects() {
    return (
        <motion.section 
            id="projects" 
            className="relative isolate bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-20 overflow-hidden"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.15 } },
            }}
        >
            {/* Background Elements */}
            <motion.div 
                className="absolute top-0 left-0 -translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-red-100/40 rounded-full blur-3xl -z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
            />
            <motion.div 
                className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl -z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="mb-12 sm:mb-16"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                    }}
                >
                    <motion.span 
                        className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-red-600 uppercase bg-red-50 rounded-full border border-red-100"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Portfolio • Work • Projects
                    </motion.span>
                    <motion.h2 
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Things I've Worked On
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-600 max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Here are some of my featured projects showcasing expertise in AI, web development, and cloud technologies.
                    </motion.p>
                </motion.div>

                <div className="space-y-12">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} index={index} {...project} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
