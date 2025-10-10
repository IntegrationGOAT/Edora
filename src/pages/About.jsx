import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const About = () => {
  const stats = [
    { number: '10K+', label: 'Schools' },
    { number: '1M+', label: 'Students' },
    { number: '500+', label: 'Apps Integrated' },
    { number: '99.9%', label: 'Uptime' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We continuously innovate to provide cutting-edge educational technology solutions.',
      icon: '💡'
    },
    {
      title: 'Security',
      description: 'We prioritize the security and privacy of student and institutional data.',
      icon: '🔒'
    },
    {
      title: 'Accessibility',
      description: 'We ensure our platform is accessible to all users, regardless of ability.',
      icon: '🌍'
    },
    {
      title: 'Community',
      description: 'We build strong relationships with educators and institutions worldwide.',
      icon: '🤝'
    }
  ];

  const team = [
    {
      name: 'Utkarsh',
      role: 'CEO & Founder',
      image: '/team/utkarsh.jpg'
    },
    {
      name: 'Jeet',
      role: 'CTO',
      image: '/team/jeet.jpg'
    },
    {
      name: 'Priom',
      role: 'Head of Education',
      image: '/team/priom.jpg'
    },
    {
      name: 'Atreya',
      role: 'Head of Product',
      image: '/team/atreya.jpg'
    }
  ];

  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <h1>About Edora</h1>
        <p>Empowering education through technology</p>
      </section>

      <section className={styles.mission}>
        <h2>Our Mission</h2>
        <p>
          At Edora, we believe that technology should enhance, not complicate, 
          the educational experience. Our mission is to provide schools with 
          powerful, intuitive tools that streamline administration and elevate 
          learning outcomes.
        </p>
      </section>

      <section className={styles.stats}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <span className={styles.statNumber}>{stat.number}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className={styles.values}>
        <h2>Our Values</h2>
        <div className={styles.valueGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueItem}>
              <span className={styles.valueIcon}>{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.team}>
        <h2>Our Leadership Team</h2>
        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <div className={styles.memberImage}>
                <span className={styles.placeholderImage}>{member.name[0]}</span>
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Join Us in Transforming Education</h2>
        <p>
          Ready to be part of the future of education technology?
        </p>
        <div className={styles.ctaButtons}>
          <Link to="/contact" className={styles.primaryButton}>
            Contact Us
          </Link>
          <Link to="/careers" className={styles.secondaryButton}>
            View Careers
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;