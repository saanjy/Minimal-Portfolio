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
    <div className={`group relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
      theme === 'dark' 
        ? 'bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10' 
        : 'bg-white/70 backdrop-blur-md border border-gray-200 hover:bg-white/90 shadow-lg hover:shadow-xl'
    }`}>
      {/* Decorative element */}
      <div className={`absolute top-6 right-6 p-2 rounded-lg transition-all duration-300 group-hover:scale-110 ${
        theme === 'dark' ? 'bg-cyan-500/20' : 'bg-indigo-100'
      }`}>
        <Code2 size={18} className={theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'} />
      </div>
      
      <div className="space-y-4 pr-12">
        <h3 className={`text-xl font-bold leading-tight transition-colors duration-200 ${
          theme === 'dark' ? 'text-white group-hover:text-cyan-200' : 'text-gray-900 group-hover:text-indigo-800'
        }`}>
          {title}
        </h3>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-white/10 text-gray-300 border border-white/20' 
                  : 'bg-gray-100 text-gray-700 border border-gray-200'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {githubUrl && (
          <div className={`pt-4 border-t ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 border border-gray-200'
              }`}
            >
              <Github size={16} />
              <span>View Code</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}