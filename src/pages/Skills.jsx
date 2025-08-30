import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Skills data
  const skills = [
    {
      name: "C",
      icon: "devicon-c-plain",
      color: "#659AD2"
    },
    {
      name: "C++",
      icon: "devicon-cplusplus-plain",
      color: "#00599C"
    },
    {
      name: "Python",
      icon: "devicon-python-plain",
      color: "#3776AB"
    },
    {
      name: "Django",
      icon: "devicon-django-plain",
      color: "#092E20"
    },
    {
      name: "JavaScript",
      icon: "devicon-javascript-plain",
      color: "#F7DF1E"
    },
    {
      name: "TypeScript",
      icon: "devicon-typescript-plain",
      color: "#3178C6"
    },
    {
      name: "React",
      icon: "devicon-react-plain",
      color: "#61DAFB"
    },
    {
      name: "Node.js",
      icon: "devicon-nodejs-plain",
      color: "#339933"
    },
    {
      name: "MongoDB",
      icon: "devicon-mongodb-plain",
      color: "#47A248"
    },
    {
      name: "MySQL",
      icon: "devicon-mysql-plain",
      color: "#4479A1"
    },
    {
      name: "Bootstrap",
      icon: "devicon-bootstrap-plain",
      color: "#7952B3"
    },
    {
      name: "Tailwind CSS",
      icon: "devicon-tailwindcss-plain",
      color: "#06B6D4"
    },
    {
      name: "HTML5",
      icon: "devicon-html5-plain",
      color: "#E34F26"
    },
    {
      name: "CSS3",
      icon: "devicon-css3-plain",
      color: "#1572B6"
    }
  ];

  // Duplicate skills for seamless looping
  const duplicatedSkills = [...skills, ...skills];

  // Auto-scrolling logic with smooth circular looping - never stops
  useEffect(() => {
    let scrollInterval;
    scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollContainerRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;

        if (scrollLeft >= maxScrollLeft) {
          // Instant jump back to start for seamless circular effect
          scrollContainerRef.current.scrollLeft = 0;
        } else {
          // Smooth scroll forward for circular motion
          scrollContainerRef.current.scrollBy({ left: 1, behavior: 'auto' });
        }
      }
    }, 50); // Faster for smoother circular motion

    return () => clearInterval(scrollInterval);
  }, []); // No dependencies - runs continuously

  // Mouse event handlers - only for dragging, not for stopping auto-scroll
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeaveDrag = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="max-w-[90rem] mx-auto px-6 space-y-8">
      {/* Header Section */}
      <motion.div 
        className="text-center"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-[#93C5FD] via-[#38BDF8] to-[#22D3EE] bg-clip-text text-transparent">Skills</span>
        </h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8] to-[#06B6D4] shadow-[0_0_16px_rgba(56,189,248,0.55)]" />
      </motion.div>

      {/* Skills Container */}
      <motion.div 
        className="relative"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Scrollable container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide pb-6 cursor-grab active:cursor-grabbing px-6"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveDrag}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        >
          {duplicatedSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}


