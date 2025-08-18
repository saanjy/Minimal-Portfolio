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
    <section className={`space-y-4 ${className}`}>
      <h2 className={`text-[1.8rem] tracking-tight font-bold ${theme === 'dark' ? 'text-slate-100' : 'text-slate-900'}`}>
        {title}
      </h2>
      {children}
    </section>
  );
}