import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import './Home.css';
import Subjects from '../components/Subjects';
import WhoWeAre from '../components/WhoWeAre';




const Home = () => {
  return (
  <div className="home">
      <Hero />
      <WhoWeAre />
      <Features />
      <Subjects />
      <Testimonials />
    </div>

  );
};

export default Home;
