// src/components/Login.js
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { username, password });
  };

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      background: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative', // Pour positionner le texte "MedNotes" en haut à gauche
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
      width: '900px', // Taille plus grande pour l'image
      height: 'auto',
      marginBottom: '20px',
    },
    subtitle: {
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
      width: '100%',
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
    options: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      fontSize: '14px',
      width: '100%',
      color: 'black',
    },
    optionsA: {
      color: '#007bff',
      textDecoration: 'none',
    },
    signInBtn: {
      width: '100%',
      padding: '10px',
      background: '#2a5298',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      marginBottom: '10px',
    },
    signInOtherBtn: {
      width: '100%',
      padding: '10px',
      background: 'transparent',
      border: '1px solid #2a5298',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      color: '#2a5298',
    },
    signupLink: {
      textAlign: 'center',
      marginTop: '20px',
      fontSize: '14px',
      color: 'black',
    },
    signupLinkA: {
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
          src="https://static.vecteezy.com/system/resources/thumbnails/002/127/173/small_2x/medicine-and-healthcare-concept-illustration-male-and-female-doctor-character-medical-service-can-use-for-homepage-mobile-apps-web-banner-character-cartoon-illustration-flat-style-free-vector.jpg" // Nouvelle image
          alt="Medical Illustration"
          style={styles.illustration}
        />
      </div>
      <div style={styles.right}>
        <h2 style={styles.rightH2}>Se connecter</h2>
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
          <div style={styles.options}>
            <label>
              <input type="checkbox" />
              Souviens-toi de moi
            </label>
            <a href="#" style={styles.optionsA}>Mot de passe oublié ?</a>
          </div>
          <button type="submit" style={styles.signInBtn}>
            Se connecter
          </button>
          <button type="button" style={styles.signInOtherBtn}>
            Connectez-vous avec d'autres
          </button>
        </form>
        <p style={styles.signupLink}>
          Vous n'avez pas de compte ? <a href="/register" style={styles.signupLinkA}>Inscrivez-vous</a>
        </p>
      </div>
    </div>
  );
};

export default Login;