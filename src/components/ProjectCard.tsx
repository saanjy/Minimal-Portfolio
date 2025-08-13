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
    <div className="group bg-white dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700/50 overflow-hidden hover:shadow-lg dark:hover:shadow-zinc-900/20 transition-all duration-300">
      {imageUrl && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{title}</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{description}</p>
        </div>
        
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-zinc-100 dark:bg-zinc-700/50 text-zinc-600 dark:text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-3 pt-2">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
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
              className="flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
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