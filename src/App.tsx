import React from 'react';
import { Github, Moon, Sun, BookOpen, Mail, ExternalLink, ArrowUpRight, Linkedin, Twitter } from 'lucide-react';
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

      {/* Main Content - Centered */}
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        {/* Header Section - Centered */}
        <header className="mb-16">
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
              <img 
                src="/src/assets/𝙄𝙯𝙪𝙠𝙪_𝙈𝙞𝙙𝙤𝙧𝙞𝙮𝙖___𝘿𝙚𝙠𝙪.jpg" 
                alt="Sanjay"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-semibold mb-2">Sanjay</h1>
            <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Engineer / Data Analyst
            </p>
          </div>
          
          <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Final year student who loves learning and experimenting with new ideas. I enjoy building intelligent systems and working with data to solve real-world problems, and I'm currently exploring automation and deep learning.
          </p>
        </header>

        {/* Projects Section - Centered */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-12">Stuff I'm building</h2>
          
          <div className="space-y-8">
            {/* Project 1 */}
            <div className={`text-left p-6 rounded-2xl transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-white/5 hover:bg-white/8' 
                : 'bg-gray-50 hover:bg-gray-100'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium">End-to-End Transformer for Image to Text</h3>
                <a 
                  href="https://github.com/SanjaayM7/End_to_End_Transformer_for_Image_to_Text"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1 rounded transition-colors ${
                    theme === 'dark' 
                      ? 'hover:bg-white/10' 
                      : 'hover:bg-black/5'
                  }`}
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Deep learning model that converts images to descriptive text using transformer architecture.
              </p>
            </div>

            {/* Project 2 */}
            <div className={`text-left p-6 rounded-2xl transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-white/5 hover:bg-white/8' 
                : 'bg-gray-50 hover:bg-gray-100'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium">Agentic RAG Research Assistant</h3>
                <a 
                  href="https://github.com/SanjaayM7/Agentic_Rag_Research_Assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1 rounded transition-colors ${
                    theme === 'dark' 
                      ? 'hover:bg-white/10' 
                      : 'hover:bg-black/5'
                  }`}
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                AI-powered research assistant using Retrieval-Augmented Generation for intelligent document analysis.
              </p>
            </div>

            {/* Project 3 */}
            <div className={`text-left p-6 rounded-2xl transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-white/5 hover:bg-white/8' 
                : 'bg-gray-50 hover:bg-gray-100'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium">Spam Email Detection</h3>
                <a 
                  href="https://github.com/SanjaayM7/Spam-Email-Detection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1 rounded transition-colors ${
                    theme === 'dark' 
                      ? 'hover:bg-white/10' 
                      : 'hover:bg-black/5'
                  }`}
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Machine learning classifier for identifying spam emails with high accuracy.
              </p>
            </div>
          </div>
        </section>

        {/* Social Icons - Centered */}
        <section className="mb-12">
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/san7mr" 
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            
            <a 
              href="https://medium.com/@sanjaay7" 
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              aria-label="Medium"
            >
              <BookOpen size={20} />
            </a>
            
            <a 
              href="mailto:sanjay77mr@gmail.com" 
              className={`p-3 rounded-full transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </section>

        {/* Footer - Centered */}
        <footer className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2024 Sanjay. Based in India.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;