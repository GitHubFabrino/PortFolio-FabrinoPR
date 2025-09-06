import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #0f172a;
  color: #f8fafc;
  padding: 4rem 0 2rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 0;
  
  & > * {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #f8fafc;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 50px;
      height: 3px;
      background: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
      border-radius: 2px;
    }
  }
  
  p {
    color: #94a3b8;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: 0.8rem;
      
      a {
        color: #94a3b8;
        text-decoration: none;
        transition: color 0.3s ease, padding-left 0.3s ease;
        display: block;
        
        &:hover {
          color: #00dbde;
          padding-left: 8px;
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  
  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f8fafc;
    transition: all 0.3s ease;
    
    &:hover {
      background: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  font-size: 0.9rem;
  
  a {
    color: #00dbde;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: #fc00ff;
    }
  }
  
  svg {
    color: #ef4444;
    margin: 0 0.3rem;
    vertical-align: middle;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { title: 'Accueil', url: '#' },
    { title: 'À Propos', url: '#about' },
    { title: 'Projets', url: '#projects' },
    { title: 'Compétences', url: '#skills' },
    { title: 'Contact', url: '#contact' }
  ];
  
  const contactInfo = [
    { text: 'rakotoharilalainafabrino@gmail.com', url: 'mailto:rakotoharilalainafabrino@gmail.com' },
    { text: '+261 34 05 85 428', url: 'tel:+261340585428' },
    { text: 'Antsiranana, Madagascar', url: '#' }
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>À Propos</h3>
          <p>
            Développeur passionné par la création d'expériences web modernes et performantes. 
            Je mets mon expertise au service de vos projets pour des résultats exceptionnels.
          </p>
          <SocialLinks>
            <motion.a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter />
            </motion.a>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3>Liens Rapides</h3>
          <ul>
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </FooterSection>
        
        <FooterSection
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Contact</h3>
          <ul>
            {contactInfo.map((info, index) => (
              <li key={index}>
                <a href={info.url}>
                  {info.text}
                </a>
              </li>
            ))}
          </ul>
        </FooterSection>
      </FooterContent>
      
      <Copyright
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        &copy; {currentYear} Tous droits réservés. Développé avec <FaHeart /> par 
        <a href="#" target="_blank" rel="noopener noreferrer"> Fabrino P.R</a>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
