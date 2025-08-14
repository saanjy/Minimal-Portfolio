import React from 'react';
import { Github, Moon, Sun, BookOpen, Mail, MapPin, Code2, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { ProjectCard } from './components/ProjectCard';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen font-sans ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} transition-all duration-500`}>
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 p-3 rounded-full transition-all duration-300 hover:scale-110 z-50 shadow-lg ${
          theme === 'dark' 
            ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 shadow-slate-900/50' 
            : 'bg-white hover:bg-slate-100 text-slate-700 shadow-slate-200/50'
        }`}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? 
          <Sun size={20} className="transition-transform duration-300 hover:rotate-180" /> : 
          <Moon size={20} className="transition-transform duration-300 hover:-rotate-12" />
        }
      </button>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-24">
          <div className="mb-12">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                Sanjay
              </span>
            </h1>
            <p className={`text-2xl md:text-3xl mb-8 font-light ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
              Final Year Student | Data Analyst | AI/ML & NLP Enthusiast
            </p>
            
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${theme === 'dark' ? 'bg-slate-800/50 text-slate-300' : 'bg-white text-slate-600 shadow-sm'}`}>
                <MapPin size={16} />
                <span>India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              <a 
                href="https://github.com/san7mr" 
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  theme === 'dark' 
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 shadow-slate-900/50' 
                    : 'bg-white hover:bg-slate-100 text-slate-700 shadow-slate-200/50'
                }`}
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://medium.com/@sanjay77mr" 
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  theme === 'dark' 
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 shadow-slate-900/50' 
                    : 'bg-white hover:bg-slate-100 text-slate-700 shadow-slate-200/50'
                }`}
              >
                <BookOpen size={20} />
                <span>Medium</span>
              </a>
              <a 
                href="mailto:sanjay77mr@gmail.com" 
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  theme === 'dark' 
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 shadow-slate-900/50' 
                    : 'bg-white hover:bg-slate-100 text-slate-700 shadow-slate-200/50'
                }`}
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </section>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-12">
            {/* Experience Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase size={24} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                <h2 className="text-2xl font-bold">Experience</h2>
              </div>
              <div className="space-y-4">
                <div className={`p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                  theme === 'dark' ? 'bg-slate-900 hover:bg-slate-800 shadow-slate-900/50' : 'bg-white hover:bg-slate-50 shadow-slate-200/50'
                }`}>
                  <h3 className="text-lg font-semibold mb-1">Data Analyst Intern</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Skillcraft</p>
                </div>
                
                <div className={`p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                  theme === 'dark' ? 'bg-slate-900 hover:bg-slate-800 shadow-slate-900/50' : 'bg-white hover:bg-slate-50 shadow-slate-200/50'
                }`}>
                  <h3 className="text-lg font-semibold mb-1">Design Lead</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Chipset</p>
                </div>
              </div>
            </section>

            {/* Learning Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap size={24} className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
                <h2 className="text-2xl font-bold">Currently Learning</h2>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'Advanced ML & Deep Learning', icon: '🧠' },
                  { title: 'Cloud Computing (AWS/GCP)', icon: '☁️' },
                  { title: 'Advanced UI/UX Design', icon: '🎨' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                      theme === 'dark' ? 'bg-slate-900 hover:bg-slate-800 shadow-slate-900/50' : 'bg-white hover:bg-slate-50 shadow-slate-200/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <p className="font-medium">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Projects Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Code2 size={24} className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />
                <h2 className="text-2xl font-bold">Featured Projects</h2>
              </div>
              <div className="space-y-6">
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
            </section>
          </div>
        </div>

        {/* Technologies Section */}
        <section className="mb-24">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Sparkles size={24} className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'} />
            <h2 className="text-2xl font-bold text-center">Technologies & Tools</h2>
          </div>
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-slate-900 shadow-slate-900/50' : 'bg-white shadow-slate-200/50'} shadow-lg`}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                'Python', 'JavaScript', 'React', 'TypeScript',
                'PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 
                'LangChain', 'Transformers', 'OpenCV', 'NLP',
                'Machine Learning', 'Deep Learning', 'RAG', 'LLM',
                'Git', 'MySQL', 'Streamlit', 'Flask', 
                'Figma', 'Photoshop', 'Framer', 'Jupyter', 'AWS'
              ].map((tech) => (
                <span 
                  key={tech}
                  className={`px-4 py-3 text-sm font-medium rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-md ${
                    theme === 'dark' 
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' 
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://github.com/san7mr" 
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                theme === 'dark' 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 shadow-slate-900/50' 
                  : 'bg-white hover:bg-slate-100 text-slate-700 shadow-slate-200/50'
              }`}
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://medium.com/@sanjay77mr" 
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                theme === 'dark' 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 shadow-slate-900/50' 
                  : 'bg-white hover:bg-slate-100 text-slate-700 shadow-slate-200/50'
              }`}
            >
              <BookOpen size={20} />
              <span>Medium</span>
            </a>
            <a 
              href="mailto:sanjay77mr@gmail.com" 
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                theme === 'dark' 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 shadow-slate-900/50' 
                  : 'bg-white hover:bg-slate-100 text-slate-700 shadow-slate-200/50'
              }`}
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;