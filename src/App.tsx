import React from 'react';
import { Github, Moon, Sun, BookOpen, Mail, MapPin, Calendar, Code2, Sparkles, Zap } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { ProjectCard } from './components/ProjectCard';
import { Section } from './components/Section';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen font-sans relative ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-500`}>
      {/* Subtle grid pattern */}
      <div className={`absolute inset-0 opacity-[0.02] ${theme === 'dark' ? 'bg-white' : 'bg-black'}`} 
           style={{
             backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
             backgroundSize: '24px 24px'
           }} />

      {/* Social Links - Left Side */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        <a 
          href="https://github.com/san7mr" 
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${theme === 'dark' ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black'}`}
        >
          <Github size={20} />
        </a>
        <a 
          href="https://medium.com/@sanjay77mr" 
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${theme === 'dark' ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black'}`}
        >
          <BookOpen size={20} />
        </a>
        <a 
          href="mailto:sanjay77mr@gmail.com" 
          className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${theme === 'dark' ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black'}`}
        >
          <Mail size={20} />
        </a>
      </div>

      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 p-3 rounded-full transition-all duration-300 hover:scale-110 z-50 ${theme === 'dark' ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black'}`}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? 
          <Sun size={20} className="transition-transform duration-300 hover:rotate-180" /> : 
          <Moon size={20} className="transition-transform duration-300 hover:-rotate-12" />
        }
      </button>

      <main className="container mx-auto px-6 py-20 relative z-10 max-w-4xl">
        <section className="space-y-20">
          {/* Hero Section */}
          <div className="space-y-8 pt-12">
            <h1 className={`text-6xl md:text-7xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Hi, i am Sanjay!
            </h1>
            
            <div className="space-y-4">
              <p className={`text-xl font-medium ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>
                Data Analyst | AI/ML & NLP Enthusiast
              </p>
              <div className={`flex items-center gap-2 text-sm ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'}`}>
                <MapPin size={14} />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <Section title="Featured Projects">
            <div className="grid gap-6 md:grid-cols-2">
              <ProjectCard
                title="End-to-End Transformer for Image to Text"
                description="A complete transformer-based model for image captioning that converts visual content into descriptive text. Implements attention mechanisms and encoder-decoder architecture for accurate image understanding and natural language generation."
                technologies={['Python', 'PyTorch', 'Transformers', 'Computer Vision', 'NLP']}
                githubUrl="https://github.com/SanjaayM7/End_to_End_Transformer_for_Image_to_Text"
              />
              
              <ProjectCard
                title="Agentic RAG Research Assistant"
                description="An intelligent research assistant powered by Retrieval-Augmented Generation (RAG) and agentic AI. Combines large language models with dynamic information retrieval to provide accurate, contextual research assistance and automated knowledge synthesis."
                technologies={['Python', 'LangChain', 'RAG', 'LLM', 'Vector Databases', 'AI Agents']}
                githubUrl="https://github.com/SanjaayM7/Agentic_Rag_Research_Assistant"
              />
              
              <ProjectCard
                title="Spam Email Detection"
                description="Machine learning-based email classification system that automatically identifies and filters spam emails. Uses natural language processing techniques and multiple classification algorithms to achieve high accuracy in spam detection."
                technologies={['Python', 'Scikit-learn', 'NLP', 'Machine Learning', 'Text Processing']}
                githubUrl="https://github.com/SanjaayM7/Spam-Email-Detection"
              />
            </div>
          </Section>

          {/* Experience Section */}
          <Section title="Experience">
            <div className="space-y-4">
              <div className={`group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60' : 'bg-white/40 border-white/50 hover:bg-white/60'}`}>
                <div className="flex items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100/80'}`}>
                      <Zap size={16} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                    </div>
                    <div>
                      <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                        Data Analyst Intern
                      </h3>
                      <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        @Skillcraft
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`p-6 rounded-lg border transition-all duration-300 ${theme === 'dark' ? 'bg-zinc-900/50 border-zinc-800' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      Design Lead
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>
                      @Chipset
                    </p>
                  </div>
                  <span className={`text-sm font-mono ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'}`}>
                    May 2024 - Present
                  </span>
                </div>
              </div>
            </div>
              <div className={`p-6 rounded-lg border transition-all duration-300 ${theme === 'dark' ? 'bg-zinc-900/50 border-zinc-800' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      Data Analyst Intern
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>
                      @Skillcraft
                    </p>
                  key={tech}
                  className={`px-4 py-2 text-sm font-medium rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-slate-800/60 to-slate-700/60 text-slate-300 border-slate-600/40 hover:from-slate-700/80 hover:to-slate-600/80 hover:border-slate-500/60' 
                      : 'bg-gradient-to-r from-white/60 to-slate-50/60 text-slate-700 border-white/50 hover:from-white/80 hover:to-slate-50/80 hover:border-slate-200/60'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          {/* Learning Section */}
          <Section title="What I'm Currently Learning">
            <div className="grid gap-4 md:grid-cols-3">
          {/* Contact Section */}
          <Section title="Let's Connect">
            <div className="text-center">
              <div className="flex items-center justify-center gap-6 md:hidden">
                <a 
                  href="https://github.com/san7mr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${theme === 'dark' ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black'}`}
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://medium.com/@sanjay77mr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${theme === 'dark' ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black'}`}
                >
                  <BookOpen size={20} />
                </a>
                <a 
                  href="mailto:sanjay77mr@gmail.com" 
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${theme === 'dark' ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black'}`}
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </Section>
        </section>

        {/* Footer */}
        <footer className="mt-20 pb-8 text-center">
          <p className={`text-sm ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'}`}>
            © 2025 Sanjay
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;