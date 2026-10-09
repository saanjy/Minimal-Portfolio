import { useEffect, useState } from 'react';
import {
  Github,
  BookOpen,
  Mail,
  ExternalLink,
  ArrowUpRight,
  Code2,
  Brain,
  Database,
  Sparkles,
  Terminal,
  Zap,
  ChevronDown,
} from 'lucide-react';

const projects = [
  {
    title: 'End-to-End Transformer for Image to Text',
    description:
      'Deep learning model that converts images to descriptive text using transformer architecture. Built from scratch with attention mechanisms and custom tokenization.',
    href: 'https://github.com/SanjaayM7/End_to_End_Transformer_for_Image_to_Text',
    tags: ['Deep Learning', 'Transformers', 'Computer Vision'],
    icon: Brain,
  },
  {
    title: 'Agentic RAG Research Assistant',
    description:
      'AI-powered research assistant using Retrieval-Augmented Generation for intelligent document analysis. Supports multi-source queries with contextual reasoning.',
    href: 'https://github.com/SanjaayM7/Agentic_Rag_Research_Assistant',
    tags: ['RAG', 'LLM', 'Automation'],
    icon: Sparkles,
  },
  {
    title: 'Spam Email Detection',
    description:
      'Machine learning classifier for identifying spam emails with high accuracy. Features NLP preprocessing, multiple model comparison, and performance benchmarking.',
    href: 'https://github.com/SanjaayM7/Spam-Email-Detection',
    tags: ['NLP', 'Classification', 'Scikit-learn'],
    icon: Zap,
  },
];

const skills = [
  { label: 'Python', icon: Code2 },
  { label: 'PyTorch', icon: Brain },
  { label: 'TensorFlow', icon: Terminal },
  { label: 'SQL', icon: Database },
  { label: 'Pandas', icon: Database },
  { label: 'LLMs / RAG', icon: Sparkles },
  { label: 'Automation', icon: Zap },
  { label: 'Data Analysis', icon: Database },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/SanjaayM7', icon: Github },
  { label: 'Medium', href: 'https://medium.com/@sanjaay7', icon: BookOpen },
  { label: 'Email', href: 'mailto:sanjay77mr@gmail.com', icon: Mail },
];

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}

function AsciiHero() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none z-10" />
      <ascii-art
        piece="tokyo-rain"
        style={{ display: 'block', width: '100%' }}
      />
    </div>
  );
}

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="font-mono text-sm text-cyan-400/80">{index}</span>
      <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
    </div>
  );
}

function App() {
  const scrollProgress = useScrollProgress();

  return (
    <div className="min-h-screen bg-[#070710] text-white selection:bg-cyan-500/30">
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 z-50 transition-[width] duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8">
        {/* ===== Hero ===== */}
        <section className="pt-16 md:pt-24 pb-20">
          {/* ASCII Art Hero */}
          <div className="mb-12">
            <AsciiHero />
          </div>

          {/* Name + title */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs text-gray-500 tracking-wider uppercase">
                Available for opportunities
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
              Sanjay
            </h1>
            <p className="text-lg text-gray-400 font-mono">
              <span className="text-cyan-400">~</span> engineer{' '}
              <span className="text-gray-600">/</span> data analyst
            </p>
          </div>

          {/* Bio */}
          <p className="text-base md:text-lg leading-relaxed text-gray-300 max-w-2xl mb-8">
            Final year student who loves learning and experimenting with new ideas.
            I enjoy building intelligent systems and working with data to solve
            real-world problems, and I'm currently exploring automation and deep
            learning.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200 text-sm text-gray-300 hover:text-white"
              >
                <Icon size={16} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                {label}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-500"
                />
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex flex-col items-center gap-2 text-gray-600">
            <ChevronDown size={20} className="animate-bounce" />
          </div>
        </section>

        {/* ===== Skills ===== */}
        <section className="pb-20">
          <SectionHeader index="01" title="Toolkit" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {skills.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="group flex items-center gap-2.5 px-4 py-3 rounded-lg border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-200"
              >
                <Icon
                  size={16}
                  className="text-gray-500 group-hover:text-cyan-400 transition-colors shrink-0"
                />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Projects ===== */}
        <section className="pb-20">
          <SectionHeader index="02" title="Projects" />
          <div className="space-y-4">
            {projects.map(({ title, description, href, tags, icon: Icon }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 transition-all duration-200">
                      <Icon size={18} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <h3 className="text-base font-medium text-white group-hover:text-cyan-100 transition-colors">
                      {title}
                    </h3>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
                  />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 pl-11">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2 pl-11">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-500 border border-white/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ===== About / Now ===== */}
        <section className="pb-20">
          <SectionHeader index="03" title="Currently" />
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/8 bg-white/[0.02]">
              <span className="font-mono text-xs text-cyan-400 mt-1">→</span>
              <p className="text-sm text-gray-300 leading-relaxed">
                Exploring <span className="text-white">agentic AI workflows</span> and
                retrieval-augmented generation for practical research tools.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/8 bg-white/[0.02]">
              <span className="font-mono text-xs text-cyan-400 mt-1">→</span>
              <p className="text-sm text-gray-300 leading-relaxed">
                Diving deeper into <span className="text-white">transformer architectures</span> —
                building end-to-end models from scratch rather than fine-tuning.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/8 bg-white/[0.02]">
              <span className="font-mono text-xs text-cyan-400 mt-1">→</span>
              <p className="text-sm text-gray-300 leading-relaxed">
                Writing about what I learn on{' '}
                <a
                  href="https://medium.com/@sanjaay7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 decoration-cyan-500/30"
                >
                  Medium
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ===== Footer ===== */}
        <footer className="pb-12 pt-8 border-t border-white/8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="font-mono text-xs text-gray-600">
              <span className="text-cyan-500/60">$</span> built with care ·{' '}
              <span className="text-gray-500">© 2026 Sanjay</span>
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-cyan-400 transition-colors"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
