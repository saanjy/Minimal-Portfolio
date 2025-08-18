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
    <div className={`p-4 rounded-lg border ${
      theme === 'dark' 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-gray-50 border-gray-300'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold pr-4">
          {title}
        </h3>
        <Code2 size={18} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} />
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span 
            key={tech}
            className={`px-2 py-1 text-xs rounded border ${
              theme === 'dark' 
                ? 'bg-gray-700 border-gray-600 text-gray-300' 
                : 'bg-gray-200 border-gray-300 text-gray-700'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
      
      {githubUrl && (
        <div className={`pt-3 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-3 py-1 rounded border text-sm font-medium ${
              theme === 'dark' 
                ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600' 
                : 'bg-gray-200 border-gray-300 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <Github size={14} />
            <span>View Code</span>
          </a>
        </div>
      )}
    </div>
  );
}