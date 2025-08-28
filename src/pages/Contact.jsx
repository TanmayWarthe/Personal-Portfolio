import React from "react";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <div className="pt-2 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-[#93C5FD] via-[#38BDF8] to-[#22D3EE] bg-clip-text text-transparent">Contact</span>
        </h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8] to-[#06B6D4] shadow-[0_0_16px_rgba(56,189,248,0.55)]" />
      </div>
      <div className="mt-4 rounded-2xl border border-[#132235] bg-[#0B1220] p-6 shadow-[0_8px_30px_rgba(2,6,23,0.6)]">
        <p className="text-[#94A3B8]">Prefer email? Reach me here:</p>
        <a className="mt-3 inline-block px-4 py-2 rounded-lg bg-[#38BDF8] text-[#0F172A] font-medium hover:bg-[#22D3EE] transition" href="mailto:tanmay@example.com">tanmay@example.com</a>
        <div className="mt-6 flex gap-4 text-sm">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-[#E2E8F0]">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-[#E2E8F0]">LinkedIn</a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-[#E2E8F0]">X</a>
        </div>
      </div>
    </div>
  );
}


