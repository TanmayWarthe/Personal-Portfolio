import React from "react";

export default function ProjectCard({ title = "Project", description = "", href = "#", tags = [] }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-[#132235] bg-[#0B1220] p-5 hover:border-[#38BDF8]/60 transition-colors shadow-[0_8px_30px_rgba(2,6,23,0.6)]">
      <div className="aspect-video rounded-lg bg-[#0F172A] ring-1 ring-[#0b2033] mb-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_50%)]" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.25),transparent_40%)]" />
      </div>
      <h3 className="text-lg font-semibold text-[#E2E8F0]">{title}</h3>
      {description && <p className="mt-2 text-sm text-[#94A3B8]">{description}</p>}
      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="px-2 py-1 rounded-full text-xs border border-[#1F2937] text-[#9CA3AF]">{t}</span>
          ))}
        </div>
      )}
    </a>
  );
}


