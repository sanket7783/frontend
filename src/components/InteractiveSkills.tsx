import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Skills as SkillsType } from '../types';

interface InteractiveSkillsProps {
  skills: SkillsType | null;
  loading: boolean;
}

const InteractiveSkills: React.FC<InteractiveSkillsProps> = ({ skills, loading }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('languages');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  if (loading) {
    return (
      <section id="skills" className="section-padding">
        <div className="container-custom">
          <div className="animate-pulse">
            <div className="h-8 bg-secondary-200 dark:bg-secondary-700 rounded w-1/4 mx-auto mb-8"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-32 bg-secondary-200 dark:bg-secondary-700 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!skills) return null;

  const skillCategories = [
    { key: 'languages', title: 'Programming Languages', icon: '💻' },
    { key: 'frameworks', title: 'Frameworks & Libraries', icon: '⚡' },
    { key: 'databases', title: 'Databases', icon: '🗄️' },
    { key: 'devops', title: 'DevOps & Tools', icon: '🔧' },
    { key: 'cloud', title: 'Cloud & Platforms', icon: '☁️' },
    { key: 'methodologies', title: 'Methodologies', icon: '📋' },
  ];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'experienced':
        return 'from-green-400 to-green-600';
      case 'intermediate':
        return 'from-yellow-400 to-yellow-600';
      case 'beginner':
        return 'from-red-400 to-red-600';
      default:
        return 'from-secondary-400 to-secondary-600';
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level.toLowerCase()) {
      case 'experienced':
        return 'w-full';
      case 'intermediate':
        return 'w-2/3';
      case 'beginner':
        return 'w-1/3';
      default:
        return 'w-1/2';
    }
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-600'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skills[selectedCategory as keyof SkillsType]?.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="card p-6 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {skill.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getLevelColor(skill.level)} text-white`}>
                    {skill.level}
                  </span>
                </div>
                
                <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2 mb-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${getLevelColor(skill.level)}`}
                    initial={{ width: 0 }}
                    animate={{ width: getLevelWidth(skill.level).replace('w-', '').replace('full', '100%').replace('2/3', '66.67%').replace('1/3', '33.33%').replace('1/2', '50%') + '%' }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>

                <AnimatePresence>
                  {hoveredSkill === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="mt-3 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg"
                    >
                      <p className="text-sm text-secondary-600 dark:text-secondary-300">
                        {skill.level === 'Experienced' && 'Extensive experience with advanced features and best practices'}
                        {skill.level === 'Intermediate' && 'Good understanding with practical project experience'}
                        {skill.level === 'Beginner' && 'Basic knowledge with learning in progress'}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
              Technical Expertise
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto leading-relaxed">
              With over 5 years of experience in software development, I specialize in building scalable applications 
              using modern technologies. My expertise spans from backend development with Spring Boot and Java to 
              frontend technologies and DevOps practices.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">5+</div>
                <div className="text-secondary-600 dark:text-secondary-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">15+</div>
                <div className="text-secondary-600 dark:text-secondary-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">20+</div>
                <div className="text-secondary-600 dark:text-secondary-400">Projects</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveSkills; 