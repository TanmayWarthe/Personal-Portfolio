import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

// Import project images
import neuroPharmaImg from "../assets/projects/neuropharma.png";
import sentientImg from "../assets/projects/sentient.png";
import holoSpaceImg from "../assets/projects/holospace.jpg";

const projectsData = [
    {
        image: neuroPharmaImg,
        category: 'HealthTech & AI',
        title: 'NeuroPharma - AI Drug Discovery Pipeline',
        description: 'A revolutionary platform accelerating drug discovery using Graph Neural Networks (GNNs) to predict molecular properties and drug-target interactions. It features a real-time 3D molecular viewer, automated literature mining from PubMed using NLP, and a secure cloud infrastructure for processing terabytes of genomic data. Reduced preliminary screening time by 40% in simulation tests.',
        tags: ['Python', 'PyTorch', 'React Three Fiber', 'AWS SageMaker', 'FastAPI', 'BioPython'],
        href: '#',
        demoUrl: '#'
    },
    {
        image: sentientImg,
        category: 'FinTech & Autonomous Agents',
        title: 'Sentient - Autonomous Financial Analyst',
        description: 'An autonomous multi-agent system capable of performing deep fundamental analysis of stock markets. "Sentient" aggregates real-time news, analyzes sentiment from social media, and processes financial reports to generate investment memos. Built with a microservices architecture, it utilizes vector databases for long-term memory and runs on a custom-tuned LLM for domain-specific financial reasoning.',
        tags: ['LangChain', 'Pinecone', 'Next.js', 'Docker', 'Kubernetes', 'Celery'],
        href: '#',
        demoUrl: '#'
    },
    {
        image: holoSpaceImg,
        category: 'WebXR & Collaboration',
        title: 'HoloSpace - Immersive 3D Workspace',
        description: 'A browser-based spatial collaboration tool that brings remote teams together in a 3D virtual office. Leveraging WebRTC for low-latency voice/video and WebGL for rendering, it allows users to manipulate 3D objects, share screens on virtual monitors, and whiteboard in real-time. Pushes the boundaries of what is possible in a web browser without external plugins.',
        tags: ['Three.js', 'WebRTC', 'Socket.io', 'TypeScript', 'WebGL', 'Node.js'],
        href: '#',
        demoUrl: '#'
    }
];

export default function Projects() {
    return (
        <motion.section
            id="projects"
            className="relative isolate bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-20 overflow-hidden"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
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
