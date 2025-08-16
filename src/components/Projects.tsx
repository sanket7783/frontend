import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Search, Filter } from 'lucide-react';
import { Project as ProjectType } from '../types';

interface ProjectsProps {
  projects: ProjectType[];
  loading: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ projects, loading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTechnology, setSelectedTechnology] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'technologies'>('name');

  // Get unique technologies for filter
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, [projects]);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects.filter(project => {
      const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTech = selectedTechnology === 'all' || 
                         project.technologies.includes(selectedTechnology);
      return matchesSearch && matchesTech;
    });

    // Sort projects
    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return b.technologies.length - a.technologies.length;
      }
    });

    return filtered;
  }, [projects, searchTerm, selectedTechnology, sortBy]);

  if (loading) {
    return (
      <section id="projects" className="section-padding bg-secondary-50 dark:bg-secondary-800">
        <div className="container-custom">
          <div className="animate-pulse">
            <div className="h-8 bg-secondary-200 dark:bg-secondary-700 rounded w-1/4 mx-auto mb-8"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-64 bg-secondary-200 dark:bg-secondary-700 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding bg-secondary-50 dark:bg-secondary-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-secondary-600 dark:text-secondary-300 mt-4 max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing various technologies and solutions
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-secondary-600 dark:text-secondary-400" />
              <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">Filter by:</span>
            </div>
            
            <select
              value={selectedTechnology}
              onChange={(e) => setSelectedTechnology(e.target.value)}
              className="px-4 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Technologies</option>
              {allTechnologies.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'technologies')}
              className="px-4 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500"
            >
              <option value="name">Sort by Name</option>
              <option value="technologies">Sort by Tech Stack</option>
            </select>
          </div>

          {/* Results Count */}
          <div className="text-center">
            <span className="text-sm text-secondary-600 dark:text-secondary-400">
              Showing {filteredProjects.length} of {projects.length} projects
            </span>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={`${searchTerm}-${selectedTechnology}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="card group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                        {project.name}
                      </h3>
                      <div className="flex space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        >
                          <ExternalLink size={16} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        >
                          <Github size={16} />
                        </motion.button>
                      </div>
                    </div>

                    <p className="text-secondary-600 dark:text-secondary-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.achievements && project.achievements.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-secondary-900 dark:text-white mb-2 text-sm">
                          Key Features:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-xs text-secondary-600 dark:text-secondary-400">
                          {project.achievements.slice(0, 3).map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-secondary-400 dark:text-secondary-500 text-lg">
                No projects found matching your criteria
              </div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTechnology('all');
                }}
                className="mt-4 btn-primary"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects; 