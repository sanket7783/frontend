import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

interface ExperienceProps {
  experience: ExperienceType[];
  loading: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ experience, loading }) => {
  if (loading) {
    return (
      <section id="experience" className="section-padding">
        <div className="container-custom">
          <div className="animate-pulse">
            <div className="h-8 bg-secondary-200 dark:bg-secondary-700 rounded w-1/4 mx-auto mb-8"></div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 bg-secondary-200 dark:bg-secondary-700 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-secondary-200 dark:bg-secondary-700"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-secondary-900"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="card p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Building className="text-primary-600 dark:text-primary-400" size={20} />
                      <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                        {exp.company}
                      </h3>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                      {exp.position}
                    </h4>
                    
                    <div className="flex items-center space-x-4 text-sm text-secondary-600 dark:text-secondary-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-secondary-700 dark:text-secondary-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div>
                        <h5 className="font-semibold text-secondary-900 dark:text-white mb-2">
                          Key Achievements:
                        </h5>
                        <ul className="list-disc list-inside space-y-1 text-sm text-secondary-600 dark:text-secondary-400">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 