// src/components/Navbar.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import FloatingShape from "./FloatingShape";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const rafRef = useRef(0);
  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.3 });
  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 6);
        rafRef.current = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);
  const navItems = useMemo(() => ([
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]), []);

  return (
    <nav className={`nav-neon tech-grid bg-[#0F172A]/80 backdrop-blur-md fixed w-full z-50 border-b border-[#111827] transition-shadow ${scrolled ? "shadow-[0_6px_20px_rgba(0,0,0,0.35)]" : "shadow-none"}`}>
      {/* Scroll progress bar */}
      <motion.div style={{ scaleX: progressX }} className="origin-left absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500" />
      {/* Background gradient layer */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B1328]/85 via-[#0F172A]/70 to-[#0F172A]/40" />
      {/* Soft blur accents */}
      <div className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          {/* Left logo */}
          <FloatingShape size={56} logoText="TW" />
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((it) => (
            <Link
              key={it.id}
              to={it.id}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              activeClass="is-active"
              className="group relative cursor-pointer text-[#E2E8F0] hover:text-[#22D3EE] transition-colors px-1 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
            >
              {it.label}
              <span className="nav-underline absolute left-0 -bottom-0.5 h-[2px] w-full scale-x-0 bg-gradient-to-r from-cyan-400 to-sky-400 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen((s) => !s)}
            aria-label="Toggle menu"
            className="text-[#38BDF8] p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown with variants */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { height: "auto", opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.06 } },
              closed: { height: 0, opacity: 0, transition: { when: "afterChildren" } },
            }}
            className="md:hidden overflow-hidden border-t border-[#111827] bg-[#0B1220]"
          >
            <motion.div
              variants={{ open: { opacity: 1, transition: { staggerChildren: 0.06 } }, closed: { opacity: 0 } }}
              className="px-6 py-4 space-y-3"
            >
              {navItems.map((it) => (
                <motion.div key={it.id} variants={{ open: { y: 0, opacity: 1 }, closed: { y: -6, opacity: 0 } }}>
                  <Link
                    to={it.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    spy={true}
                    activeClass="is-active"
                    className="block text-[#E2E8F0] hover:text-[#22D3EE] transition px-1 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                  >
                    {it.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
