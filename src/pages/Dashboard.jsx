import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { api } from '../services/api';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    recentActivities: [],
    upcomingTasks: [],
    performance: null
  });

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const data = await api.getDashboardData();
        setDashboardData(data);
      } catch (error) {
        console.error('Failed to load dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  const quickLinks = [
    { id: 1, title: 'Class Schedule', icon: '📅', action: () => console.log('Schedule clicked') },
    { id: 2, title: 'Resource Library', icon: '📚', action: () => console.log('Resources clicked') },
    { id: 3, title: 'Grades', icon: '📊', action: () => console.log('Grades clicked') },
    { id: 4, title: 'Messages', icon: '✉️', action: () => console.log('Messages clicked') },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  if (isLoading) {
    return (
      <div className={styles.loading}>
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1>Welcome back, {user.name}!</h1>
        <form className={styles.searchBar} onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Search resources, classes, or assignments..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>
      </header>

      <div className={styles.grid}>
        <section className={styles.quickAccess}>
          <h2>Quick Access</h2>
          <div className={styles.quickLinks}>
            {quickLinks.map(link => (
              <button 
                key={link.id} 
                className={styles.quickLink}
                onClick={link.action}
              >
                <span className={styles.icon}>{link.icon}</span>
                <span>{link.title}</span>
              </button>
            ))}
          </div>
        </section>

        <section className={styles.activities}>
          <h2>Recent Activities</h2>
          <div className={styles.activityList}>
            {dashboardData.recentActivities.map(activity => (
              <div key={activity.id} className={styles.activityItem}>
                <div className={styles.activityIcon}>
                  {activity.type === 'assignment' && '📝'}
                  {activity.type === 'resource' && '📚'}
                  {activity.type === 'message' && '✉️'}
                </div>
                <div className={styles.activityDetails}>
                  <h3>{activity.title}</h3>
                  <span>{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.tasks}>
          <h2>Upcoming Tasks</h2>
          <div className={styles.taskList}>
            {dashboardData.upcomingTasks.map(task => (
              <div key={task.id} className={styles.taskItem}>
                <div className={styles.taskDetails}>
                  <h3>{task.title}</h3>
                  <span>Due: {task.due}</span>
                </div>
                <div className={styles.taskActions}>
                  <span className={`${styles.taskStatus} ${styles[task.status]}`}>
                    {task.status}
                  </span>
                  <button className={styles.viewTask}>View</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.performance}>
          <h2>Performance Overview</h2>
          <div className={styles.performanceStats}>
            <div className={styles.stat}>
              <h4>Average Grade</h4>
              <span className={styles.grade}>{dashboardData.performance?.averageGrade}</span>
            </div>
            <div className={styles.stat}>
              <h4>Attendance</h4>
              <span className={styles.percentage}>{dashboardData.performance?.attendance}</span>
            </div>
            <div className={styles.stat}>
              <h4>Tasks Complete</h4>
              <span className={styles.count}>
                {dashboardData.performance?.tasksCompleted}/{dashboardData.performance?.totalTasks}
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
