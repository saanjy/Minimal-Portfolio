import React from 'react';
import { Github, Moon, Sun, BookOpen, Mail, MapPin, Code2, Zap, Sparkles } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { ProjectCard } from './components/ProjectCard';
import { Section } from './components/Section';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen font-sans ${
      theme === 'dark' 
        ? 'bg-gray-900 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 p-3 rounded-lg ${
          theme === 'dark' 
            ? 'bg-gray-800 border border-gray-700 hover:bg-gray-700' 
            : 'bg-gray-100 border border-gray-300 hover:bg-gray-200'
        }`}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? 
          <Sun size={20} /> : 
          <Moon size={20} />
        }
      </button>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-gray-100 border-gray-300'
            }`}>
              <Code2 size={18} />
              <span className="font-medium">Developer & Data Analyst</span>
            </div>
            
            <h1 className="text-5xl font-bold">
              Hi, I'm Sanjay!
            </h1>
            
            <p className={`text-lg ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Final Year Student | Data Analyst | AI/ML & NLP Enthusiast
            </p>
            
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg border ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-gray-100 border-gray-300'
            }`}>
              <MapPin size={14} />
              <span className="text-sm">India</span>
            </div>
          </div>

          {/* Projects Section */}
          <Section title="Featured Projects">
            <div className="grid gap-4">
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
            <div className="grid gap-3">
              <div className={`p-4 rounded-lg border ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-gray-50 border-gray-300'
              }`}>
                <div className="flex items-center gap-3">
                  <Zap size={18} />
                  <div>
                    <h3 className="font-semibold">Data Analyst Intern</h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      @Skillcraft
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={`p-4 rounded-lg border ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-gray-50 border-gray-300'
              }`}>
                <div className="flex items-center gap-3">
                  <Sparkles size={18} />
                  <div>
                    <h3 className="font-semibold">Design Lead</h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      @Chipset
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Skills Section */}
          <Section title="Technologies & Tools">
            <div className="flex flex-wrap gap-2">
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
                  className={`px-3 py-1 text-sm rounded-lg border ${
                    theme === 'dark' 
                      ? 'bg-gray-800 border-gray-700 text-gray-300' 
                      : 'bg-gray-100 border-gray-300 text-gray-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          {/* Contact Section */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Let's Connect</h2>
            
            <div className="flex items-center justify-center gap-4">
              <a 
                href="https://github.com/san7mr" 
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-medium ${
                  theme === 'dark' 
                    ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label="GitHub"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://medium.com/@sanjay77mr" 
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-medium ${
                  theme === 'dark' 
                    ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label="Medium"
              >
                <BookOpen size={18} />
                <span>Medium</span>
              </a>
              
              <a 
                href="mailto:sanjay77mr@gmail.com" 
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-medium ${
                  theme === 'dark' 
                    ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                }`}
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