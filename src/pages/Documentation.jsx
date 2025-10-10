import React from 'react';
import styles from './Documentation.module.css';

const Documentation = () => {
  const sections = [
    {
      title: 'Getting Started',
      items: [
        { title: 'Introduction', link: '#intro' },
        { title: 'Quick Start Guide', link: '#quickstart' },
        { title: 'System Requirements', link: '#requirements' },
        { title: 'Installation Guide', link: '#installation' },
        { title: 'First Steps', link: '#first-steps' }
      ]
    },
    {
      title: 'User Guides',
      items: [
        { title: 'Student Portal Guide', link: '#student-portal' },
        { title: 'Teacher Dashboard Guide', link: '#teacher-dashboard' },
        { title: 'Admin Console Guide', link: '#admin-console' },
        { title: 'Parent Access Guide', link: '#parent-access' },
        { title: 'School Management Guide', link: '#school-management' }
      ]
    },
    {
      title: 'Features Documentation',
      items: [
        { title: 'Single Sign-On', link: '#sso' },
        { title: 'User Management', link: '#user-management' },
        { title: 'App Integration', link: '#app-integration' },
        { title: 'Data Analytics', link: '#analytics' },
        { title: 'Security Settings', link: '#security' }
      ]
    },
    {
      title: 'API Reference',
      items: [
        { title: 'Authentication API', link: '#auth-api' },
        { title: 'User Management API', link: '#users-api' },
        { title: 'Data Integration API', link: '#data-api' },
        { title: 'Analytics API', link: '#analytics-api' },
        { title: 'Webhooks', link: '#webhooks' }
      ]
    },
    {
      title: 'Tutorials',
      items: [
        { title: 'Setting Up SSO', link: '#sso-tutorial' },
        { title: 'Data Migration Guide', link: '#migration' },
        { title: 'Custom Integration', link: '#custom-integration' },
        { title: 'Advanced Analytics', link: '#advanced-analytics' }
      ]
    },
    {
      title: 'Best Practices',
      items: [
        { title: 'Security Guidelines', link: '#security-guidelines' },
        { title: 'Performance Tips', link: '#performance' },
        { title: 'Data Management', link: '#data-management' },
        { title: 'User Training', link: '#training' }
      ]
    }
  ];

  const recentUpdates = [
    {
      date: 'October 8, 2025',
      title: 'API v2.1 Release',
      author: 'Jeet'
    },
    {
      date: 'October 5, 2025',
      title: 'New Authentication Methods',
      author: 'Jeet'
    }
  ];

  return (
    <div className={styles.documentation}>
      <aside className={styles.sidebar}>
        <div className={styles.stickyContent}>
          <div className={styles.search}>
            <input type="text" placeholder="Search documentation..." />
          </div>
          <nav className={styles.navigation}>
            {sections.map((section, index) => (
              <div key={index} className={styles.section}>
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <a href={item.link}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      <main className={styles.content}>
        <section className={styles.hero}>
          <h1>Documentation</h1>
          <p>Everything you need to know about Edora</p>
        </section>

        <section id="intro" className={styles.contentSection}>
          <h2>Introduction</h2>
          <p>Welcome to Edora's comprehensive documentation. Here you'll find everything you need to know about setting up and using our platform effectively.</p>
          
          <div className={styles.updates}>
            <h3>Recent Updates</h3>
            <div className={styles.updateList}>
              {recentUpdates.map((update, index) => (
                <div key={index} className={styles.updateItem}>
                  <span className={styles.date}>{update.date}</span>
                  <h4>{update.title}</h4>
                  <span className={styles.author}>By {update.author}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="quickstart" className={styles.contentSection}>
          <h2>Quick Start Guide</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <h3>Sign Up</h3>
              <p>Create your Edora account and verify your email</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <h3>Setup</h3>
              <p>Configure your institution's profile and preferences</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <h3>Integrate</h3>
              <p>Connect your existing educational tools</p>
            </div>
          </div>
        </section>

        <section id="requirements" className={styles.contentSection}>
          <h2>System Requirements</h2>
          <div className={styles.requirements}>
            <div className={styles.requirement}>
              <h3>Supported Browsers</h3>
              <ul>
                <li>Chrome (latest)</li>
                <li>Firefox (latest)</li>
                <li>Safari (latest)</li>
                <li>Edge (latest)</li>
              </ul>
            </div>
            <div className={styles.requirement}>
              <h3>Minimum Requirements</h3>
              <ul>
                <li>2MB/s internet connection</li>
                <li>Modern web browser</li>
                <li>JavaScript enabled</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.support}>
          <h2>Need Help?</h2>
          <p>Can't find what you're looking for? Our technical team led by Jeet is here to help.</p>
          <div className={styles.supportActions}>
            <a href="/contact" className={styles.primaryButton}>
              Contact Support
            </a>
            <a href="/support" className={styles.secondaryButton}>
              Visit Help Center
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Documentation;