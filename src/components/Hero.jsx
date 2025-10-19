import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Subjects from './Subjects';


const Hero = () => {


  useGSAP(() => {

	gsap.fromTo('.anihero',{opacity:0 ,y:10}, { opacity:1 , duration:1, scale:1 ,y:0 ,stagger:0.5}); 
  	gsap.fromTo('.heroimg',{opacity:0 ,x:50}, { opacity:1 , duration:1.5, scale:1 ,x:0 ,stagger:0.5}); 
},[]);


  gsap.registerPlugin(useGSAP);

  return (
    <section className="hero" >
      <div className="heroContent">
        <h1 className="title anihero" >
         The choice of Today <br /> The change of tomorrow <br /> Join us NOW!
        </h1>
  <p className="subtitle anihero">
          One secure platform to manage all your educational resources. 
          Connect your school, empower teachers, and enhance student learning.
        </p>
        <div className="ctaContainer anihero">
          <Link to="/pricing" className="primaryButton">
            Get Started for Free
          </Link>
          <Link to="/contact" className="secondaryButton">
            Request Demo
          </Link>
        </div>
        <div className="stats anihero">
          <div className="statItem">
            <span className="statNumber">10,000+</span>
            <span className="statLabel">Schools</span>
          </div>
          <div className="statItem">
            <span className="statNumber">1M+</span>
            <span className="statLabel">Students</span>
          </div>
          <div className="statItem">
            <span className="statNumber">500+</span>
            <span className="statLabel">Apps Integrated</span>
          </div>
        </div>
      </div>
      <div className="heroImage heroimg">
        <img 
          src="https://www.clever.com/wp-content/uploads/2024/02/Classroom-2.png" 
          alt="Edora Platform Dashboard" 
          className="dashboardImage"
        />
      </div>
    </section>
  );
};

export default Hero;
