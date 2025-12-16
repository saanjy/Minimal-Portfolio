import React from 'react';
import { Github, Moon, Sun, BookOpen, Mail, ExternalLink, ArrowUpRight } from 'lucide-react';
import { useTheme } from './ThemeProvider';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-[#0a0a0a] text-white' 
        : 'bg-white text-black'
    }`}>
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 p-3 rounded-full transition-all duration-300 z-50 ${
          theme === 'dark' 
            ? 'bg-white/10 hover:bg-white/20 backdrop-blur-sm' 
            : 'bg-black/5 hover:bg-black/10'
        }`}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? 
          <Sun size={20} /> : 
          <Moon size={20} />
        }
      </button>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header Section */}
        <header className="mb-20">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-green-400 to-blue-500">
              <img 
                src="/src/assets/𝙄𝙯𝙪𝙠𝙪_𝙈𝙞𝙙𝙤𝙧𝙞𝙮𝙖___𝘿𝙚𝙠𝙪.jpg" 
                alt="Sanjay"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-medium mb-1">Sanjay</h1>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Engineer | Data Analyst
              </p>
            </div>
          </div>
          
          <p className={`text-lg leading-relaxed max-w-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Final Year Student passionate about AI/ML and NLP. I build intelligent systems and analyze data to solve real-world problems. 
            Currently exploring the intersection of computer vision and natural language processing.
          </p>
        </header>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-xl font-medium mb-8">Projects</h2>
          
          <div className="space-y-8">
            {/* Project 1 */}
            <div className={`group p-6 rounded-2xl transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-white/5 hover:bg-white/10' 
                : 'bg-gray-50 hover:bg-gray-100'
            }`}>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-medium">End-to-End Transformer for Image to Text</h3>
                <a 
                  href="https://github.com/SanjaayM7/End_to_End_Transformer_for_Image_to_Text"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark' 
                      ? 'hover:bg-white/10' 
                      : 'hover:bg-black/5'
                  }`}
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                A complete transformer architecture for converting images to descriptive text using PyTorch and computer vision techniques.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'PyTorch', 'Transformers', 'Computer Vision', 'NLP'].map((tech) => (
                  <span 
                    key={tech}
                    className={`px-3 py-1 text-sm rounded-full ${
                      theme === 'dark' 
                        ? 'bg-white/10 text-gray-300' 
                        : 'bg-black/5 text-gray-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 2 */}
            <div className={`group p-6 rounded-2xl transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-white/5 hover:bg-white/10' 
                : 'bg-gray-50 hover:bg-gray-100'
            }`}>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-medium">Agentic RAG Research Assistant</h3>
                <a 
                  href="https://github.com/SanjaayM7/Agentic_Rag_Research_Assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark' 
                      ? 'hover:bg-white/10' 
                      : 'hover:bg-black/5'
                  }`}
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                An intelligent research assistant using RAG architecture with AI agents for enhanced information retrieval and analysis.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'LangChain', 'RAG', 'LLM', 'Vector Databases', 'AI Agents'].map((tech) => (
                  <span 
                    key={tech}
                    className={`px-3 py-1 text-sm rounded-full ${
                      theme === 'dark' 
                        ? 'bg-white/10 text-gray-300' 
                        : 'bg-black/5 text-gray-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 3 */}
            <div className={`group p-6 rounded-2xl transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-white/5 hover:bg-white/10' 
                : 'bg-gray-50 hover:bg-gray-100'
            }`}>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-medium">Spam Email Detection</h3>
                <a 
                  href="https://github.com/SanjaayM7/Spam-Email-Detection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark' 
                      ? 'hover:bg-white/10' 
                      : 'hover:bg-black/5'
                  }`}
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Machine learning model for detecting spam emails using natural language processing and classification algorithms.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Scikit-learn', 'NLP', 'Machine Learning', 'Text Processing'].map((tech) => (
                  <span 
                    key={tech}
                    className={`px-3 py-1 text-sm rounded-full ${
                      theme === 'dark' 
                        ? 'bg-white/10 text-gray-300' 
                        : 'bg-black/5 text-gray-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-xl font-medium mb-8">Experience</h2>
          
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl ${
              theme === 'dark' 
                ? 'bg-white/5' 
                : 'bg-gray-50'
            }`}>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-medium">Web Developer Intern</h3>
                <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  2024
                </span>
              </div>
              <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Skillcraft
              </p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Developed responsive web applications and enhanced user experience through modern frontend technologies.
              </p>
            </div>

            <div className={`p-6 rounded-2xl ${
              theme === 'dark' 
                ? 'bg-white/5' 
                : 'bg-gray-50'
            }`}>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-medium">Design Lead</h3>
                <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  2024
                </span>
              </div>
              <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Chipset
              </p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Led design initiatives and created user-centered interfaces for digital products.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-xl font-medium mb-8">Technologies</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Python', 'JavaScript', 'React', 'TypeScript', 'PyTorch', 'TensorFlow',
              'Scikit-learn', 'Pandas', 'NumPy', 'LangChain', 'Transformers', 'OpenCV',
              'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'RAG', 'LLM',
              'Git', 'MySQL', 'AWS', 'Docker', 'Streamlit', 'Flask'
            ].map((tech) => (
              <div 
                key={tech}
                className={`p-4 rounded-xl text-center transition-colors ${
                  theme === 'dark' 
                    ? 'bg-white/5 hover:bg-white/10' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-xl font-medium mb-8">Get in Touch</h2>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/san7mr" 
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <Github size={18} />
              <span>GitHub</span>
              <ExternalLink size={14} className="opacity-50" />
            </a>
            
            <a 
              href="https://medium.com/@sanjay77mr" 
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <BookOpen size={18} />
              <span>Medium</span>
              <ExternalLink size={14} className="opacity-50" />
            </a>
            
            <a 
              href="mailto:sanjay77mr@gmail.com" 
              className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024 Sanjay. Based in India.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;