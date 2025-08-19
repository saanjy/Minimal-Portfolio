import React from 'react';
import { Github, Moon, Sun, BookOpen, Mail, MapPin, Code2, Zap, Sparkles } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { ProjectCard } from './components/ProjectCard';
import { Section } from './components/Section';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-black text-gray-100' 
        : 'bg-white text-gray-900'
    }`}>
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 rounded-lg transition-colors z-10 ${
          theme === 'dark' 
            ? 'bg-gray-900 border border-gray-800 hover:bg-gray-800' 
            : 'bg-gray-100 border border-gray-300 hover:bg-gray-200'
        }`}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? 
          <Sun size={18} className="sm:w-5 sm:h-5" /> : 
          <Moon size={18} className="sm:w-5 sm:h-5" />
        }
      </button>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-4xl">
        <div className="space-y-8 sm:space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-3 sm:space-y-4">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border ${
              theme === 'dark' 
                ? 'bg-gray-900 border-gray-800' 
                : 'bg-gray-100 border-gray-300'
            }`}>
              <Code2 size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="font-medium text-sm sm:text-base">Developer & Data Analyst</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Hi, I'm Sanjay!
            </h1>
            
            <p className={`text-base sm:text-lg px-4 sm:px-0 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Final Year Student | Data Analyst | AI/ML & NLP Enthusiast
            </p>
            
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg border ${
              theme === 'dark' 
                ? 'bg-gray-900 border-gray-800' 
                : 'bg-gray-100 border-gray-300'
            }`}>
              <MapPin size={14} />
              <span className="text-sm">India</span>
            </div>
          </div>

          {/* Projects Section */}
          <Section title="Featured Projects">
            <div className="grid gap-4 sm:gap-6">
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
            <div className="grid gap-3 sm:gap-4">
              <div className={`p-4 rounded-lg border ${
                theme === 'dark' 
                  ? 'bg-gray-900 border-gray-800' 
                  : 'bg-gray-50 border-gray-300'
              }`}>
                <div className="flex items-center gap-3">
                  <Zap size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Data Analyst Intern</h3>
                    <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      @Skillcraft
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={`p-4 rounded-lg border ${
                theme === 'dark' 
                  ? 'bg-gray-900 border-gray-800' 
                  : 'bg-gray-50 border-gray-300'
              }`}>
                <div className="flex items-center gap-3">
                  <Sparkles size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Design Lead</h3>
                    <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      @Chipset
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Skills Section */}
          <Section title="Technologies & Tools">
            <div className="flex flex-wrap gap-2 sm:gap-3">
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
                  className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-lg border ${
                    theme === 'dark' 
                      ? 'bg-gray-900 border-gray-800 text-gray-300' 
                      : 'bg-gray-100 border-gray-300 text-gray-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          {/* Contact Section */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Let's Connect</h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a 
                href="https://github.com/san7mr" 
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-medium w-full sm:w-auto justify-center transition-colors ${
                  theme === 'dark' 
                    ? 'bg-gray-900 border-gray-800 text-gray-300 hover:bg-gray-800' 
                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label="GitHub"
              >
                <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="text-sm sm:text-base">GitHub</span>
              </a>
              
              <a 
                href="https://medium.com/@sanjay77mr" 
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-medium w-full sm:w-auto justify-center transition-colors ${
                  theme === 'dark' 
                    ? 'bg-gray-900 border-gray-800 text-gray-300 hover:bg-gray-800' 
                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label="Medium"
              >
                <BookOpen size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="text-sm sm:text-base">Medium</span>
              </a>
              
              <a 
                href="mailto:sanjay77mr@gmail.com" 
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-medium w-full sm:w-auto justify-center transition-colors ${
                  theme === 'dark' 
                    ? 'bg-gray-900 border-gray-800 text-gray-300 hover:bg-gray-800' 
                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label="Email"
              >
                <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="text-sm sm:text-base">Email</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;