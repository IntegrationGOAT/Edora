import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import styles from './Home.module.css';
import Subjects from '../components/Subjects';
import WhoWeAre from '../components/WhoWeAre';




const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <WhoWeAre />
      <Features />
      <Subjects />
      <Testimonials />
    </div>

  );
};

export default Home;
