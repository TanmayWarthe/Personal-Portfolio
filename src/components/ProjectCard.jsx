import React, { memo } from "react";

function ProjectCard({ title = "Project", description = "", href = "#", tags = [], image = null, demoUrl = null }) {
  return (
    <div className="group relative block rounded-2xl border border-[#132235] bg-[#0B1220] p-5 hover:border-[#38BDF8]/60 transition-colors shadow-[0_8px_30px_rgba(2,6,23,0.6)]">
      <div className="aspect-video rounded-lg bg-[#0F172A] ring-1 ring-[#0b2033] mb-4 overflow-hidden relative">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_50%)]" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.25),transparent_40%)]" />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
      
      {/* Modern Popup Overlay */}
      <div className="absolute inset-0 bg-[#0B1220]/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-8">
        <div className="flex items-center space-x-3">
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] rounded-full flex items-center justify-center hover:from-[#0EA5E9] hover:to-[#06B6D4] transition-all duration-200 transform hover:scale-110 shadow-[0_0_10px_rgba(56,189,248,0.3)]"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </a>
          )}
          
          <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[#1F2937] border border-[#374151] rounded-full flex items-center justify-center hover:bg-[#374151] hover:border-[#4B5563] transition-all duration-200 transform hover:scale-110"
          >
            <svg className="w-6 h-6 text-[#E2E8F0]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(ProjectCard);


