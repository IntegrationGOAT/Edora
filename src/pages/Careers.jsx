import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Careers.module.css';

const Careers = () => {
  const positions = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      description: 'Join our core engineering team and help build the future of education technology.'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      description: 'Lead product initiatives and work closely with our engineering and design teams.'
    },
    {
      title: 'Education Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help our education partners succeed with Edora implementation and adoption.'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      description: 'Create intuitive and beautiful experiences for our education platform.'
    }
  ];

  const benefits = [
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Comprehensive medical, dental, and vision coverage for you and your family'
    },
    {
      icon: '💰',
      title: 'Competitive Pay',
      description: 'Competitive salary and equity packages to reward your contributions'
    },
    {
      icon: '🌴',
      title: 'Unlimited PTO',
      description: 'Flexible vacation policy to help you maintain work-life balance'
    },
    {
      icon: '🎓',
      title: 'Learning Budget',
      description: 'Annual budget for professional development and learning'
    },
    {
      icon: '🏠',
      title: 'Remote Work',
      description: 'Work from anywhere with our flexible remote policy'
    },
    {
      icon: '🎉',
      title: 'Team Events',
      description: 'Regular team gatherings and annual company retreats'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We push boundaries and embrace new ideas'
    },
    {
      title: 'Impact',
      description: 'We measure success by the positive change we create'
    },
    {
      title: 'Collaboration',
      description: 'We achieve more when we work together'
    }
  ];

  return (
    <div className={styles.careers}>
      <section className={styles.hero}>
        <h1>Join Our Mission</h1>
        <p>Help us transform education technology</p>
      </section>

      <section className={styles.mission}>
        <h2>Why Edora?</h2>
        <p>
          At Edora, we're on a mission to revolutionize how educational institutions 
          manage their digital resources. Led by our visionary team - Utkarsh (CEO), 
          Jeet (CTO), Priom (Head of Education), and Atreya (Head of Product) - 
          we're building the future of education technology.
        </p>
      </section>

      <section className={styles.values}>
        <h2>Our Values</h2>
        <div className={styles.valueGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.benefits}>
        <h2>Benefits & Perks</h2>
        <div className={styles.benefitGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <span className={styles.benefitIcon}>{benefit.icon}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.openings}>
        <h2>Open Positions</h2>
        <div className={styles.positionGrid}>
          {positions.map((position, index) => (
            <div key={index} className={styles.positionCard}>
              <div className={styles.positionHeader}>
                <h3>{position.title}</h3>
                <span className={styles.type}>{position.type}</span>
              </div>
              <div className={styles.positionMeta}>
                <span>{position.department}</span>
                <span>{position.location}</span>
              </div>
              <p>{position.description}</p>
              <Link to="/contact" className={styles.applyButton}>
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contact}>
        <h2>Don't See a Perfect Fit?</h2>
        <p>
          We're always looking for talented individuals to join our team. 
          Send your resume to our CTO Jeet and let us know how you can contribute.
        </p>
        <Link to="/contact" className={styles.contactButton}>
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Careers;