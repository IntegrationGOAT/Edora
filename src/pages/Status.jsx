import React from 'react';
import styles from './Status.module.css';

const Status = () => {
  const systems = [
    {
      name: 'Authentication Service',
      status: 'operational',
      uptime: '99.99%'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.95%'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.99%'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.98%'
    },
    {
      name: 'Single Sign-On',
      status: 'operational',
      uptime: '99.97%'
    }
  ];

  const incidents = [
    {
      date: 'October 5, 2025',
      title: 'API Latency Issues',
      status: 'resolved',
      description: 'Increased latency in API responses. Issue identified and resolved.',
      resolution: 'Optimized database queries and scaled up infrastructure.'
    },
    {
      date: 'September 28, 2025',
      title: 'Scheduled Maintenance',
      status: 'completed',
      description: 'Planned system upgrade and maintenance.',
      resolution: 'Successfully completed all planned upgrades.'
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'operational':
        return styles.operational;
      case 'resolved':
        return styles.resolved;
      case 'completed':
        return styles.completed;
      case 'degraded':
        return styles.degraded;
      default:
        return styles.unknown;
    }
  };

  return (
    <div className={styles.status}>
      <section className={styles.hero}>
        <h1>System Status</h1>
        <p>Current status of Edora services</p>
      </section>

      <section className={styles.overview}>
        <div className={styles.statusHeader}>
          <h2>All Systems Operational</h2>
          <span className={styles.timestamp}>
            Last updated: {new Date().toLocaleString()}
          </span>
        </div>

        <div className={styles.systemsGrid}>
          {systems.map((system, index) => (
            <div key={index} className={styles.systemCard}>
              <div className={styles.systemHeader}>
                <h3>{system.name}</h3>
                <span className={`${styles.status} ${getStatusColor(system.status)}`}>
                  {system.status}
                </span>
              </div>
              <div className={styles.systemMeta}>
                <span>Uptime: {system.uptime}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.incidents}>
        <h2>Recent Incidents</h2>
        <div className={styles.timeline}>
          {incidents.map((incident, index) => (
            <div key={index} className={styles.incident}>
              <div className={styles.incidentHeader}>
                <span className={styles.date}>{incident.date}</span>
                <h3>{incident.title}</h3>
                <span className={`${styles.status} ${getStatusColor(incident.status)}`}>
                  {incident.status}
                </span>
              </div>
              <p className={styles.description}>{incident.description}</p>
              <p className={styles.resolution}>
                <strong>Resolution:</strong> {incident.resolution}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.subscribe}>
        <h2>Subscribe to Updates</h2>
        <p>Get notified about system status changes and maintenance windows.</p>
        <form className={styles.subscribeForm}>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <section className={styles.support}>
        <h2>Need Technical Assistance?</h2>
        <p>Contact our technical team led by Jeet for immediate support.</p>
        <div className={styles.supportActions}>
          <a href="/contact" className={styles.primaryButton}>
            Contact Support
          </a>
          <a href="/documentation" className={styles.secondaryButton}>
            View Documentation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Status;