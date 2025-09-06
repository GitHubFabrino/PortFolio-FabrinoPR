import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactContainer = styled.section`
  padding: 8rem 0;
  background: #f8fafc;
  color: #1e293b;
  width: 100vw;
  margin: 0;
  
  & > * {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  text-align: left;
  
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

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: #1e293b;
  }
  
  p {
    color: #64748b;
    margin-bottom: 2rem;
    line-height: 1.8;
  }
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  .icon {
    width: 50px;
    height: 50px;
    background: rgba(99, 102, 241, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    flex-shrink: 0;
    color: #6366f1;
    font-size: 1.2rem;
    @media (max-width: 768px) {
       width: 30px;
    height: 30px;
    }
  }
  
  .text {
    h4 {
      margin: 0 0 0.5rem;
      color: #1e293b;
      font-size: 1.1rem;
    }
    
    p, a {
      margin: 0;
      color: #64748b;
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: #6366f1;
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #e2e8f0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
    transition: all 0.3s ease;
    
    &:hover {
      background: #6366f1;
      color: white;
      transform: translateY(-3px);
    }
  }
`;

const ContactForm = styled(motion.form)`
  background: white;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: #1e293b;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    width: 95%;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #475569;
    font-weight: 500;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: #6366f1;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  svg {
    font-size: 1.2rem;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Remplacez ces valeurs par vos propres clés EmailJS
      const serviceId = 'votre_service_id';
      const templateId = 'votre_template_id';
      const publicKey = 'votre_cle_publique';
      
      await emailjs.send(serviceId, templateId, formData, publicKey);
      
      setSubmitStatus({
        success: true,
        message: 'Votre message a été envoyé avec succès ! Je vous répondrai dès que possible.'
      });
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      setSubmitStatus({
        success: false,
        message: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactContainer id="contact">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contactez-moi
      </SectionTitle>
      
      <ContactContent>
        <ContactInfo
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Restons en contact</h3>
          <p>N'hésitez pas à me contacter pour toute opportunité ou simplement pour discuter. Je suis toujours ouvert à de nouvelles collaborations et idées passionnantes.</p>
          
          <InfoItem
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="icon">
              <FaMapMarkerAlt size={16}/>
            </div>
            <div className="text">
              <h4>Localisation</h4>
              <p>Antsiranana, Madagascar</p>
            </div>
          </InfoItem>
          
          <InfoItem
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="icon">
              <FaEnvelope size={16}/>
            </div>
            <div className="text">
              <h4>Email</h4>
              <a href="mailto:rakotoharilalainafabrino@gmail.com">rakotoharilalainafabrino@gmail.com</a>
            </div>
          </InfoItem>
          
          <InfoItem
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="icon">
              <FaPhone size={16}/>
            </div>
            <div className="text">
              <h4>Téléphone</h4>
              <a href="tel:+261340585428">+261 34 05 85 428</a>
            </div>
          </InfoItem>
          
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
          </SocialLinks>
        </ContactInfo>
        
        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Envoyez-moi un message</h3>
          
          {submitStatus.message && (
            <div style={{
              padding: '1rem',
              marginBottom: '1.5rem',
              borderRadius: '6px',
              background: submitStatus.success ? '#dcfce7' : '#fee2e2',
              color: submitStatus.success ? '#166534' : '#991b1b',
              border: `1px solid ${submitStatus.success ? '#86efac' : '#fca5a5'}`
            }}>
              {submitStatus.message}
            </div>
          )}
          
          <FormGroup>
            <label htmlFor="name">Nom complet</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="subject">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </FormGroup>
          
          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            <FaPaperPlane />
          </SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
