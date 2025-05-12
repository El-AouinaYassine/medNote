// src/components/Register.js
import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted:', { username, email, password });
  };

  // Styles en tant qu'objets JavaScript
  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      background: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    header: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      display: 'flex',
      alignItems: 'center',
    },
    headerLogo: {
      width: '40px',
      height: '40px',
      marginRight: '10px',
    },
    headerText: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#2a5298',
    },
    left: {
      flex: 1,
      padding: '40px',
      color: 'black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '500px',
      textAlign: 'center',
    },
    illustration: {
      width: '600px',
      height: 'auto',
      marginBottom: '20px',
    },
    leftH1: {
      fontSize: '48px',
      marginBottom: '10px',
    },
    leftH3: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    leftP: {
      fontSize: '16px',
      lineHeight: 1.5,
      maxWidth: '400px',
    },
    right: {
      flex: 1,
      background: 'white',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightH2: {
      textAlign: 'center',
      marginBottom: '30px',
      fontSize: '24px',
      color: 'black',
    },
    inputGroup: {
      position: 'relative',
      marginBottom: '20px',
      width: '100%',
    },
    icon: {
      position: 'absolute',
      top: '50%',
      left: '10px',
      transform: 'translateY(-50%)',
      fontSize: '18px',
      color: 'black',
    },
    input: {
      width: '99%',
      padding: '10px 10px 10px 40px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '16px',
      background: 'white',
    },
    showPassword: {
      position: 'absolute',
      top: '50%',
      right: '10px',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      color: '#007bff',
      fontSize: '14px',
    },
    signUpBtn: {
      width: '100%',
      padding: '10px',
      background: '#2a5298',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
    },
    loginLink: {
      textAlign: 'center',
      marginTop: '20px',
      fontSize: '14px',
      color: 'black',
    },
    loginLinkA: {
      color: '#007bff',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      {/* Texte "MedNotes" en haut à gauche avec un petit logo */}
      <div style={styles.header}>
        <img
          src="https://img.freepik.com/vecteurs-premium/symbole-du-rythme-cardiaque-pouls_444196-12124.jpg"
          alt="MedNotes Logo"
          style={styles.headerLogo}
        />
        <span style={styles.headerText}>MedNotes</span>
      </div>
      <div style={styles.left}>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/002/127/173/small_2x/medicine-and-healthcare-concept-illustration-male-and-female-doctor-character-medical-service-can-use-for-homepage-mobile-apps-web-banner-character-cartoon-illustration-flat-style-free-vector.jpg"
          alt="Medical Illustration"
          style={styles.illustration}
        />
      </div>
      <div style={styles.right}>
        <h2 style={styles.rightH2}>Inscrivez-vous</h2>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div style={styles.inputGroup}>
            <span style={styles.icon}>👤</span>
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <span style={styles.icon}>✉️</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <span style={styles.icon}>🔒</span>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
            <span
              style={styles.showPassword}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'masquer' : 'voir'}
            </span>
          </div>
          <button type="submit" style={styles.signUpBtn}>
            Inscrivez-vous
          </button>
        </form>
        <p style={styles.loginLink}>
          Vous avez déjà un compte ? <a href="/login" style={styles.loginLinkA}>Se connecter</a>
        </p>
      </div>
    </div>
  );
};

export default Register;