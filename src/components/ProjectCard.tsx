import React from 'react';
import { Github, Code2, ExternalLink } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

interface ProjectCardProps {
  title: string;
  description?: string;
  technologies: string[];
  githubUrl?: string;
  gradient: string;
}

export function ProjectCard({ title, description, technologies, githubUrl, gradient }: ProjectCardProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`group relative p-6 sm:p-8 rounded-2xl backdrop-blur-sm border shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gray-900/50 border-gray-700/50' 
        : 'bg-white/70 border-gray-200/50'
    }`}>
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      {/* Animated border */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`}></div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-bold pr-4 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
            {title}
          </h3>
          <div className={`p-2 rounded-xl transition-all duration-300 group-hover:scale-110 ${
            theme === 'dark' ? 'bg-gray-800/50 text-purple-400' : 'bg-gray-100/50 text-purple-600'
          }`}>
            <Code2 size={18} />
          </div>
        </div>
        
        {description && (
          <p className={`text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {description}
          </p>
        )}
        
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
          {technologies.map((tech, index) => (
            <span 
              key={tech}
              className={`px-3 py-1.5 text-xs sm:text-sm rounded-lg font-medium transition-all duration-300 hover:scale-110 cursor-default ${
                theme === 'dark' 
                  ? 'bg-gray-800/70 border border-gray-700 text-gray-300 hover:bg-gray-700/70' 
                  : 'bg-gray-100/70 border border-gray-200 text-gray-700 hover:bg-gray-200/70'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {githubUrl && (
          <div className={`pt-4 border-t ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
            <div className="flex gap-3">
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-110 shadow-lg text-white bg-gradient-to-r ${gradient} hover:shadow-xl`}
              >
                <Github size={16} />
                <span>View Code</span>
              </a>
              
              <button className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-110 border backdrop-blur-sm ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50' 
                  : 'bg-white/50 border-gray-300 text-gray-700 hover:bg-gray-50/50'
              }`}>
                <ExternalLink size={16} />
                <span>Demo</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}