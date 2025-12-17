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
            </div>
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
              href="https://medium.com/@sanjaay7" 
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
            <p className={`text-sm text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024 Sanjay. Based in India.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;