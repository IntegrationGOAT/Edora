import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const { login } = useAuth();
  const [userType, setUserType] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      const result = await login(email, password, userType);
      if (!result.success) {
        setError(result.error);
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Welcome Back</h2>
        
        <div className={styles.userTypeSelector}>
          <button 
            className={`${styles.userTypeButton} ${userType === 'student' ? styles.active : ''}`}
            onClick={() => setUserType('student')}
            type="button"
          >
            Student
          </button>
          <button 
            className={`${styles.userTypeButton} ${userType === 'teacher' ? styles.active : ''}`}
            onClick={() => setUserType('teacher')}
            type="button"
          >
            Teacher
          </button>
          <button 
            className={`${styles.userTypeButton} ${userType === 'admin' ? styles.active : ''}`}
            onClick={() => setUserType('admin')}
            type="button"
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>

          <div className={styles.forgotPassword}>
            <a href="/forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className={styles.loginButton}>
            Log In
          </button>
        </form>

        <div className={styles.divider}>
          <span>Or continue with</span>
        </div>

        <div className={styles.ssoOptions}>
          <button className={`${styles.ssoButton} ${styles.google}`}>
            <img src="/google-icon.svg" alt="Google" />
            Google
          </button>
          <button className={`${styles.ssoButton} ${styles.microsoft}`}>
            <img src="/microsoft-icon.svg" alt="Microsoft" />
            Microsoft
          </button>
        </div>

        <p className={styles.signup}>
          Don't have an account? <a href="/register">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
