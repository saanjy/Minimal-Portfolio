import React from 'react';
import { useTheme } from '../ThemeProvider';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, children, className = "" }: SectionProps) {
  const { theme } = useTheme();
  
  return (
    <section className={`space-y-6 sm:space-y-8 ${className}`}>
      <div className="text-center">
        <h2 className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent inline-block ${
          theme === 'dark' 
            ? 'from-purple-400 via-pink-400 to-cyan-400' 
            : 'from-blue-600 via-purple-600 to-pink-600'
        }`}>
          {title}
        </h2>
        <div className={`w-24 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r ${
          theme === 'dark' 
            ? 'from-purple-500 to-pink-500' 
            : 'from-blue-500 to-purple-500'
        }`}></div>
      </div>
      {children}
    </section>
  );
}