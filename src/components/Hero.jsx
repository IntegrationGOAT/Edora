import React from 'react';
import styles from './Hero.module.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Simplify Education Technology Management
        </h1>
        <p className={styles.subtitle}>
          One secure platform to manage all your educational resources. 
          Connect your school, empower teachers, and enhance student learning.
        </p>
        <div className={styles.ctaContainer}>
          <Link to="/pricing" className={styles.primaryButton}>
            Get Started for Free
          </Link>
          <Link to="/contact" className={styles.secondaryButton}>
            Request Demo
          </Link>
        </div>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>10,000+</span>
            <span className={styles.statLabel}>Schools</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1M+</span>
            <span className={styles.statLabel}>Students</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>Apps Integrated</span>
          </div>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img 
          src="/hero-dashboard.svg" 
          alt="Edora Platform Dashboard" 
          className={styles.dashboardImage}
        />
      </div>
    </section>
  );
};

export default Hero;
