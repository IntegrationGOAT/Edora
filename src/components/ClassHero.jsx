import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Subjects from './Subjects';


const ClassHero = () => {


  useGSAP(() => {

    gsap.fromTo('.anihero', { opacity: 0, y: 10 }, { opacity: 1, duration: 1, scale: 1, y: 0, stagger: 0.5 });
    gsap.fromTo('.heroimg', { opacity: 0, x: 50 }, { opacity: 1, duration: 1.5, scale: 1, x: 0, stagger: 0.5 });
  }, []);


  gsap.registerPlugin(useGSAP);

  return (
    <section className="hero" >
      <div className="heroContent">
        <h1 className="title anihero" >
          The choice of Today <br /> The change of tomorrow <br /> study Now!
        </h1>
        <p className="subtitle anihero">
          From Class 1 to Class 12, we offer a structured learning journey designed to match every student’s level. Each class section features age-appropriate lessons, engaging activities, and expert guidance to help learners strengthen their foundation and achieve academic excellence.
        </p>

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
          src="https://www.clever.com/wp-content/uploads/2024/02/LayeredSecurity-2.png"
          alt="Edora Platform Dashboard"
          className="dashboardImage"
        />
      </div>
    </section>
  );
};

export default ClassHero;
