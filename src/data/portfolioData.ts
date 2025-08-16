import { Profile, Experience, Project, Skills, Education } from '../types';

export const portfolioData = {
  profile: {
    name: "Sanket Hambir",
    title: "Senior Associate (Java)",
    email: "sanket.hambir.77@gmail.com",
    phone: "7038045359",
    location: "Pune, India",
    summary: "Dedicated Software Developer with a background in developing custom applications. Skilled in system integration, application performance optimization, and database development.",
    linkedin: "https://linkedin.com/in/sanket-hambir",
    github: "https://github.com/sanket-hambir"
  },

  experience: [
    {
      company: "Synechron",
      position: "Senior Associate",
      duration: "Jul 2023 - Present",
      location: "Pune",
      description: "Developed and maintained banking applications focused on OTC stocks using Kafka, MQ, Oracle DB, OpenShift, and Spring Boot microservices.",
      achievements: [
        "Created REST APIs with Spring Boot to revamp and modernize legacy APIs",
        "Collaborated for jenkins pipeline modification and deployment",
        "Supported DevOps in upgrading server security certificates and managing vulnerabilities"
      ]
    },
    {
      company: "Pubmatic",
      position: "Software Engineer",
      duration: "Jun 2020 - Jul 2023",
      location: "Pune",
      description: "Designed and developed REST APIs using Spring Boot, MySQL, MyBatis, and IntelliJ.",
      achievements: [
        "Migrated CI jobs to Dockerized Jenkins environments for improved efficiency",
        "Optimized MySQL queries, including indexing and complex joins, to enhance performance"
      ]
    },
    {
      company: "Pubmatic (Contract with Mymo)",
      position: "SDET",
      duration: "Sep 2019 - Jun 2020",
      location: "Pune",
      description: "Developed an automation framework for data ingestion and data warehousing tools.",
      achievements: [
        "Designed and implemented a monitoring system for big data environments"
      ]
    },
    {
      company: "Incedo Inc.",
      position: "Software Engineer Trainee",
      duration: "Aug 2018 - Sep 2019",
      location: "Pune",
      description: "Contributed to cybersecurity projects leveraging Python, Django, AWS, and JavaScript.",
      achievements: [
        "Contributed to security compliance plugin for cloud infrastructure monitoring"
      ]
    }
  ],

  projects: [
    {
      name: "Trade Ingestion Application",
      technologies: ["Java", "Spring Boot", "Kafka", "Oracle SQL"],
      description: "Contributed to an application with multiple components focused on ingesting OTC trade data from various clearing houses using MQ and Spring Boot applications.",
      achievements: [
        "Implemented REST APIs that consume data from Kafka topics, process it, and then post it to the database and additional Kafka topics",
        "Managed the security certificate upgrade for the project"
      ]
    },
    {
      name: "Trade Billing Application",
      technologies: ["Java", "Spring Boot", "Kafka", "Oracle SQL"],
      description: "Developed and maintained an application that processes data from an ingestion application to calculate client charges.",
      achievements: [
        "Resolved production bugs and implemented enhancements",
        "Addressed and remediated security vulnerabilities in Java code"
      ]
    },
    {
      name: "Prebid Modules",
      technologies: ["Spring Boot", "REST API", "MySQL", "Git"],
      description: "Led a project that enabled users to access new features before official application support, using Prebid modules integrated with custom code snippets via Java APIs.",
      achievements: [
        "Managed the project end-to-end, delivering on time and meeting expectations",
        "Facilitated early user testing of features, allowing for feedback prior to official release"
      ]
    },
    {
      name: "Migration of Jenkins jobs to Docker",
      technologies: ["Docker", "Linux", "Jenkins", "Kubernetes"],
      description: "Migrated the deployment pipeline to Docker and Kubernetes using Groovy.",
      achievements: [
        "Resulted in reduced failures and eliminating deployment dependencies"
      ]
    },
    {
      name: "Profile Management API improvement",
      technologies: ["Spring Boot", "REST API", "MySQL", "Git"],
      description: "Enhanced API functionality by implementing pagination for existing API responses and optimizing data retrieval from seven different tables.",
      achievements: [
        "Added search and sort capabilities, improving user navigation and efficiency"
      ]
    },
    {
      name: "AutoRefresh ads",
      technologies: ["Spring Boot", "REST API", "MySQL", "Git"],
      description: "Implemented REST API changes to support a feature allowing users to initiate a new auction if they spent significant time on the webpage."
    },
    {
      name: "Floor Feature",
      technologies: ["Spring Boot", "REST API", "MySQL", "Git"],
      description: "Implemented REST API changes to integrate configurations for the floor feature wrapper binary used in ad auctions.",
      achievements: [
        "Enhanced user monetization by improving ad auctions, rejecting low-price bids through the floor feature"
      ]
    },
    {
      name: "Big Data Automation frameworks",
      technologies: ["Python", "Scala", "Spark", "Kafka"],
      description: "Developed and maintained big data automation frameworks to validate ETL process changes.",
      achievements: [
        "Managed and supported a proprietary data warehouse system"
      ]
    },
    {
      name: "Master Monitoring Service",
      technologies: ["Python", "Prometheus", "Java", "Grafana"],
      description: "Developed a monitoring service that utilizes daemon programs to track the status of running processes on deployed servers and pushes the data to Prometheus Gateway.",
      achievements: [
        "Integrated with Grafana to periodically fetch the data from Prometheus, generating visualizations and setting up alerts for potential issues"
      ]
    },
    {
      name: "Cloud Management Assessor (CMA)",
      technologies: ["Python", "Django", "AWS", "Microservice", "Git"],
      description: "Contributed as a Python developer to a security compliance plugin used for monitoring an organization's cloud infrastructure.",
      achievements: [
        "The plugin scans system configurations via API endpoints, assesses security levels, and provides recommendations for enhancing security"
      ]
    },
    {
      name: "Common Messaging Service",
      technologies: ["Python", "Django", "AWS", "Microservice", "Git"],
      description: "Contributed as a Python developer to a Django-based microservice application designed for sharing information between microservices and stakeholders.",
      achievements: [
        "Took ownership of a feature that allows blocking stakeholders based on their reception behavior"
      ]
    }
  ],

  skills: {
    languages: [
      { name: "Java", level: "Experienced" },
      { name: "Python", level: "Experienced" },
      { name: "JavaScript", level: "Intermediate" }
    ],
    frameworks: [
      { name: "Spring Boot", level: "Experienced" },
      { name: "Django", level: "Experienced" },
      { name: "React", level: "Intermediate" }
    ],
    databases: [
      { name: "MySQL", level: "Experienced" },
      { name: "Oracle SQL", level: "Experienced" },
      { name: "H2", level: "Intermediate" }
    ],
    devops: [
      { name: "Jenkins", level: "Experienced" },
      { name: "Docker", level: "Experienced" },
      { name: "Kubernetes", level: "Intermediate" },
      { name: "Git", level: "Experienced" },
      { name: "OpenShift", level: "Experienced" }
    ],
    cloud: [
      { name: "AWS", level: "Intermediate" },
      { name: "Kafka", level: "Experienced" },
      { name: "Prometheus", level: "Intermediate" },
      { name: "Grafana", level: "Intermediate" }
    ],
    methodologies: [
      { name: "Agile", level: "Experienced" },
      { name: "Microservices", level: "Experienced" },
      { name: "REST APIs", level: "Experienced" }
    ]
  },

  education: [
    {
      degree: "B.E. Computer Science",
      institution: "Gharda Institute of Technology",
      duration: "Jun 2014 - Jun 2018",
      gpa: "7.8"
    },
    {
      certification: "ElitX 2020",
      institution: "Scaler",
      duration: "Jun 2020"
    }
  ]
}; 