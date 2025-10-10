import React from 'react';
import styles from './Support.module.css';

const Support = () => {
  const faqs = [
    {
      question: "How do I get started with Edora?",
      answer: "Getting started is easy! Simply sign up for an account, and our team led by Jeet will guide you through the setup process."
    },
    {
      question: "What integrations are available?",
      answer: "We support integration with most major educational platforms and tools. Contact our integration team for specific requirements."
    },
    {
      question: "How secure is Edora?",
      answer: "We implement enterprise-grade security measures with end-to-end encryption to protect all your data."
    },
    {
      question: "Do you offer training?",
      answer: "Yes! We provide comprehensive training sessions led by our education team under Priom's guidance."
    }
  ];

  return (
    <div className={styles.support}>
      <section className={styles.hero}>
        <h1>Help Center</h1>
        <p>We're here to help you succeed</p>
      </section>

      <section className={styles.quickHelp}>
        <h2>How can we help you today?</h2>
        <div className={styles.helpGrid}>
          <a href="/documentation" className={styles.helpCard}>
            <span className={styles.icon}>📚</span>
            <h3>Documentation</h3>
            <p>Browse our detailed guides</p>
          </a>
          <a href="/contact" className={styles.helpCard}>
            <span className={styles.icon}>✉️</span>
            <h3>Contact Support</h3>
            <p>Get in touch with our team</p>
          </a>
          <a href="/status" className={styles.helpCard}>
            <span className={styles.icon}>🔔</span>
            <h3>System Status</h3>
            <p>Check system health</p>
          </a>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqCard}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contact}>
        <h2>Still Need Help?</h2>
        <p>Our technical team led by Jeet is ready to assist you with any questions.</p>
        <div className={styles.contactOptions}>
          <a href="/contact" className={styles.contactButton}>
            Contact Support
          </a>
          <a href="tel:+1234567890" className={styles.contactPhone}>
            Call Us: +1 (234) 567-890
          </a>
        </div>
      </section>
    </div>
  );
};

export default Support;