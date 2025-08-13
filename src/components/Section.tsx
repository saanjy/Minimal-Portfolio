import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={`space-y-4 ${className}`}>
      <h2 className="text-[1.65rem] tracking-tight font-medium text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      {children}
    </section>
  );
}