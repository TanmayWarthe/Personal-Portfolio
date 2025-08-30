import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";
import heroFallback from "../assets/hero-fallback.png";
import FloatingShape from "../components/FloatingShape";

// Prefer local, reliable media to avoid external AccessDenied issues
const HERO_VIDEO_SRC = "/hero.mp4"; // place a looping mp4 in public/hero.mp4
const SPLINE_HERO_SRC = ""; // leave empty by default to avoid AccessDenied

function Hero() {
  const phrases = useMemo(() => [
    "Building code, crafting ideas.",
    "Exploring full-stack dev & AI integrations.",
    "Learning daily. Shipping often.",
  ], []);
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    const step = () => {
      if (!deleting) {
        const next = current.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1200);
      } else {
        const next = current.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (next.length === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % phrases.length);
        }
      }
    };
    const speed = deleting ? 40 : 70;
    const t = setTimeout(step, speed);
    return () => clearTimeout(t);
  }, [displayText, deleting, index]);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 pt-24 md:pt-28 min-h-screen text-[#E2E8F0]"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      
      {/* Left Text */}
      <motion.div className="flex-1 z-10 text-center md:text-left max-w-xl mx-auto md:mx-0" variants={itemUp}>
        <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight" variants={itemUp}>
          Tanmay Warthe
        </motion.h1>
        <motion.p className="mt-4 text-lg md:text-xl text-[#94A3B8] whitespace-pre" variants={itemUp}>
          {displayText}
          <span className="ml-1 inline-block w-3 border-r-2 border-[#38BDF8] align-middle animate-pulse" />
        </motion.p>
        <motion.div className="mt-8 flex justify-center md:justify-start gap-4" variants={itemUp}>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="px-6 py-3 rounded-xl bg-[#38BDF8] text-[#0F172A] font-medium hover:bg-[#22D3EE] transition transform hover:scale-105 cursor-pointer"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-[#38BDF8] text-[#38BDF8] font-medium hover:bg-[#22D3EE] hover:text-[#0F172A] transition transform hover:scale-105"
          >
            Download Résumé
          </a>
        </motion.div>
      </motion.div>

      {/* Right visual: model disabled for now -> static image fallback */}
      <motion.div className="flex-1 w-full mt-12 md:mt-0" variants={itemUp}>
        <div className="mx-auto w-full max-w-[520px] aspect-[4/3] md:aspect-auto md:h-[460px] rounded-xl shadow-[0_20px_80px_rgba(6,182,212,0.12)] overflow-hidden bg-[#0B1220] ring-1 ring-[#0b2033] flex items-center justify-center">
          <img
            src={heroFallback}
            alt="Hero"
            loading="lazy"
            width="520"
            height="390"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Scroll Hint
      <div className="absolute bottom-6 w-full flex justify-center">
        <Link to="about" smooth={true} duration={500}>
          <ArrowDown className="animate-bounce w-6 h-6 text-[#38BDF8] cursor-pointer" />
        </Link>
      </div> */}
    </motion.section>
  );
}

export default Hero;
