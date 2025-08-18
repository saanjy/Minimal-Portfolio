import React from 'react';
import { Github, Moon, Sun, BookOpen, Mail, MapPin, Code2, Sparkles, Zap } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { ProjectCard } from './components/ProjectCard';
import { Section } from './components/Section';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen font-sans transition-all duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white' 
        : 'bg-gradient-to-br from-indigo-50 via-white to-cyan-50 text-gray-900'
    }`}>
      {/* Geometric background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl opacity-30 ${
          theme === 'dark' ? 'bg-purple-600' : 'bg-indigo-300'
        }`} />
        <div className={`absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${
          theme === 'dark' ? 'bg-cyan-600' : 'bg-purple-300'
        }`} />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-25 ${
          theme === 'dark' ? 'bg-pink-600' : 'bg-cyan-300'
        }`} />
      </div>

      {/* Grid pattern overlay */}
      <div className={`absolute inset-0 opacity-5 ${
        theme === 'dark' ? 'bg-white' : 'bg-gray-900'
      }`} style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }} />

      <button
        onClick={toggleTheme}
        className={`fixed top-8 right-8 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 ${
          theme === 'dark' 
            ? 'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20' 
            : 'bg-white/80 backdrop-blur-md border border-gray-200 hover:bg-white shadow-lg'
        }`}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? 
          <Sun size={24} className="text-yellow-400" /> : 
          <Moon size={24} className="text-indigo-600" />
        }
      </button>

      <main className="container mx-auto px-8 py-16 relative z-10 max-w-4xl">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${
              theme === 'dark' 
                ? 'bg-white/10 backdrop-blur-md border border-white/20' 
                : 'bg-white/70 backdrop-blur-md border border-indigo-200 shadow-lg'
            }`}>
              <Code2 size={20} className={theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'} />
              <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Developer & Data Analyst
              </span>
            </div>
            
            <h1 className={`text-6xl font-bold leading-tight ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent'
            }`}>
              Hi, I'm Sanjay!
            </h1>
            
            <p className={`text-xl font-medium ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Final Year Student | Data Analyst | AI/ML & NLP Enthusiast
            </p>
            
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
              theme === 'dark' 
                ? 'bg-white/5 border border-white/10' 
                : 'bg-white/50 border border-gray-200'
            }`}>
              <MapPin size={16} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} />
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                India
              </span>
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
            <div className="grid gap-4">
              <div className={`group p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                theme === 'dark' 
                  ? 'bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10' 
                  : 'bg-white/70 backdrop-blur-md border border-gray-200 hover:bg-white/90 shadow-lg hover:shadow-xl'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${
                    theme === 'dark' ? 'bg-cyan-500/20' : 'bg-indigo-100'
                  }`}>
                    <Zap size={20} className={theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Data Analyst Intern
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      @Skillcraft
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={`group p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                theme === 'dark' 
                  ? 'bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10' 
                  : 'bg-white/70 backdrop-blur-md border border-gray-200 hover:bg-white/90 shadow-lg hover:shadow-xl'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${
                    theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'
                  }`}>
                    <Sparkles size={20} className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Design Lead
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      @Chipset
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Skills Section */}
          <Section title="Technologies & Tools">
            <div className="flex flex-wrap gap-3">
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
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 cursor-default ${
                    theme === 'dark' 
                      ? 'bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20' 
                      : 'bg-white/70 text-gray-700 border border-gray-200 hover:bg-white shadow-md hover:shadow-lg'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          {/* Contact Section */}
          <div className="text-center space-y-8">
            <h2 className={`text-4xl font-bold ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent'
            }`}>
              Let's Connect
            </h2>
            
            <div className="flex items-center justify-center gap-6">
              <a 
                href="https://github.com/san7mr" 
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white' 
                    : 'bg-white/70 backdrop-blur-md border border-gray-200 text-gray-700 hover:bg-white shadow-lg hover:shadow-xl'
                }`}
                aria-label="GitHub"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://medium.com/@sanjay77mr" 
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white' 
                    : 'bg-white/70 backdrop-blur-md border border-gray-200 text-gray-700 hover:bg-white shadow-lg hover:shadow-xl'
                }`}
                aria-label="Medium"
              >
                <BookOpen size={20} />
                <span>Medium</span>
              </a>
              
              <a 
                href="mailto:sanjay77mr@gmail.com" 
                className={`group flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white' 
                    : 'bg-white/70 backdrop-blur-md border border-gray-200 text-gray-700 hover:bg-white shadow-lg hover:shadow-xl'
                }`}
                aria-label="Email"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;