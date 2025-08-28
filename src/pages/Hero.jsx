import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";
import heroFallback from "../assets/hero-fallback.png";
import LazySpline from "../components/LazySpline";
import FloatingShape from "../components/FloatingShape";

// Prefer local, reliable media to avoid external AccessDenied issues
const HERO_VIDEO_SRC = "/hero.mp4"; // place a looping mp4 in public/hero.mp4
const SPLINE_HERO_SRC = ""; // leave empty by default to avoid AccessDenied

function Hero() {
  const phrases = [
    "Building code, crafting ideas.",
    "Exploring full-stack dev & AI integrations.",
    "Learning daily. Shipping often.",
  ];
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
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 pt-24 md:pt-28 min-h-screen text-[#E2E8F0]">
      
      {/* Left Text */}
      <div className="flex-1 z-10 text-center md:text-left max-w-xl mx-auto md:mx-0">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Tanmay Warthe
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#94A3B8] whitespace-pre">
          {displayText}
          <span className="ml-1 inline-block w-3 border-r-2 border-[#38BDF8] align-middle animate-pulse" />
        </p>
        <div className="mt-8 flex justify-center md:justify-start gap-4">
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
        </div>
      </div>

      {/* Right visual: animated SVG orbital scene (no external deps) */}
      <div className="flex-1 w-full mt-12 md:mt-0">
        <div className="mx-auto w-full max-w-[520px] aspect-[4/3] md:aspect-auto md:h-[460px] rounded-xl shadow-[0_20px_80px_rgba(6,182,212,0.12)] overflow-hidden bg-[#0B1220] ring-1 ring-[#0b2033] flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <radialGradient id="g" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0B1220" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="40" fill="url(#g)" />
            <g fill="none" stroke="#38BDF8" strokeOpacity="0.35">
              <ellipse cx="100" cy="100" rx="70" ry="28" />
              <ellipse cx="100" cy="100" rx="48" ry="70" transform="rotate(35 100 100)" />
              <ellipse cx="100" cy="100" rx="28" ry="70" transform="rotate(-35 100 100)" />
            </g>
            <circle r="4" fill="#22D3EE">
              <animateMotion dur="6s" repeatCount="indefinite" path="M 30 0 A 70 28 0 1 1 -30 0 A 70 28 0 1 1 30 0" />
            </circle>
            <circle r="3" fill="#38BDF8">
              <animateMotion dur="8s" repeatCount="indefinite" path="M 0 70 A 48 70 0 1 1 0 -70 A 48 70 0 1 1 0 70" />
            </circle>
            <circle r="3" fill="#67E8F9">
              <animateMotion dur="10s" repeatCount="indefinite" path="M 0 70 A 28 70 0 1 1 0 -70 A 28 70 0 1 1 0 70" />
            </circle>
          </svg>
        </div>
        <noscript>
          <img
            src={heroFallback}
            alt="3D Hero Fallback"
            className="w-full h-full object-cover rounded-xl"
          />
        </noscript>
      </div>

      {/* Scroll Hint
      <div className="absolute bottom-6 w-full flex justify-center">
        <Link to="about" smooth={true} duration={500}>
          <ArrowDown className="animate-bounce w-6 h-6 text-[#38BDF8] cursor-pointer" />
        </Link>
      </div> */}
    </section>
  );
}

export default Hero;
