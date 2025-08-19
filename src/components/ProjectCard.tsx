import React from 'react';
import { Github, Code2 } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

interface ProjectCardProps {
  title: string;
  technologies: string[];
  githubUrl?: string;
}

export function ProjectCard({ title, technologies, githubUrl }: ProjectCardProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`p-4 sm:p-5 rounded-lg border transition-colors ${
      theme === 'dark' 
        ? 'bg-gray-900 border-gray-800' 
        : 'bg-gray-50 border-gray-300'
    }`}>
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <h3 className="text-base sm:text-lg font-semibold pr-2 sm:pr-4 leading-tight">
          {title}
        </h3>
        <Code2 size={16} className={`sm:w-[18px] sm:h-[18px] flex-shrink-0 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
      </div>
      
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
        {technologies.map((tech) => (
          <span 
            key={tech}
            className={`px-2 py-1 text-xs rounded border transition-colors ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700 text-gray-300' 
                : 'bg-gray-200 border-gray-300 text-gray-700'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
      
      {githubUrl && (
        <div className={`pt-3 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-300'}`}>
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded border text-xs sm:text-sm font-medium transition-colors ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' 
                : 'bg-gray-200 border-gray-300 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <Github size={12} className="sm:w-[14px] sm:h-[14px]" />
            <span>View Code</span>
          </a>
        </div>
      )}
    </div>
  );
}