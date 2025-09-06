import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Styles globaux
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    color: #1e293b;
    background-color: #f8fafc;
    overflow-x: hidden;
    width: 100%;
    height: 100%; 
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  section {
    padding: 6rem 0;
    
    @media (max-width: 768px) {
      padding: 4rem 0;
    }
  }
  
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    position: relative;
    display: inline-block;
    left: 50%;
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
  }
`;

// Animation de transition entre les sections
const pageVariants = {
  initial: {
    opacity: 0,
    y: 50
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  },
  out: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

// Style pour le bouton de retour en haut
const ScrollToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00dbde 0%, #fc00ff 100%);
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  // Gérer l'affichage du bouton de retour en haut
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Fonction pour faire défiler vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <GlobalStyle  />
      
      <AnimatePresence mode="wait">
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          key="app"
        >
          {/* En-tête */}
          <Header />
          
          {/* Section À Propos */}
          <About />
          
          {/* Section Projets */}
          <Projects />
          
          {/* Section Contact */}
          <Contact />
          
          {/* Pied de page */}
          <Footer />
          
          {/* Bouton de retour en haut */}
          {showScrollButton && (
            <ScrollToTopButton
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              ↑
            </ScrollToTopButton>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;
