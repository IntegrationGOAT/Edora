import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  const features = [
    {
      title: 'Single Sign-On',
      description: 'One-click access to all your educational applications',
      icon: '🔑'
    },
    {
      title: 'Smart Dashboard',
      description: 'Personalized dashboard for students, teachers, and administrators',
      icon: '📊'
    },
    {
      title: 'Data Security',
      description: 'Enterprise-grade security with end-to-end encryption',
      icon: '🔒'
    },
    {
      title: 'Analytics',
      description: 'Comprehensive insights into student and school performance',
      icon: '📈'
    },
    {
      title: 'Integration Hub',
      description: 'Connect with thousands of educational apps seamlessly',
      icon: '🔄'
    },
    {
      title: 'Resource Library',
      description: 'Access to a vast library of educational resources',
      icon: '📚'
    }
  ];

  const testimonials = [
    {
      quote: "Edora has transformed how we manage digital resources in our school.",
      author: "Principal, Global Academy",
      image: "/testimonials/principal.jpg"
    },
    {
      quote: "The single sign-on feature saves us countless hours every semester.",
      author: "IT Director, Tech High",
      image: "/testimonials/director.jpg"
    }
  ];

  return (
    <div className={styles.features}>
      <section className={styles.hero}>
        <h1>Features</h1>
        <p>Empowering Education with Technology</p>
      </section>

      <section className={styles.featureGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <span className={styles.featureIcon}>{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      <section className={styles.workflow}>
        <h2>How It Works</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Sign Up</h3>
            <p>Create your school's account in minutes</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>Connect Apps</h3>
            <p>Integrate your favorite educational tools</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Start Learning</h3>
            <p>Access all resources with one login</p>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2>What Our Users Say</h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.quote}>{testimonial.quote}</p>
              <p className={styles.author}>{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Transform Your School?</h2>
        <p>Contact Jeet to learn more about how Edora can help your institution.</p>
        <button className={styles.ctaButton} onClick={() => window.location.href = '/contact'}>
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Features;