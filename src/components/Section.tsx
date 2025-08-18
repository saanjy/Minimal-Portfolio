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
    <section className={`space-y-6 ${className}`}>
      <h2 className={`text-3xl font-bold ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent' 
          : 'bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent'
      }`}>
        {title}
      </h2>
      {children}
    </section>
  );
}