import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaRocket,
  FaUser,
  FaCode,
  FaEnvelope as FaEnvelopeNav,
} from 'react-icons/fa';

const Navbar = styled.nav`
  position: fixed;
  top: 0;
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

const NavContainer = styled.div`
  position: relative;

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 1rem;
  margin: 0;
  background: #0f172a;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 100%;
  right: 0;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 1rem;
  z-index: 1001;

  @media (min-width: 769px) {
    position: static;
    background: transparent;
    box-shadow: none;
    display: flex;
    flex-direction: row;
    padding: 0;
  }
`;

const NavItem = styled.li``;

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
  display: block;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1002;
  padding: 0.5rem;

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <Navbar>
      <Logo
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        Portfolio
      </Logo>

      <NavContainer ref={menuRef}>
        <MobileMenuButton onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>

        <NavLinks isOpen={isMenuOpen}>
          <NavItem>
            <NavLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHome /> Accueil
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUser /> À Propos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCode /> Projets
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#competance"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('competance');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket /> Compétences
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelopeNav /> Contact
            </NavLink>
          </NavItem>
        </NavLinks>
      </NavContainer>
    </Navbar>
  );
};

export default NavHeader;
