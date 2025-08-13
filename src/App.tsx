import React from 'react';
import { Github, Moon, Sun, BookOpen, Mail, MapPin, Calendar } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { ProjectCard } from './components/ProjectCard';
import { Section } from './components/Section';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen font-sans ${theme === 'dark' ? 'bg-gradient-to-br from-dark via-zinc-900 to-zinc-800 text-zinc-100' : 'bg-gradient-to-br from-zinc-50 via-white to-zinc-100 text-zinc-900'} transition-all duration-500`}>
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 p-3 rounded-full bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-110 border border-zinc-200/50 dark:border-zinc-700/50 transition-all duration-300 z-10"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={20} className="text-amber-500" /> : <Moon size={20} className="text-indigo-600" />}
      </button>

      <main className="container mx-auto px-6 py-20 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl" />
        </div>
        
        <section className="max-w-2xl mx-auto space-y-10">
          {/* Hero Section */}
          <div className="space-y-4 relative z-10">
            <h1 className="text-[3rem] leading-tight tracking-tight font-bold bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100 bg-clip-text text-transparent">
              Hi, i am Sanjay!
            </h1>
            <div className="space-y-2 text-[1.1rem] text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p className="font-medium">Founder, Student, Data Analyst, Machine Learning Enthusiast, and Networking.</p>
              <p>Passionate about solving problems with data and building intelligent systems.</p>
            </div>
            
            {/* Quick Info */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2 bg-white/50 dark:bg-zinc-800/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50">
                <MapPin size={14} />
                <span>India</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 dark:bg-zinc-800/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50">
                <Calendar size={14} />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* About Section */}
          <Section title="About">
            <div className="prose prose-zinc dark:prose-invert max-w-none">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                I'm a passionate data analyst and machine learning enthusiast with a strong foundation in web development. 
                Currently pursuing my studies while gaining hands-on experience through internships and personal projects. 
                I enjoy turning complex data into actionable insights and building intelligent systems that solve real-world problems.
              </p>
            </div>
          </Section>

          {/* Projects Section */}
          <Section title="Featured Projects">
            <div className="grid gap-6">
              <ProjectCard
                title="End-to-End Transformer for Image to Text"
                description="A complete transformer-based model for image captioning that converts visual content into descriptive text. Implements attention mechanisms and encoder-decoder architecture for accurate image understanding and natural language generation."
                technologies={['Python', 'PyTorch', 'Transformers', 'Computer Vision', 'NLP']}
                githubUrl="https://github.com/SanjaayM7/End_to_End_Transformer_for_Image_to_Text"
                imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
              />
              
              <ProjectCard
                title="Agentic RAG Research Assistant"
                description="An intelligent research assistant powered by Retrieval-Augmented Generation (RAG) and agentic AI. Combines large language models with dynamic information retrieval to provide accurate, contextual research assistance and automated knowledge synthesis."
                technologies={['Python', 'LangChain', 'RAG', 'LLM', 'Vector Databases', 'AI Agents']}
                githubUrl="https://github.com/SanjaayM7/Agentic_Rag_Research_Assistant"
                imageUrl="https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&h=400&fit=crop"
              />
              
              <ProjectCard
                title="Spam Email Detection"
                description="Machine learning-based email classification system that automatically identifies and filters spam emails. Uses natural language processing techniques and multiple classification algorithms to achieve high accuracy in spam detection."
                technologies={['Python', 'Scikit-learn', 'NLP', 'Machine Learning', 'Text Processing']}
                githubUrl="https://github.com/SanjaayM7/Spam-Email-Detection"
                imageUrl="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=400&fit=crop"
              />
            </div>
          </Section>

          {/* Experience Section */}
          <Section title="Experience">
            <ul className="space-y-2 text-[1rem] text-zinc-600 dark:text-zinc-400">
              <li className="group flex items-start space-x-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200">
                <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-zinc-400 group-hover:bg-zinc-600 dark:group-hover:bg-zinc-300 transition-colors duration-200"></span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200 font-medium">Data Analyst Intern @Skillcraft</span>
                    <span className="text-sm text-zinc-400">2024</span>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    Analyzed customer data and created automated reports, improving decision-making processes by 30%.
                  </p>
                </div>
              </li>
              <li className="group flex items-start space-x-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200">
                <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-zinc-400 group-hover:bg-zinc-600 dark:group-hover:bg-zinc-300 transition-colors duration-200"></span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200 font-medium">Design Lead @Chipset</span>
                    <span className="text-sm text-zinc-400">2023</span>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    Led UI/UX design initiatives and collaborated with development teams to create user-centered solutions.
                  </p>
                </div>
              </li>
            </ul>
          </Section>

          {/* Skills Section */}
          <Section title="Technologies & Tools">
            <div className="flex flex-wrap gap-2">
              {[
                'Python', 'JavaScript', 'HTML', 'CSS', 'React', 'TypeScript',
                'PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy',
                'LangChain', 'Transformers', 'OpenCV', 'NLP', 'Computer Vision',
                'Machine Learning', 'Deep Learning', 'RAG', 'LLM', 'AI Agents',
                'Git', 'MySQL', 'Vector Databases', 'Streamlit', 'Flask',
                'Jupyter', 'Google Colab', 'AWS', 'Docker'
              ].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 text-sm rounded-lg bg-gradient-to-r from-zinc-100 to-zinc-50 dark:from-zinc-800/80 dark:to-zinc-700/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-600/30 hover:shadow-md hover:scale-105 hover:border-zinc-300 dark:hover:border-zinc-500 transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          {/* Learning Section */}
          <Section title="What I'm Currently Learning">
            <ul className="space-y-2 text-[1rem] text-zinc-600 dark:text-zinc-400">
              <li className="group flex items-start space-x-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200">
                <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-zinc-400 group-hover:bg-zinc-600 dark:group-hover:bg-zinc-300 transition-colors duration-200"></span>
                <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200">Advanced Machine Learning & Deep Learning</span>
              </li>
              <li className="group flex items-start space-x-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200">
                <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-zinc-400 group-hover:bg-zinc-600 dark:group-hover:bg-zinc-300 transition-colors duration-200"></span>
                <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200">Cloud Computing (AWS/GCP)</span>
              </li>
              <li className="group flex items-start space-x-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200">
                <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-zinc-400 group-hover:bg-zinc-600 dark:group-hover:bg-zinc-300 transition-colors duration-200"></span>
                <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200">Advanced UI/UX Design Principles</span>
              </li>
            </ul>
          </Section>

          {/* Contact Section */}
          <Section title="Let's Connect">
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              I'm always interested in discussing new opportunities, collaborating on projects, or just having a chat about data science and technology.
            </p>
          </Section>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
            <a 
              href="https://github.com/san7mr" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-white dark:hover:bg-zinc-800/90 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://medium.com/@sanjay77mr" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-white dark:hover:bg-zinc-800/90 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-200"
              aria-label="Medium"
            >
              <BookOpen size={20} />
            </a>
            <a 
              href="mailto:sanjay77mr@gmail.com" 
              className="p-2.5 rounded-full hover:bg-white dark:hover:bg-zinc-800/90 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;