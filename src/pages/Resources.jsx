import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Resources.module.css';

const Resources = () => {
  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Learn the basics of Edora and how to set up your school',
      icon: '🚀',
      link: '/documentation/getting-started'
    },
    {
      title: 'Integration Guides',
      description: 'Step-by-step guides for integrating your favorite tools',
      icon: '🔄',
      link: '/documentation/integrations'
    },
    {
      title: 'Best Practices',
      description: 'Tips and tricks for getting the most out of Edora',
      icon: '⭐',
      link: '/documentation/best-practices'
    },
    {
      title: 'API Documentation',
      description: 'Technical documentation for developers',
      icon: '👨‍💻',
      link: '/documentation/api'
    }
  ];

  const tutorials = [
    {
      title: 'Single Sign-On Setup',
      duration: '10 min',
      level: 'Beginner'
    },
    {
      title: 'Data Integration',
      duration: '15 min',
      level: 'Intermediate'
    },
    {
      title: 'Advanced Analytics',
      duration: '20 min',
      level: 'Advanced'
    }
  ];

  return (
    <div className={styles.resources}>
      <section className={styles.hero}>
        <h1>Resources</h1>
        <p>Everything you need to succeed with Edora</p>
      </section>

      <section className={styles.featured}>
        <h2>Featured Resources</h2>
        <div className={styles.resourceGrid}>
          {resources.map((resource, index) => (
            <Link to={resource.link} key={index} className={styles.resourceCard}>
              <span className={styles.resourceIcon}>{resource.icon}</span>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.tutorials}>
        <h2>Video Tutorials</h2>
        <div className={styles.tutorialGrid}>
          {tutorials.map((tutorial, index) => (
            <div key={index} className={styles.tutorialCard}>
              <div className={styles.tutorialInfo}>
                <h3>{tutorial.title}</h3>
                <div className={styles.meta}>
                  <span>{tutorial.duration}</span>
                  <span className={styles.level}>{tutorial.level}</span>
                </div>
              </div>
              <button className={styles.watchButton}>Watch Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.support}>
        <div className={styles.supportContent}>
          <h2>Need Technical Support?</h2>
          <p>Our technical team led by Jeet is here to help you with any questions.</p>
          <div className={styles.supportActions}>
            <Link to="/support" className={styles.primaryButton}>
              Visit Help Center
            </Link>
            <Link to="/contact" className={styles.secondaryButton}>
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.newsletter}>
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest resources and updates</p>
        <form className={styles.subscribeForm}>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Resources;