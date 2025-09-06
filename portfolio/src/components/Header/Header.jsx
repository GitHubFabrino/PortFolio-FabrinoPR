import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaRocket, FaChevronDown, FaBars, FaTimes, FaHome, FaUser, FaCode, FaEnvelope as FaEnvelopeNav } from 'react-icons/fa';

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  overflow: hidden;
  left: 0;
  width: 100vw;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(motion.a)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  background: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`;

const NavLinks = styled(motion.ul)`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background: #0f172a;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease-in-out;
    z-index: 1001;
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(motion.a)`
  color: #e2e8f0;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00dbde;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1002;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HeaderContainer = styled.header`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 2rem;
  color: #fff;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  position: relative;
  overflow: hidden;
  margin: 0;
  padding-top: 80px;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, transparent 0%, rgba(15, 23, 42, 0.9) 100%);
    z-index: 1;
    pointer-events: none;
  }
  
  > * {
    position: relative;
    z-index: 2;
  }
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #a5b4fc;
  font-weight: 400;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #00dbde;
    transform: translateY(-3px);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a5b4fc;
  cursor: pointer;
  
  span {
    display: block;
    width: 2px;
    height: 50px;
    background: #a5b4fc;
    margin-top: 10px;
  }
    @media (max-width: 768px) {
      display: none;
    }
`;

const ProfileImage = styled(motion.div)`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 2rem;
  border: 5px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeaderContent = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
  gap: 4rem;
 
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const HeaderInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  
  @media (max-width: 992px) {
    align-items: center;
    text-align: center;
  }
    @media (max-width: 768px) {
      width: 100%;
    }
`;

const Messege = styled(motion.p)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  
  @media (max-width: 992px) {
    align-items: center;
    text-align: center;
  }
`;

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };


  return (
    <>
      <Navbar>
        <Logo href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          Portfolio
        </Logo>
        
        <MobileMenuButton 
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
        
        <NavLinks isOpen={isMenuOpen}>
          <NavItem>
            <NavLink 
              href="#" 
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHome /> Accueil
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#about" 
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUser /> À Propos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#projects" 
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCode /> Projets
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#competance" 
              onClick={(e) => { e.preventDefault(); scrollToSection('competance'); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket /> Competances
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelopeNav /> Contact
            </NavLink>
          </NavItem>
        </NavLinks>
      </Navbar>

      
      
      <HeaderContainer id="home">
        <HeaderContent>
          <ProfileImage 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" 
              alt="Profil" 
            />
          </ProfileImage>
          
          <HeaderInfo>
            <Name
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
              }}
            >
              Fabrino P.R
            </Name>
            
            <Title
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Développeur Full Stack
            </Title>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                maxWidth: '600px',
                margin: '0 auto 2rem',
                textAlign: 'left',
                padding: '0 1rem',
                fontSize: '1.1rem',
                lineHeight: '1.7',
                '@media (max-width: 992px)': {
                  textAlign: 'center',
                  fontSize: '1rem',
                  padding: '0 1.5rem'
                },
                '@media (max-width: 480px)': {
                  fontSize: '0.95rem',
                  padding: '0 1rem',
                  lineHeight: '1.6'
                }
              }}
            >
              Je conçois des expériences numériques immersives en combinant technologies modernes, design innovant et performance. Fort d'une année d'expérience en développement web et mobile, je transforme les idées en solutions élégantes et fonctionnelles.
            </motion.p>
            
         
            
            <SocialLinks
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <SocialIcon href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon href="mailto:votre@email.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
              </SocialIcon>
            </SocialLinks>
            
            
          </HeaderInfo>
          
        </HeaderContent>
        <ScrollIndicator
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ 
                y: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth'
                });
              }}
            >
              Défiler vers le bas
              <span></span>
  <FaChevronDown style={{ fontSize: '1.5rem', color: '#a5b4fc' }} />
            </ScrollIndicator>
      </HeaderContainer>
    </>
  );
};

export default Header;
