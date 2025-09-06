import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTypescript, SiDjango, SiMongodb } from 'react-icons/si';

const ProjectsContainer = styled.section`
  padding: 8rem 0;
  background: #0f172a;
  color: #f8fafc;
  width: 100vw;
  margin: 0;
  
  & > * {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #f8fafc;
  position: relative;
  display: inline-block;
  left: 50%;
  text-align: left;
  transform: translateX(-50%);
 
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
    border-radius: 2px;
  }
    @media (max-width: 768px) {
      left: 0;
      transform: translateX(0);
    }
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
  color: #94a3b8;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

const ProjectCard = styled(motion.div)`
  background: #1e293b;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7));
    z-index: 1;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 1rem;
  color: #f8fafc;
`;

const ProjectDescription = styled.p`
  color: #94a3b8;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.6;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0;
  list-style: none;
`;

const TechItem = styled.li`
  background: rgba(99, 102, 241, 0.1);
  color: #818cf8;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #f8fafc;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #00dbde;
  }
  
  svg {
    font-size: 1.2rem;
  }
`;

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Application E-commerce",
      description: "Une plateforme e-commerce complète avec panier, authentification et paiement en ligne. Développée avec MERN Stack (MongoDB, Express, React, Node.js).",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      github: "#",
      demo: "#",
      icon: <FaReact />
    },
    {
      id: 2,
      title: "Réseau Social",
      description: "Un réseau social moderne avec partage de publications, commentaires et messagerie en temps réel. Construit avec Django et React.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      technologies: ["Django", "React", "PostgreSQL", "WebSockets", "Docker"],
      github: "#",
      demo: "#",
      icon: <FaPython />
    },
    {
      id: 3,
      title: "Application de Gestion de Tâches",
      description: "Une application de gestion de tâches intuitive avec synchronisation en temps réel et interface utilisateur réactive. Développée avec TypeScript et Next.js.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Firebase"],
      github: "#",
      demo: "#",
      icon: <SiTypescript />
    }
  ]);

  const getTechIcon = (tech) => {
    const techIcons = {
      'React': <FaReact />,
      'Node.js': <FaNodeJs />,
      'TypeScript': <SiTypescript />,
      'Django': <SiDjango />,
      'MongoDB': <SiMongodb />,
      'Python': <FaPython />
    };
    
    return techIcons[tech] || null;
  };

  return (
    <ProjectsContainer id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Mes Projets
      </SectionTitle>
      
      <SectionSubtitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Découvrez une sélection de mes projets récents. Chaque projet représente un défi unique et une opportunité d'apprentissage.
      </SectionSubtitle>
      
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectImage>
              <img src={project.image} alt={project.title} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <TechList>
                {project.technologies.map((tech, i) => (
                  <TechItem key={i}>
                    {getTechIcon(tech) || null} {tech}
                  </TechItem>
                ))}
              </TechList>
              
              <ProjectLinks>
                <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                  <FiGithub /> Code Source
                </ProjectLink>
                <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink /> Voir le Projet
                </ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
