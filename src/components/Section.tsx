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
    <section className={`space-y-8 ${className}`}>
      <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        {title}
      </h2>
      {children}
    </section>
  );
}