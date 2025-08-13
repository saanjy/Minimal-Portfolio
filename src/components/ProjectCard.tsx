import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export function ProjectCard({ title, description, technologies, liveUrl, githubUrl, imageUrl }: ProjectCardProps) {
  return (
    <div className="group bg-white/80 dark:bg-zinc-800/60 backdrop-blur-sm rounded-xl border border-zinc-200/60 dark:border-zinc-700/40 overflow-hidden hover:shadow-xl hover:shadow-zinc-200/20 dark:hover:shadow-zinc-900/30 hover:border-zinc-300/60 dark:hover:border-zinc-600/60 transition-all duration-300 hover:-translate-y-1">
      {imageUrl && (
        <div className="aspect-video overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      
      <div className="p-6 space-y-5">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-200">{title}</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">{description}</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-2.5 py-1 text-xs rounded-full bg-gradient-to-r from-zinc-100 to-zinc-50 dark:from-zinc-700/60 dark:to-zinc-600/60 text-zinc-600 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-600/30 hover:scale-105 transition-transform duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 pt-2 border-t border-zinc-100 dark:border-zinc-700/50">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:scale-105 transition-all duration-200"
            >
              <Github size={16} />
              Code
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:scale-105 transition-all duration-200"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}