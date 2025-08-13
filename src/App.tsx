import React from 'react';
import { Github, Moon, Sun, BookOpen, Mail, MapPin, Calendar } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { ProjectCard } from './components/ProjectCard';
import { Section } from './components/Section';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen font-sans ${theme === 'dark' ? 'bg-dark text-zinc-100' : 'bg-zinc-50 text-zinc-900'} transition-colors duration-300`}>
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 p-2.5 rounded-full bg-white/90 dark:bg-zinc-800/90 shadow-sm hover:shadow-md transition-all duration-200"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <main className="container mx-auto px-6 py-16">
        <section className="max-w-2xl mx-auto space-y-10">
          {/* Hero Section */}
          <div className="space-y-2">
            <h1 className="text-[2.5rem] leading-tight tracking-tight font-medium">
              Hi, i am Sanjay!
            </h1>
            <div className="space-y-1 text-[1rem] text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>Founder, Student, Data Analyst, Machine Learning Enthusiast, and Networking.</p>
              <p>Passionate about solving problems with data and building intelligent systems.</p>
            </div>
            
            {/* Quick Info */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-1.5">
                <MapPin size={14} />
                <span>India</span>
              </div>
              <div className="flex items-center gap-1.5">
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
                title="Data Analytics Dashboard"
                description="Interactive dashboard for visualizing sales data with real-time analytics, built with Python and Streamlit. Features include trend analysis, forecasting, and automated reporting."
                technologies={['Python', 'Streamlit', 'Pandas', 'Plotly']}
                githubUrl="https://github.com/san7mr"
                imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
              />
              
              <ProjectCard
                title="ML Prediction Model"
                description="Machine learning model for predicting customer behavior using scikit-learn. Achieved 92% accuracy with ensemble methods and feature engineering."
                technologies={['Python', 'Scikit-learn', 'NumPy', 'Matplotlib']}
                githubUrl="https://github.com/san7mr"
                imageUrl="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop"
              />
              
              <ProjectCard
                title="Portfolio Website"
                description="Responsive portfolio website built with React and TypeScript, featuring dark mode, smooth animations, and modern design principles."
                technologies={['React', 'TypeScript', 'Tailwind CSS']}
                githubUrl="https://github.com/san7mr"
                liveUrl="#"
                imageUrl="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop"
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
            
            <div className="space-y-2">
              <h3 className="text-[1rem] text-zinc-600 dark:text-zinc-400">Languages:</h3>
              <div className="flex flex-wrap gap-1.5">
                {['Html', 'Css', 'Javascript', 'Python'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-[0.9rem] rounded-full bg-white dark:bg-zinc-800/90 text-zinc-600 dark:text-zinc-400 shadow-sm hover:shadow-md hover:bg-zinc-50 dark:hover:bg-zinc-700/90 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-[1rem] text-zinc-600 dark:text-zinc-400">Frameworks:</h3>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'Streamlit', 'Flask'].map((framework) => (
                  <span 
                    key={framework}
                    className="px-3 py-1 text-[0.9rem] rounded-full bg-white dark:bg-zinc-800/90 text-zinc-600 dark:text-zinc-400 shadow-sm hover:shadow-md hover:bg-zinc-50 dark:hover:bg-zinc-700/90 transition-all duration-200"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-[1rem] text-zinc-600 dark:text-zinc-400">Tools & Databases:</h3>
              <div className="flex flex-wrap gap-1.5">
                {['Git', 'MySQL', 'Supabase', 'Pandas', 'NumPy', 'Scikit-learn'].map((tool) => (
                  <span 
                    key={tool}
                    className="px-3 py-1 text-[0.9rem] rounded-full bg-white dark:bg-zinc-800/90 text-zinc-600 dark:text-zinc-400 shadow-sm hover:shadow-md hover:bg-zinc-50 dark:hover:bg-zinc-700/90 transition-all duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
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