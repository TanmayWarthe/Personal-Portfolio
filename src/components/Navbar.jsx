// src/components/Navbar.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import FloatingShape from "./FloatingShape";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const rafRef = useRef(0);
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
    <nav className={`nav-neon bg-[#0F172A]/80 backdrop-blur-md fixed w-full z-50 border-b border-[#111827] transition-shadow ${scrolled ? "shadow-[0_6px_20px_rgba(0,0,0,0.35)]" : "shadow-none"}`}>
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
              className="cursor-pointer text-[#E2E8F0] hover:text-[#22D3EE] transition-colors"
            >
              {it.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen((s) => !s)}
            aria-label="Toggle menu"
            className="text-[#38BDF8]"
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
                    className="block text-[#E2E8F0] hover:text-[#22D3EE] transition"
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
