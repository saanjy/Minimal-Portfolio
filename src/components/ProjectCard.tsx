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
    <div className={`group relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50 hover:from-slate-800/80 hover:to-slate-900/80 hover:border-slate-600/60' 
        : 'bg-gradient-to-br from-white/60 to-slate-50/60 border-white/50 hover:from-white/80 hover:to-slate-50/80 hover:border-slate-200/60'
    }`}>
      {/* Decorative element */}
      <div className={`absolute top-6 right-6 p-2 rounded-lg transition-all duration-300 group-hover:scale-110 ${
        theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-100/80'
      }`}>
        <Code2 size={20} className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} />
      </div>
      
      <div className="space-y-6">
        <div className="space-y-3 pr-12">
          <h3 className={`text-xl font-bold leading-tight transition-colors duration-200 ${
            theme === 'dark' ? 'text-slate-100 group-hover:text-white' : 'text-slate-900 group-hover:text-slate-800'
          }`}>
            {title}
          </h3>
          <p className={`leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2.5">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-slate-700/60 text-slate-300 border border-slate-600/40' 
                  : 'bg-slate-100/80 text-slate-700 border border-slate-200/60'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className={`flex items-center pt-4 border-t ${theme === 'dark' ? 'border-slate-700/50' : 'border-slate-200/50'}`}>
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-slate-700/50 text-slate-300 hover:bg-slate-700/80 hover:text-slate-100' 
                  : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              <Github size={18} />
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}