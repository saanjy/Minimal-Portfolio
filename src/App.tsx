import React from 'react';
import { Github, Moon, Sun, BookOpen, Mail, MapPin, Calendar, Code2, Sparkles, Zap } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { ProjectCard } from './components/ProjectCard';
import { Section } from './components/Section';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen font-sans relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-zinc-100' : 'bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-zinc-900'} transition-all duration-700`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${theme === 'dark' ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gradient-to-r from-blue-400 to-indigo-400'}`} />
        <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 animate-pulse delay-1000 ${theme === 'dark' ? 'bg-gradient-to-r from-emerald-600 to-teal-600' : 'bg-gradient-to-r from-emerald-400 to-cyan-400'}`} />
        <div className={`absolute top-3/4 left-1/2 w-64 h-64 rounded-full blur-3xl opacity-15 animate-pulse delay-2000 ${theme === 'dark' ? 'bg-gradient-to-r from-pink-600 to-rose-600' : 'bg-gradient-to-r from-pink-400 to-rose-400'}`} />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full opacity-30 animate-float ${theme === 'dark' ? 'bg-white' : 'bg-slate-400'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl shadow-2xl hover:shadow-3xl hover:scale-110 border border-white/20 dark:border-slate-700/50 transition-all duration-500 z-50 group"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? 
          <Sun size={20} className="text-amber-400 group-hover:rotate-180 transition-transform duration-500" /> : 
          <Moon size={20} className="text-slate-600 group-hover:-rotate-12 transition-transform duration-500" />
        }
      </button>

      <main className="container mx-auto px-6 py-20 relative z-10">
        <section className="max-w-3xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="space-y-4 relative">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-xl ${theme === 'dark' ? 'bg-slate-800/60' : 'bg-gradient-to-r from-blue-500/10 to-indigo-500/10'} backdrop-blur-sm border ${theme === 'dark' ? 'border-slate-700/50' : 'border-white/10'}`}>
                <Code2 size={24} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
              </div>
            </div>
            
            <h1 className="text-[3.2rem] leading-[0.9] tracking-tight font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-slate-100 dark:via-slate-300 dark:to-slate-100 bg-clip-text text-transparent">
              Hi, i am Sanjay!
            </h1>
            
            <div className="space-y-2 text-[1.1rem] leading-relaxed">
              <p className={`font-semibold ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>
                Data Analyst | AI/ML & NLP Enthusiast
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-slate-800/80 border-slate-700/60 text-slate-300' : 'bg-white/60 border-white/50 text-slate-600'}`}>
                <MapPin size={14} />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <Section title="Featured Projects">
            <div className="grid gap-6">
              <ProjectCard
                title="End-to-End Transformer for Image to Text"
                technologies={['Python', 'PyTorch', 'Transformers', 'Computer Vision', 'NLP']}
                githubUrl="https://github.com/SanjaayM7/End_to_End_Transformer_for_Image_to_Text"
              />
              
              <ProjectCard
                title="Agentic RAG Research Assistant"
                technologies={['Python', 'LangChain', 'RAG', 'LLM', 'Vector Databases', 'AI Agents']}
                githubUrl="https://github.com/SanjaayM7/Agentic_Rag_Research_Assistant"
              />
              
              <ProjectCard
                title="Spam Email Detection"
                technologies={['Python', 'Scikit-learn', 'NLP', 'Machine Learning', 'Text Processing']}
                githubUrl="https://github.com/SanjaayM7/Spam-Email-Detection"
              />
            </div>
          </Section>

          {/* Experience Section */}
          <Section title="Experience">
            <div className="space-y-3">
              <div className={`group p-5 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:shadow-lg hover:scale-[1.01] ${theme === 'dark' ? 'bg-slate-800/60 border-slate-700/60 hover:bg-slate-800/80' : 'bg-white/40 border-white/50 hover:bg-white/60'}`}>
                <div className="flex items-center">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-slate-700/60' : 'bg-blue-100/80'}`}>
                      <Zap size={16} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                    </div>
                    <div>
                      <h3 className={`font-semibold ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                        Data Analyst Intern
                      </h3>
                      <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        @Skillcraft
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`group p-5 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:shadow-lg hover:scale-[1.01] ${theme === 'dark' ? 'bg-slate-800/60 border-slate-700/60 hover:bg-slate-800/80' : 'bg-white/40 border-white/50 hover:bg-white/60'}`}>
                <div className="flex items-center">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-slate-700/60' : 'bg-purple-100/80'}`}>
                      <Sparkles size={16} className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
                    </div>
                    <div>
                      <h3 className={`font-semibold ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                        Design Lead
                      </h3>
                      <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        @Chipset
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Skills Section */}
          <Section title="Technologies & Tools">
            <div className="flex flex-wrap gap-2.5">
              {[
                'Python', 'JavaScript', 'HTML', 'CSS', 'React', 'TypeScript',
                'PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy',
                'LangChain', 'Transformers', 'OpenCV', 'NLP', 'Computer Vision',
                'Machine Learning', 'Deep Learning', 'RAG', 'LLM', 'AI Agents',
                'Git', 'MySQL', 'Vector Databases', 'Streamlit', 'Flask', 'Figma',
                'Photoshop', 'Framer', 'Jupyter', 'Google Colab', 'AWS', 'Docker'
              ].map((tech) => (
                <span 
                  key={tech}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default ${
                    theme === 'dark' 
                      ? 'bg-slate-800/70 text-slate-300 border-slate-700/60 hover:bg-slate-700/80 hover:border-slate-600/70' 
                      : 'bg-gradient-to-r from-white/60 to-slate-50/60 text-slate-700 border-white/50 hover:from-white/80 hover:to-slate-50/80 hover:border-slate-200/60'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          {/* Contact Section */}
          <div className="text-center space-y-4">
            <h2 className={`text-[1.8rem] tracking-tight font-bold ${theme === 'dark' ? 'text-slate-100' : 'text-slate-900'}`}>
              Let's Connect
            </h2>
            <div className={`p-5 rounded-xl backdrop-blur-sm border ${theme === 'dark' ? 'bg-slate-800/60 border-slate-700/60' : 'bg-gradient-to-r from-white/40 to-slate-50/40 border-white/50'}`}>
              {/* Social Links */}
              <div className="flex items-center justify-center gap-3">
                <a 
                  href="https://github.com/san7mr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-md ${theme === 'dark' ? 'bg-slate-700/60 border-slate-600/60 text-slate-300 hover:text-slate-100 hover:bg-slate-600/70' : 'bg-white/60 border-white/50 text-slate-600 hover:text-slate-800'}`}
                  aria-label="GitHub"
                >
                  <Github size={18} />
                  <span className="font-medium">GitHub</span>
                </a>
                <a 
                  href="https://medium.com/@sanjay77mr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-md ${theme === 'dark' ? 'bg-slate-700/60 border-slate-600/60 text-slate-300 hover:text-slate-100 hover:bg-slate-600/70' : 'bg-white/60 border-white/50 text-slate-600 hover:text-slate-800'}`}
                  aria-label="Medium"
                >
                  <BookOpen size={18} />
                  <span className="font-medium">Medium</span>
                </a>
                <a 
                  href="mailto:sanjay77mr@gmail.com" 
                  className={`group flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-md ${theme === 'dark' ? 'bg-slate-700/60 border-slate-600/60 text-slate-300 hover:text-slate-100 hover:bg-slate-600/70' : 'bg-white/60 border-white/50 text-slate-600 hover:text-slate-800'}`}
                  aria-label="Email"
                >
                  <Mail size={18} />
                  <span className="font-medium">Email</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;