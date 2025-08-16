import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import InteractiveSkills from './components/InteractiveSkills';
import Contact from './components/Contact';
import { usePortfolio } from './hooks/usePortfolio';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { profile, experience, projects, skills, education, loading, error } = usePortfolio();

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (loading.profile) {
    return (
      <div className="min-h-screen bg-white dark:bg-secondary-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="App bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={darkMode ? 'dark' : 'light'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Hero profile={profile} />
          <About profile={profile} />
          <Experience experience={experience} loading={loading.experience} />
          <Projects projects={projects} loading={loading.projects} />
          <InteractiveSkills skills={skills} loading={loading.skills} />
          <Contact />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App; 