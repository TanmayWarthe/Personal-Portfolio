import React, { memo } from "react";
import { motion } from "framer-motion";

function ProjectCard({ title = "Project", description = "", href = "#", tags = [], image = null, demoUrl = null, category = "", status = "", index = 0 }) {
  const isEven = index % 2 === 0;
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: isEven ? -60 : 60,
      rotateY: isEven ? -15 : 15
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
      transition: { 
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: isEven ? 60 : -60,
      rotateY: isEven ? 15 : -15,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: { 
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <motion.div 
      className="rounded-2xl border border-red-100 bg-white shadow-[0_10px_50px_rgba(220,38,38,0.08)] backdrop-blur p-8 hover:shadow-[0_15px_60px_rgba(220,38,38,0.12)] transition-all duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <div className={`grid lg:grid-cols-[1.3fr_1fr] gap-8 items-center ${!isEven ? 'lg:grid-cols-[1fr_1.3fr]' : ''}`}>
        {/* Content */}
        <motion.div 
          className={`space-y-5 ${!isEven ? 'lg:order-2' : ''}`}
          variants={contentVariants}
        >
          {/* Category Badge */}
          {category && (
            <motion.div 
              className="text-sm text-red-600 font-bold uppercase tracking-widest"
              variants={itemVariants}
            >
              {category}
            </motion.div>
          )}
          
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {title}
            </h3>

            {description && (
              <p className="text-gray-600 leading-relaxed text-base">
                {description}
              </p>
            )}
          </motion.div>

          {/* Tags */}
          {tags.length > 0 && (
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={itemVariants}
            >
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium text-gray-700 border border-gray-200 rounded-md bg-gray-50"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { delay: i * 0.05, duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgb(254 242 242)",
                    borderColor: "rgb(254 202 202)"
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-wrap items-center gap-3 pt-2"
            variants={itemVariants}
          >
            {demoUrl && (
              <motion.a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Live Demo
              </motion.a>
            )}

            <motion.a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-lg transition-all duration-200 border border-gray-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Code
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Project Image */}
        <motion.div 
          className={`relative h-[280px] rounded-xl bg-gray-100 overflow-hidden border border-gray-200 shadow-lg ${!isEven ? 'lg:order-1' : ''}`}
          variants={imageVariants}
        >
          {image ? (
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-contain p-4"
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ 
                scale: 1.08,
                rotate: isEven ? 2 : -2,
                transition: { duration: 0.5 }
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-red-50 to-gray-100 flex items-center justify-center">
              <motion.span 
                className="text-6xl"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚀
              </motion.span>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default memo(ProjectCard);
