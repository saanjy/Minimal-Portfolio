import React from 'react';
import { Github, Moon, Sun, BookOpen, Mail, MapPin, ExternalLink, Code2, Sparkles } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { ProjectCard } from './components/ProjectCard';
import { Section } from './components/Section';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen font-sans ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'} transition-all duration-500`}>
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`fixed top-8 right-8 p-3 rounded-full transition-all duration-300 hover:scale-110 z-50 ${
          theme === 'dark' 
            ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' 
            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
        }`}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? 
          <Sun size={20} className="transition-transform duration-300 hover:rotate-180" /> : 
          <Moon size={20} className="transition-transform duration-300 hover:-rotate-12" />
        }
      </button>

      <main className="max-w-4xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Hi, I'm{' '}
              <span className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                Sanjay
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
              Final Year Student | Data Analyst | AI/ML & NLP Enthusiast
            </p>
            <p className={`text-lg leading-relaxed max-w-2xl ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Passionate about solving problems with data and building intelligent systems. Currently pursuing my studies while gaining hands-on experience through internships and personal projects. I enjoy turning complex data into actionable insights and building intelligent systems that solve real-world problems.
            </p>
          </div>
          
          <div className="flex items-center gap-6 mb-8">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${theme === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
              <MapPin size={16} />
              <span>India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/san7mr" 
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://medium.com/@sanjay77mr" 
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <BookOpen size={18} />
              <span>Medium</span>
            </a>
            <a 
              href="mailto:sanjay77mr@gmail.com" 
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-6">
            <div className={`p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
              theme === 'dark' ? 'bg-slate-900 hover:bg-slate-800' : 'bg-slate-50 hover:bg-slate-100'
            }`}>
              <h3 className="text-xl font-semibold mb-2">Data Analyst Intern</h3>
              <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Skillcraft</p>
            </div>
            
            <div className={`p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
              theme === 'dark' ? 'bg-slate-900 hover:bg-slate-800' : 'bg-slate-50 hover:bg-slate-100'
            }`}>
              <h3 className="text-xl font-semibold mb-2">Design Lead</h3>
              <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Chipset</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="space-y-8">
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

        {/* Technologies Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Technologies & Tools</h2>
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
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Learning Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">What I'm Currently Learning</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Advanced ML & Deep Learning', icon: '🧠' },
              { title: 'Cloud Computing (AWS/GCP)', icon: '☁️' },
              { title: 'Advanced UI/UX Design', icon: '🎨' }
            ].map((item, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' ? 'bg-slate-900 hover:bg-slate-800' : 'bg-slate-50 hover:bg-slate-100'
                }`}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <p className="font-semibold text-lg">{item.title}</p>
              </div>
            ))}
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
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://medium.com/@sanjay77mr" 
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <BookOpen size={18} />
              <span>Medium</span>
            </a>
            <a 
              href="mailto:sanjay77mr@gmail.com" 
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;