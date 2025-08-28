import React from "react";

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-[#111827] bg-[#0B1220] text-[#94A3B8] py-6 text-center">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1f3b57] to-transparent" />
      <p className="text-sm">© {new Date().getFullYear()} Tanmay Warthe. All rights reserved.</p>
    </footer>
  );
}


