import React from 'react';
import { Github } from 'lucide-react';
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
    <div className={`p-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
      theme === 'dark' ? 'bg-slate-900 hover:bg-slate-800 shadow-slate-900/50' : 'bg-white hover:bg-slate-50 shadow-slate-200/50'
    }`}>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
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
                  : 'bg-slate-100 text-slate-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {githubUrl && (
          <div className="pt-2">
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-md ${
                theme === 'dark' 
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Github size={18} />
              <span>View Code</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}