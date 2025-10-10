const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // User related endpoints
  async login(email, password, userType) {
    await delay(1000);
    // Simulate API validation
    if (email && password) {
      return {
        id: '1',
        name: 'Jeet',
        email,
        role: userType,
        token: 'mock-jwt-token'
      };
    }
    throw new Error('Invalid credentials');
  },

  // Dashboard data
  async getDashboardData() {
    await delay(800);
    return {
      recentActivities: [
        { id: 1, type: 'assignment', title: 'Project Review Completed', time: '2 hours ago' },
        { id: 2, type: 'resource', title: 'System Documentation Updated', time: '3 hours ago' },
        { id: 3, type: 'message', title: 'Message from Jeet', time: 'Yesterday' },
      ],
      upcomingTasks: [
        { id: 1, title: 'Technical Review', due: 'Tomorrow', status: 'pending' },
        { id: 2, title: 'System Update', due: 'In 2 days', status: 'in-progress' },
        { id: 3, title: 'Team Meeting', due: 'Next week', status: 'not-started' },
      ],
      performance: {
        averageGrade: 'A-',
        attendance: '95%',
        tasksCompleted: 28,
        totalTasks: 30,
      }
    };
  },

  // Resources
  async getResources() {
    await delay(600);
    return [
      { id: 1, title: 'System Architecture', type: 'pdf', size: '15MB' },
      { id: 2, title: 'Technical Documentation', type: 'pdf', size: '8MB' },
      { id: 3, title: 'API Guidelines', type: 'doc', size: '5MB' },
    ];
  },

  // Assignments
  async getAssignments() {
    await delay(700);
    return [
      { id: 1, subject: 'Development', title: 'Code Review', dueDate: '2025-10-15' },
      { id: 2, subject: 'Infrastructure', title: 'Server Setup', dueDate: '2025-10-20' },
      { id: 3, subject: 'Documentation', title: 'API Docs Update', dueDate: '2025-10-25' },
    ];
  }
};