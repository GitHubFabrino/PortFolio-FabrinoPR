import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { 
  FaCode, FaMobile, FaServer, FaReact, FaNodeJs, FaJs, FaHtml5, 
  FaCss3Alt, FaGitAlt, FaGithub, FaFigma, FaNpm, FaSass, FaBootstrap, FaLaravel,    
  FaPhp, FaPython, FaLinux, FaWindows, FaDocker, FaPaintBrush
} from 'react-icons/fa';
import { SiTypescript, SiRedux, SiMongodb, SiExpress, SiStyledcomponents, SiJest
    , SiWordpress, SiPrestashop, SiDrupal, SiStrapi, SiFlutter, SiFirebase, SiMysql, SiPostgresql, SiSqlite
 } from 'react-icons/si';
 import { MdArchitecture, MdApi, MdOutlineDashboardCustomize } from 'react-icons/md';
 import { FaProjectDiagram } from 'react-icons/fa';
 import { TbTopologyStar3 } from 'react-icons/tb';

const AboutContainer = styled.section`
  padding: 8rem 0 12rem;
  background: #f8fafc;
  color: #1e293b;
  width: 100%;
  margin: 0;
  position: relative;
  overflow: hidden;
`;

const TechSliderContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem 0;
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.05);
  z-index: 1;
`;

const SliderTitle = styled.h4`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #1e293b;
  font-size: 1.25rem;
`;

const TechItem = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    
    svg {
      color: #6366f1;
    }
  }
  
  svg {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: #64748b;
    transition: all 0.3s ease;
  }
  
  span {
    font-size: 0.8rem;
    color: #64748b;
    font-weight: 500;
    text-align: center;
  }
`;

const CustomSlider = styled(Slider)`
  .slick-slide > div {
    display: flex;
    justify-content: center;
  }
  
  .slick-prev:before,
  .slick-next:before {
    color: #6366f1;
  }
  
  .slick-dots li button:before {
    color: #6366f1;
  }
  
  .slick-dots li.slick-active button:before {
    color: #6366f1;
  }

  @media (max-width: 768px) {
    .slick-dots {
      display: none !important;
    }
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-20%);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100vw;
    height: 4px;
    background: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
    border-radius: 2px;
  }
@media (max-width: 768px) {
    left: 0;
    transform: translateX(-20%);
    width: 100%;
  }
`;

const Content = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0,219,222,0.2) 0%, rgba(252,0,255,0.2) 100%);
    z-index: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const TextContent = styled.div`
  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #1e293b;
    @media (max-width: 768px) {
      font-size: 1.5rem;
      padding: 0 1rem;
    }
  }
  
  p {
    color: #64748b;
    line-height: 1.8;
    margin-bottom: 2rem;
     @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0 1rem;
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: auto;
@media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1rem;
    width: 80%;
    margin: 0 auto;
  }
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
  
  svg {
    font-size: 1.5rem;
    margin-right: 1rem;
    color: #6366f1;
  }
  
  div {
    h4 {
      margin: 0;
      color: #1e293b;
    }
    
    p {
      margin: 0.25rem 0 0;
      font-size: 0.9rem;
      color: #64748b;
    }
  }
`;

export const StackContainer = styled.div`
  padding: 3rem 2rem;
  background: linear-gradient(to bottom,rgb(249, 241, 246), #e2e8f0);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

export const StackGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const StackBox = styled.div`
  background-color: #0f172a;
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 45%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
export const StackTitle = styled(motion.h3)`
  font-size: 2.75rem;
  margin-bottom: 2rem;
  color: #1e293b;
  text-align: center;
  font-weight: 700;
`;
export const StackName = styled(motion.h4)`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #f1f5f9;
  border-left: 4px solid #38bdf8;
  padding-left: 0.75rem;
  font-weight: 600;
`;
export const TechItem2 = styled(motion.div)`
  background-color: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  padding: 1rem;
  width: 100px;
  height: 100px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    border-color: #38bdf8;
  }

  svg {
    font-size: 2rem;
    color: #38bdf8;
  }

  span {
    font-size: 0.85rem;
    color: #1e293b;
    font-weight: 500;
  }
`;


