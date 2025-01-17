import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './Styles/Auth.module.css';
import { logIn } from '../services/AuthenticationService';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/userContext';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {  updateUser } = useUser();  // Correct usage of useUser hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        email,
        password
      };
      const response = await logIn(userData);
      setError('');    
      setMessage(response.message); 
      updateUser();
      navigate('/');

    } catch (err) {
      setMessage('');
      console.log(err);
      setError(err.response?.data?.message);
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.authPageWrapper}>
        <div className={styles.authContainer}>
          <h2 className={styles.authTitle}>Log In</h2>
          {error && <p className={styles.errorMessage}>{error}<br /></p>}
          {message && <div className={styles.successMessage}>{message}<br /></div>}
          <form className={styles.authForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <label>Password</label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className={styles.authButton}>Log In</button>
            <div className={styles.authLink}>
              <span>New here? </span>
              <a href="/signup">Want to Create Account</a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LogIn;