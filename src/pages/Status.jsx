import React from 'react';
import './Status.css';

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
        return 'operational';
      case 'resolved':
        return 'resolved';
      case 'completed':
        return 'completed';
      case 'degraded':
        return 'degraded';
      default:
        return 'unknown';
    }
  };

  return (
    <div className="status">
      <section className="hero">
        <h1>System Status</h1>
        <p>Current status of Edora services</p>
      </section>

      <section className="overview">
        <div className="statusHeader">
          <h2>All Systems Operational</h2>
          <span className="timestamp">
            Last updated: {new Date().toLocaleString()}
          </span>
        </div>

        <div className="systemsGrid">
          {systems.map((system, index) => (
            <div key={index} className="systemCard">
              <div className="systemHeader">
                <h3>{system.name}</h3>
                <span className={`status ${getStatusColor(system.status)}`}>
                  {system.status}
                </span>
              </div>
              <div className="systemMeta">
                <span>Uptime: {system.uptime}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="incidents">
        <h2>Recent Incidents</h2>
        <div className="timeline">
          {incidents.map((incident, index) => (
            <div key={index} className="incident">
              <div className="incidentHeader">
                <span className="date">{incident.date}</span>
                <h3>{incident.title}</h3>
                <span className={`status ${getStatusColor(incident.status)}`}>
                  {incident.status}
                </span>
              </div>
              <p className="description">{incident.description}</p>
              <p className="resolution">
                <strong>Resolution:</strong> {incident.resolution}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="subscribe">
        <h2>Subscribe to Updates</h2>
        <p>Get notified about system status changes and maintenance windows.</p>
        <form className="subscribeForm">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <section className="support">
        <h2>Need Technical Assistance?</h2>
        <p>Contact our technical team led by Jeet for immediate support.</p>
        <div className="supportActions">
          <a href="/contact" className="primaryButton">
            Contact Support
          </a>
          <a href="/documentation" className="secondaryButton">
            View Documentation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Status;