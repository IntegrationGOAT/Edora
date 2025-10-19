import React from 'react';
import './Features.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Features = () => {
   useGSAP(() => {
      gsap.registerPlugin(useGSAP);
        gsap.registerPlugin(ScrollTrigger);

	gsap.fromTo('.cardani',{opacity:0 ,y:10}, { opacity:1 , duration:1, scale:1 ,y:0 ,stagger:0.3 ,scrollTrigger:{trigger:'.cardani',start:'1px bottom'}}); 

},[]);




  const features = [
    {
      title: 'Single Sign-On',
      description: 'Access all your educational tools with one secure login. No more password juggling.',
      icon: '🔐'
    },
    {
      title: 'Classroom Management',
      description: 'Organize virtual classrooms, manage assignments, and track student progress effortlessly.',
      icon: '👩‍🏫'
    },
    {
      title: 'Resource Library',
      description: 'Centralized storage for educational content, lesson plans, and learning materials.',
      icon: '📚'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Get insights into student engagement, performance trends, and resource utilization.',
      icon: '📊'
    },
    {
      title: 'Secure Data Integration',
      description: 'Safely sync with your Student Information System (SIS) and other school databases.',
      icon: '🔒'
    },
    {
      title: 'App Marketplace',
      description: 'Discover and integrate with hundreds of educational apps and tools.',
      icon: '🎯'
    }
  ];

  return (
    <section className="features">
      <div className="heading">
        <h2 className="title">Everything You Need in One Place</h2>
        <p className="subtitle">
          Streamline your educational technology with powerful features designed for modern learning
        </p>
      </div>
      
      <div className="grid">
        {features.map((feature, index) => (
          <div key={index} className="feature cardani">
            <div className="iconContainer">
              <span className="icon">{feature.icon}</span>
            </div>
            <h3 className="featureTitle">{feature.title}</h3>
            <p className="featureDescription">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
