import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  const features = [
    {
      title: 'Single Sign-On',
      description: 'Access all your educational tools with one secure login. No more password juggling.',
      icon: '🔐'
    },
    {
      title: 'Classroom Management',
      description: 'Organize virtual classrooms, manage assignments, and track student progress effortlessly.',
      icon: '👩‍🏫'
    },
    {
      title: 'Resource Library',
      description: 'Centralized storage for educational content, lesson plans, and learning materials.',
      icon: '📚'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Get insights into student engagement, performance trends, and resource utilization.',
      icon: '📊'
    },
    {
      title: 'Secure Data Integration',
      description: 'Safely sync with your Student Information System (SIS) and other school databases.',
      icon: '🔒'
    },
    {
      title: 'App Marketplace',
      description: 'Discover and integrate with hundreds of educational apps and tools.',
      icon: '🎯'
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Everything You Need in One Place</h2>
        <p className={styles.subtitle}>
          Streamline your educational technology with powerful features designed for modern learning
        </p>
      </div>
      
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>{feature.icon}</span>
            </div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