export const StackSection = styled.div`
  margin-bottom: 2rem;
`;





const About = () => {
  const skills = [
    {
      icon: <FaCode />,
      title: "Développement Frontend",
      description: "React, Vue.js, HTML5, CSS3, JavaScript/TypeScript"
    },
    {
      icon: <FaServer />,
      title: "Développement Backend",
      description: "Node.js, Express, Python, Django, Bases de données"
    },
    {
      icon: <FaMobile />,
      title: "Mobile & Responsive",
      description: "Applications React Native, Design adaptatif"
    }
  ];
  const languages = [
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <FaPhp />, name: 'PHP' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' }
  ];

  const frontEndFrameworks = [
    { icon: <FaReact />, name: 'React' },
    { icon: <SiRedux />, name: 'Redux' },
    { icon: <FaBootstrap />, name: 'Bootstrap' },
    { icon: <FaSass />, name: 'Sass' },
    { icon: <SiStyledcomponents />, name: 'Styled Components' }
  ];

  const designTools = [
    { icon: <FaFigma />, name: 'Figma' },
    { icon: <FaPaintBrush />, name: 'Canvas' }

  ];

  const backEndFrameworks = [
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiExpress />, name: 'Express' },
    { icon: <FaLaravel />, name: 'Laravel' }
  ];

  const mobileTech = [
    { icon: <FaReact />, name: 'React Native' },
    { icon: <SiFlutter />, name: 'Flutter' }
  ];

  const cms = [
    { icon: <SiWordpress />, name: 'WordPress' },
    { icon: <SiPrestashop />, name: 'PrestaShop' },
    { icon: <SiDrupal />, name: 'Drupal' },
    { icon: <SiStrapi />, name: 'Strapi' }
  ];

  const tools = [
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <FaGithub />, name: 'GitHub' },
    { icon: <FaNpm />, name: 'NPM' }
  ];

  const architectures = [
    { icon: <MdArchitecture />, name: 'MVC' },
    { icon: <MdApi />, name: 'REST API' },
    { icon: <FaProjectDiagram />, name: 'Microservices' },
    { icon: <TbTopologyStar3 />, name: 'Monorepo' },
    { icon: <MdOutlineDashboardCustomize />, name: 'SPA' }
  ];

  const databases = [
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiSqlite />, name: 'SQLite' },
    { icon: <SiFirebase />, name: 'Firebase' }
  ];

  const techStack = [
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <SiRedux />, name: 'Redux' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiExpress />, name: 'Express' },
    { icon: <SiStyledcomponents />, name: 'Styled Components' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <FaGithub />, name: 'GitHub' },
    { icon: <FaPhp />, name: 'Php' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaLaravel />, name: 'Laravel' },

    { icon: <FaFigma />, name: 'Figma' },
    { icon: <FaNpm />, name: 'NPM' },
    { icon: <FaSass />, name: 'Sass' },
    { icon: <FaBootstrap />, name: 'Bootstrap' },
    { icon: <SiJest />, name: 'Jest' }
  ];
  const operatingSystems = [
    { icon: <FaLinux />, name: 'Linux' },
    { icon: <FaWindows />, name: 'Windows' }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <AboutContainer id="about">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        À Propos de Moi
      </SectionTitle>
      
      <Content>
        <ImageContainer
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="À propos de moi" 
          />
        </ImageContainer>
        
        <TextContent>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Développeur Passionné Créant des Expériences Numériques Exceptionnelles
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Je suis un développeur full-stack passionné par la création d'applications web modernes et performantes. Avec plus de 5 ans d'expérience, j'ai travaillé sur divers projets allant des sites vitrines aux applications web complexes.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ma philosophie est de créer des solutions élégantes qui résolvent des problèmes complexes tout en offrant une expérience utilisateur exceptionnelle.
          </motion.p>

         
          
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {skill.icon}
                <div>
                  <h4>{skill.title}</h4>
                  <p>{skill.description}</p>
                </div>
              </SkillItem>
            ))}
          </SkillsGrid>
        </TextContent>
      </Content>
      <StackContainer id="competance">
               
                <StackBox>
                <StackSection>
                    <StackName>Langages</StackName>
                    <StackGrid>
                    {languages.map((tech, index) => (
                        <TechItem2
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        >
                        {tech.icon}
                        <span>{tech.name}</span>
                        </TechItem2>
                    ))}
                    </StackGrid>
                </StackSection>


                <StackSection>
                    <StackName>Frontend</StackName>
                    <StackGrid>
                    {frontEndFrameworks.map((tech, index) => (
                        <TechItem2
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        >
                        {tech.icon}
                        <span>{tech.name}</span>
                        </TechItem2>
                    ))}
                    </StackGrid>
                </StackSection>

                <StackSection>
                    <StackName>Mobile</StackName>
                    <StackGrid>
                    {mobileTech.map((tech, index) => (
                        <TechItem2 key={index}>
                        {tech.icon}
                        <span>{tech.name}</span>
                        </TechItem2>
                    ))}
                    </StackGrid>
                </StackSection>

                <StackSection>
                    <StackName>Backend</StackName>
                    <StackGrid>
                    {backEndFrameworks.map((tech, index) => (
                        <TechItem2 key={index}>
                        {tech.icon}
                        <span>{tech.name}</span>
                        </TechItem2>
                    ))}
                    </StackGrid>
                </StackSection>
                <StackSection>
                    <StackName>Base de données</StackName>
                    <StackGrid>
                    {databases.map((tech, index) => (
                        <TechItem2 key={index}>
                        {tech.icon}
                        <span>{tech.name}</span>
                        </TechItem2>
                    ))}
                    </StackGrid>
                </StackSection>
                </StackBox>
               <StackBox>
               <StackSection>
                    <StackName>Design</StackName>
                    <StackGrid>
                    {designTools.map((tech, index) => (
                        <TechItem2 key={index}>
                        {tech.icon}
                        <span>{tech.name}</span>
                        </TechItem2>
                    ))}
                    </StackGrid>
                </StackSection>
                <StackSection>
                    <StackName>Outils</StackName>
                    <StackGrid>
                    {tools.map((tech, index) => (
                        <TechItem2
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        >
                        {tech.icon}
                        <span>{tech.name}</span>
                        </TechItem2>
                    ))}
                    </StackGrid>
                </StackSection>

                

                <StackSection>
                    <StackName>Architectures</StackName>
                    <StackGrid>
                    {architectures.map((tech, index) => (
                        <TechItem2
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        >
                        {tech.icon}
                        <span>{tech.name}</span>
                        </TechItem2>
                    ))}
                    </StackGrid>
                </StackSection>

                <StackSection>
                    <StackName>CMS</StackName>
                    <StackGrid>
                    {cms.map((tech, index) => (
                        <TechItem2
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        >
                        {tech.icon}
                        <span>{tech.name}</span>
                        </TechItem2>
                    ))}
                    </StackGrid>
                </StackSection>

                <StackSection>
                    <StackName>OS</StackName>
                    <StackGrid>
                    {operatingSystems.map((tech, index) => (
                        <TechItem2
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        >
                        {tech.icon}
                        <span>{tech.name}</span>
                        </TechItem2>
                    ))}
                    </StackGrid>
                </StackSection>
               </StackBox>

                </StackContainer>

      
      <TechSliderContainer>
        {/* <SliderTitle>Technologies que j'utilise</SliderTitle> */}
        <div className="container">
          <CustomSlider {...sliderSettings}>
            {techStack.map((tech, index) => (
              <TechItem key={index}>
                {tech.icon}
                <span>{tech.name}</span>
              </TechItem>
            ))}
          </CustomSlider>
        </div>
      </TechSliderContainer>
    </AboutContainer>
  );
};

export default About;
