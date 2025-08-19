import React from 'react';
import { Github, Moon, Sun, BookOpen, Mail, MapPin, Code2, Zap, Sparkles, Star, Rocket } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { ProjectCard } from './components/ProjectCard';
import { Section } from './components/Section';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen font-sans transition-all duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-gray-100' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900'
    }`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl animate-pulse ${
          theme === 'dark' ? 'bg-purple-500' : 'bg-blue-400'
        }`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse delay-1000 ${
          theme === 'dark' ? 'bg-pink-500' : 'bg-purple-400'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 blur-3xl animate-pulse delay-500 ${
          theme === 'dark' ? 'bg-cyan-500' : 'bg-indigo-400'
        }`}></div>
      </div>

      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-xl transition-all duration-300 z-20 backdrop-blur-sm border shadow-lg hover:scale-110 ${
          theme === 'dark' 
            ? 'bg-gray-800/80 border-purple-500/30 hover:bg-gray-700/80 text-yellow-400' 
            : 'bg-white/80 border-blue-200 hover:bg-blue-50/80 text-orange-500'
        }`}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? 
          <Sun size={20} className="drop-shadow-lg" /> : 
          <Moon size={20} className="drop-shadow-lg" />
        }
      </button>

      <main className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 sm:pt-20 sm:pb-12 max-w-4xl z-10">
        <div className="space-y-12 sm:space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6 sm:space-y-8 mt-4 sm:mt-0">
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl border backdrop-blur-sm shadow-lg hover:scale-105 transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-purple-900/80 to-pink-900/80 border-purple-500/30 text-purple-200' 
                : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-300/50 text-blue-700'
            }`}>
              <Code2 size={18} className="animate-pulse" />
              <span className="font-semibold text-sm sm:text-base whitespace-nowrap">Developer & Data Analyst</span>
              <Star size={16} className="animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            
            <div className="space-y-4">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold px-2 bg-gradient-to-r bg-clip-text text-transparent animate-pulse ${
                theme === 'dark' 
                  ? 'from-purple-400 via-pink-400 to-cyan-400' 
                  : 'from-blue-600 via-purple-600 to-pink-600'
              }`}>
                Hi, I'm Sanjay!
              </h1>
              
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-sm border shadow-md ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-cyan-500/30 text-cyan-200' 
                  : 'bg-gradient-to-r from-green-100/80 to-emerald-100/80 border-green-300/50 text-green-700'
              }`}>
                <Rocket size={16} className="animate-bounce" />
                <span className="font-medium text-sm">Final Year Student | Data Analyst | AI/ML & NLP Enthusiast</span>
              </div>
            </div>
            
            <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl backdrop-blur-sm border shadow-md hover:scale-105 transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-orange-900/50 to-red-900/50 border-orange-500/30 text-orange-200' 
                : 'bg-gradient-to-r from-orange-100/80 to-red-100/80 border-orange-300/50 text-orange-700'
            }`}>
              <MapPin size={16} className="animate-pulse" />
              <span className="font-medium">India</span>
            </div>
          </div>

          {/* Projects Section */}
          <Section title="Featured Projects">
            <div className="grid gap-6 sm:gap-8">
              <ProjectCard
                title="End-to-End Transformer for Image to Text"
                description="Advanced computer vision model that converts images to descriptive text using state-of-the-art transformer architecture."
                technologies={['Python', 'PyTorch', 'Transformers', 'Computer Vision', 'NLP']}
                githubUrl="https://github.com/SanjaayM7/End_to_End_Transformer_for_Image_to_Text"
                gradient="from-purple-500 to-pink-500"
              />
              
              <ProjectCard
                title="Agentic RAG Research Assistant"
                description="Intelligent research assistant powered by RAG architecture and AI agents for comprehensive information retrieval."
                technologies={['Python', 'LangChain', 'RAG', 'LLM', 'Vector Databases', 'AI Agents']}
                githubUrl="https://github.com/SanjaayM7/Agentic_Rag_Research_Assistant"
                gradient="from-blue-500 to-cyan-500"
              />
              
              <ProjectCard
                title="Spam Email Detection"
                description="Machine learning solution for identifying and filtering spam emails using advanced NLP techniques."
                technologies={['Python', 'Scikit-learn', 'NLP', 'Machine Learning', 'Text Processing']}
                githubUrl="https://github.com/SanjaayM7/Spam-Email-Detection"
                gradient="from-green-500 to-emerald-500"
              />
            </div>
          </Section>

          {/* Experience Section */}
          <Section title="Experience">
            <div className="grid gap-4 sm:gap-6">
              <div className={`p-6 rounded-2xl backdrop-blur-sm border shadow-lg hover:scale-105 transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border-yellow-500/30' 
                  : 'bg-gradient-to-r from-yellow-100/80 to-orange-100/80 border-yellow-300/50'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${
                    theme === 'dark' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-500/20 text-yellow-600'
                  }`}>
                    <Zap size={20} className="animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Data Analyst Intern</h3>
                    <p className={`text-sm font-medium ${theme === 'dark' ? 'text-yellow-300' : 'text-yellow-700'}`}>
                      @Skillcraft
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={`p-6 rounded-2xl backdrop-blur-sm border shadow-lg hover:scale-105 transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-pink-900/30 to-purple-900/30 border-pink-500/30' 
                  : 'bg-gradient-to-r from-pink-100/80 to-purple-100/80 border-pink-300/50'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${
                    theme === 'dark' ? 'bg-pink-500/20 text-pink-400' : 'bg-pink-500/20 text-pink-600'
                  }`}>
                    <Sparkles size={20} className="animate-spin" style={{ animationDuration: '2s' }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Design Lead</h3>
                    <p className={`text-sm font-medium ${theme === 'dark' ? 'text-pink-300' : 'text-pink-700'}`}>
                      @Chipset
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Skills Section */}
          <Section title="Technologies & Tools">
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {[
                { name: 'Python', color: 'from-blue-500 to-blue-600' },
                { name: 'JavaScript', color: 'from-yellow-500 to-yellow-600' },
                { name: 'HTML', color: 'from-orange-500 to-orange-600' },
                { name: 'CSS', color: 'from-blue-500 to-purple-600' },
                { name: 'React', color: 'from-cyan-500 to-blue-600' },
                { name: 'TypeScript', color: 'from-blue-600 to-blue-700' },
                { name: 'PyTorch', color: 'from-red-500 to-orange-600' },
                { name: 'TensorFlow', color: 'from-orange-500 to-yellow-600' },
                { name: 'Scikit-learn', color: 'from-green-500 to-blue-600' },
                { name: 'Pandas', color: 'from-purple-500 to-pink-600' },
                { name: 'NumPy', color: 'from-blue-500 to-cyan-600' },
                { name: 'LangChain', color: 'from-green-500 to-emerald-600' },
                { name: 'Transformers', color: 'from-purple-500 to-violet-600' },
                { name: 'OpenCV', color: 'from-red-500 to-pink-600' },
                { name: 'NLP', color: 'from-indigo-500 to-purple-600' },
                { name: 'Computer Vision', color: 'from-cyan-500 to-teal-600' },
                { name: 'Machine Learning', color: 'from-emerald-500 to-green-600' },
                { name: 'Deep Learning', color: 'from-violet-500 to-purple-600' },
                { name: 'RAG', color: 'from-pink-500 to-rose-600' },
                { name: 'LLM', color: 'from-amber-500 to-orange-600' },
                { name: 'AI Agents', color: 'from-teal-500 to-cyan-600' },
                { name: 'Git', color: 'from-gray-600 to-gray-700' },
                { name: 'MySQL', color: 'from-blue-600 to-indigo-700' },
                { name: 'Vector Databases', color: 'from-purple-600 to-pink-700' },
                { name: 'Streamlit', color: 'from-red-500 to-pink-600' },
                { name: 'Flask', color: 'from-gray-600 to-gray-700' },
                { name: 'Figma', color: 'from-purple-500 to-pink-600' },
                { name: 'Photoshop', color: 'from-blue-600 to-purple-700' },
                { name: 'Framer', color: 'from-pink-500 to-purple-600' },
                { name: 'Jupyter', color: 'from-orange-500 to-red-600' },
                { name: 'Google Colab', color: 'from-yellow-500 to-orange-600' },
                { name: 'AWS', color: 'from-orange-600 to-yellow-700' },
                { name: 'Docker', color: 'from-blue-600 to-cyan-700' }
              ].map((tech) => (
                <span 
                  key={tech.name}
                  className={`px-4 py-2 text-sm font-medium rounded-xl text-white shadow-lg hover:scale-110 transition-all duration-300 bg-gradient-to-r ${tech.color} hover:shadow-xl cursor-default`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </Section>

          {/* Contact Section */}
          <div className="text-center space-y-8 sm:space-y-10">
            <h2 className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
              theme === 'dark' 
                ? 'from-cyan-400 via-purple-400 to-pink-400' 
                : 'from-blue-600 via-purple-600 to-pink-600'
            }`}>
              Let's Connect
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a 
                href="https://github.com/san7mr" 
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold w-full sm:w-auto justify-center transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm border text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 border-gray-600/30`}
                aria-label="GitHub"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://medium.com/@sanjay77mr" 
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold w-full sm:w-auto justify-center transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm border text-white bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-500 hover:to-emerald-600 border-green-500/30`}
                aria-label="Medium"
              >
                <BookOpen size={18} />
                <span>Medium</span>
              </a>
              
              <a 
                href="mailto:sanjay77mr@gmail.com" 
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold w-full sm:w-auto justify-center transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm border text-white bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-500 hover:to-purple-600 border-blue-500/30`}
                aria-label="Email"
              >
                <Mail size={18} />
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