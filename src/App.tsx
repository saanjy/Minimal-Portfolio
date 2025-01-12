import React from 'react';
import { Github, Moon, Sun, BookOpen } from 'lucide-react';
import { useTheme } from './ThemeProvider';

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
          <div className="space-y-2">
            <h1 className="text-[2.5rem] leading-tight tracking-tight font-medium">
              Hi, i am Sanjay!
            </h1>
            <div className="space-y-1 text-[1rem] text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>Founder, Student, Data Analyst, Machine Learning Enthusiast, and Networking.</p>
              <p>Passionate about solving problems with data and building intelligent systems.</p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-[1.65rem] tracking-tight">Experience</h2>
            <ul className="space-y-2 text-[1rem] text-zinc-600 dark:text-zinc-400">
              <li className="group flex items-start space-x-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200">
                <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-zinc-400 group-hover:bg-zinc-600 dark:group-hover:bg-zinc-300 transition-colors duration-200"></span>
                <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200">Intern @Skillcraft</span>
              </li>
              <li className="group flex items-start space-x-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200">
                <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-zinc-400 group-hover:bg-zinc-600 dark:group-hover:bg-zinc-300 transition-colors duration-200"></span>
                <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200">Design Lead @Chipset</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-[1.65rem] tracking-tight">Technologies & Tools</h2>
            
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
                <span className="px-3 py-1 text-[0.9rem] rounded-full bg-white dark:bg-zinc-800/90 text-zinc-600 dark:text-zinc-400 shadow-sm hover:shadow-md hover:bg-zinc-50 dark:hover:bg-zinc-700/90 transition-all duration-200">
                  React
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-[1rem] text-zinc-600 dark:text-zinc-400">Tools & Databases:</h3>
              <div className="flex flex-wrap gap-1.5">
                {['Git', 'Mysql', 'Supabase'].map((tool) => (
                  <span 
                    key={tool}
                    className="px-3 py-1 text-[0.9rem] rounded-full bg-white dark:bg-zinc-800/90 text-zinc-600 dark:text-zinc-400 shadow-sm hover:shadow-md hover:bg-zinc-50 dark:hover:bg-zinc-700/90 transition-all duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-[1.65rem] tracking-tight">What i'm currently learning</h2>
            <ul className="space-y-2 text-[1rem] text-zinc-600 dark:text-zinc-400">
              <li className="group flex items-start space-x-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200">
                <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-zinc-400 group-hover:bg-zinc-600 dark:group-hover:bg-zinc-300 transition-colors duration-200"></span>
                <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200">AI/ML</span>
              </li>
              <li className="group flex items-start space-x-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200">
                <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-zinc-400 group-hover:bg-zinc-600 dark:group-hover:bg-zinc-300 transition-colors duration-200"></span>
                <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200">UI/UX Design</span>
              </li>
            </ul>
          </div>

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
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;