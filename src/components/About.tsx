import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Profile } from '../types';

interface AboutProps {
  profile: Profile | null;
}

const About: React.FC<AboutProps> = ({ profile }) => {
  if (!profile) return null;

  return (
    <section id="about" className="section-padding bg-secondary-50 dark:bg-secondary-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-400 to-accent-500 rounded-full flex items-center justify-center text-white text-6xl font-bold">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">
              {profile.name}
            </h3>
            <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
              {profile.title}
            </p>
            <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
              {profile.summary}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="text-primary-600 dark:text-primary-400" size={20} />
                <span className="text-secondary-700 dark:text-secondary-300">{profile.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary-600 dark:text-primary-400" size={20} />
                <span className="text-secondary-700 dark:text-secondary-300">{profile.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-primary-600 dark:text-primary-400" size={20} />
                <span className="text-secondary-700 dark:text-secondary-300">{profile.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary-800 dark:bg-secondary-700 text-white rounded-full hover:bg-secondary-900 dark:hover:bg-secondary-600 transition-colors duration-200"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 