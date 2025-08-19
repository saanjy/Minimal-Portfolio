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
    <section className={`space-y-3 sm:space-y-4 ${className}`}>
      <h2 className="text-xl sm:text-2xl font-bold">
        {title}
      </h2>
      {children}
    </section>
  );
}