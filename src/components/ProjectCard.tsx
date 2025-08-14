import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({ title, description, technologies, githubUrl, liveUrl }: ProjectCardProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`p-8 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
      theme === 'dark' ? 'bg-slate-900 hover:bg-slate-800' : 'bg-slate-50 hover:bg-slate-100'
    }`}>
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className={`px-3 py-1 text-sm font-medium rounded-lg ${
                theme === 'dark' 
                  ? 'bg-slate-800 text-slate-300' 
                  : 'bg-slate-200 text-slate-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 pt-4">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                theme === 'dark' 
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700' 
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300 border border-slate-300'
              }`}
            >
              <Github size={18} />
              <span>View Code</span>
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}