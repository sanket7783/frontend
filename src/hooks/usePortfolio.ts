import { useState, useEffect } from 'react';
import { Profile, Experience, Project, Skills, Education } from '../types';
import { portfolioData } from '../data/portfolioData';

export const usePortfolio = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skills | null>(null);
  const [education, setEducation] = useState<Education[]>([]);
  
  const [loading, setLoading] = useState({
    profile: true,
    experience: true,
    projects: true,
    skills: true,
    education: true,
  });
  
  const [error, setError] = useState<{
    profile: Error | null;
    experience: Error | null;
    projects: Error | null;
    skills: Error | null;
    education: Error | null;
  }>({
    profile: null,
    experience: null,
    projects: null,
    skills: null,
    education: null,
  });

  useEffect(() => {
    // Simulate loading delay for better UX
    const loadData = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setProfile(portfolioData.profile);
        setExperience(portfolioData.experience);
        setProjects(portfolioData.projects);
        setSkills(portfolioData.skills);
        setEducation(portfolioData.education);
        
        // Set all loading states to false
        setLoading({
          profile: false,
          experience: false,
          projects: false,
          skills: false,
          education: false,
        });
      } catch (err) {
        setError({
          profile: err as Error,
          experience: err as Error,
          projects: err as Error,
          skills: err as Error,
          education: err as Error,
        });
        
        setLoading({
          profile: false,
          experience: false,
          projects: false,
          skills: false,
          education: false,
        });
      }
    };

    loadData();
  }, []);

  const isLoading = Object.values(loading).some(Boolean);
  const hasError = Object.values(error).some(Boolean);

  return {
    profile,
    experience,
    projects,
    skills,
    education,
    loading,
    error,
    isLoading,
    hasError,
  };
}; 