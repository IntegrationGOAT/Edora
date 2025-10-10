import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const officeLocations = [
    {
      city: 'San Francisco',
      address: '123 Tech Street, SF, CA 94105',
      phone: '+1 (555) 123-4567'
    },
    {
      city: 'New York',
      address: '456 Innovation Ave, NY, NY 10013',
      phone: '+1 (555) 987-6543'
    }
  ];

  const team = {
    name: 'Jeet',
    role: 'Chief Technical Officer',
    email: 'jeet@edora.com'
  };

  return (
    <div className={styles.contact}>
      <section className={styles.hero}>
        <h1>Contact Us</h1>
        <p>We're here to help with any questions you may have</p>
      </section>

      <section className={styles.content}>
        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <h2>Get in Touch</h2>
            <p>Our team is ready to help you with any questions or concerns.</p>
            
            <div className={styles.teamContact}>
              <h3>Your Primary Contact</h3>
              <div className={styles.teamMember}>
                <div className={styles.avatar}>
                  {team.name[0]}
                </div>
                <div>
                  <h4>{team.name}</h4>
                  <p>{team.role}</p>
                  <a href={`mailto:${team.email}`}>{team.email}</a>
                </div>
              </div>
            </div>

            <div className={styles.offices}>
              <h3>Our Offices</h3>
              {officeLocations.map((location, index) => (
                <div key={index} className={styles.office}>
                  <h4>{location.city}</h4>
                  <p>{location.address}</p>
                  <p>{location.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.contactForm}>
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="organization">Organization</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className={styles.support}>
        <h2>Need Technical Support?</h2>
        <p>Check out our help center for immediate assistance.</p>
        <a href="/support" className={styles.supportButton}>
          Visit Help Center
        </a>
      </section>
    </div>
  );
};

export default Contact;