import React, { memo } from "react";

function ProjectCard({ title = "Project", description = "", href = "#", tags = [], image = null, demoUrl = null, category = "", status = "" }) {
  return (
    <div className="group relative block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-blue-100 dark:hover:shadow-blue-900/20">
      {/* Project Image */}
      <div className="aspect-video rounded-lg bg-gray-100 dark:bg-gray-700 ring-1 ring-gray-200 dark:ring-gray-600 mb-4 overflow-hidden relative">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-200/30 to-cyan-200/30 dark:from-blue-800/30 dark:to-cyan-800/30" />
          </>
        )}
        
        {/* Category Badge */}
        {category && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full">
              {category}
            </span>
          </div>
        )}
        
        {/* Status Badge */}
        {status && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 text-xs font-semibold bg-green-600 text-white rounded-full">
              {status}
            </span>
          </div>
        )}
      </div>
      
      {/* Project Content */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        
        {description && (
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {description}
          </p>
        )}
        
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 rounded-full text-xs border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {/* Action Buttons */}
      <div className="mt-4 flex items-center gap-3">
        {demoUrl && (
          <a 
            href={demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-sm font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Live Demo
          </a>
        )}
        
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105 border border-gray-200 dark:border-gray-600"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          Code
        </a>
      </div>
    </div>
  );
}

export default memo(ProjectCard);


