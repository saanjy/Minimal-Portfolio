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
    <div className={`group relative p-5 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-[1.01] hover:shadow-lg ${
      theme === 'dark' 
        ? 'bg-slate-800/70 border-slate-700/60 hover:bg-slate-800/90 hover:border-slate-600/70' 
        : 'bg-gradient-to-br from-white/60 to-slate-50/60 border-white/50 hover:from-white/80 hover:to-slate-50/80 hover:border-slate-200/60'
    }`}>
      {/* Decorative element */}
      <div className={`absolute top-5 right-5 p-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 ${
        theme === 'dark' ? 'bg-slate-700/60' : 'bg-slate-100/80'
      }`}>
        <Code2 size={18} className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} />
      </div>
      
      <div className="space-y-3">
        <div className="pr-10">
          <h3 className={`text-lg font-bold leading-tight transition-colors duration-200 ${
            theme === 'dark' ? 'text-slate-100 group-hover:text-white' : 'text-slate-900 group-hover:text-slate-800'
          }`}>
            {title}
          </h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all duration-200 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-slate-700/70 text-slate-300 border border-slate-600/50' 
                  : 'bg-slate-100/80 text-slate-700 border border-slate-200/60'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className={`flex items-center pt-3 border-t ${theme === 'dark' ? 'border-slate-700/50' : 'border-slate-200/50'}`}>
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-slate-700/60 text-slate-300 hover:bg-slate-600/80 hover:text-slate-100' 
                  : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900'
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