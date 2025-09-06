// Configuration pour EmailJS
// Créez un compte sur EmailJS (https://www.emailjs.com/) et remplacez ces valeurs par les vôtres

export const emailConfig = {
  serviceID: 'votre_service_id',
  templateID: 'votre_template_id',
  publicKey: 'votre_cle_publique',
  // ID du formulaire (doit correspondre à l'ID dans le code HTML du template EmailJS)
  formID: 'contact-form'
};

// Instructions pour configurer EmailJS :
// 1. Créez un compte sur https://www.emailjs.com/
// 2. Ajoutez un service d'email (Gmail, Outlook, etc.)
// 3. Créez un template d'email avec les variables correspondant à votre formulaire
// 4. Récupérez vos identifiants et remplacez les valeurs ci-dessus
// 5. Dans votre composant Contact, importez cette configuration :
//    import { emailConfig } from '../config/emailConfig';
// 6. Utilisez ces valeurs dans votre appel à emailjs.send()
