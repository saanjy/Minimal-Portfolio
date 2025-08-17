import React from 'react';
import { Github, Code2 } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
}

export function ProjectCard({ title, description, technologies, githubUrl }: ProjectCardProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`group relative p-6 rounded-lg border transition-all duration-300 hover:scale-[1.02] ${
      theme === 'dark' 
        ? 'bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900/70' 
        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
    }`}>
      {/* Decorative element */}
      <div className={`absolute top-4 right-4 p-2 rounded-md transition-all duration-300 group-hover:scale-110 ${
        theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'
      }`}>
        <Code2 size={16} className={theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'} />
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2 pr-10">
          <h3 className={`text-lg font-semibold leading-tight ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            {title}
          </h3>
          <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className={`px-2 py-1 text-xs rounded transition-all duration-200 ${
                theme === 'dark' 
                  ? 'bg-zinc-800 text-zinc-300' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className={`flex items-center pt-3 border-t ${theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'}`}>
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-black'
              }`}
            >
              <Github size={16} />
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}