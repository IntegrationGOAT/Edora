import React from "react";
import "./Class.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Class() {
  const classes = Array.from({ length: 12 }, (_, i) => i + 1); 



  return (
    <div className="class-container">
      <h2 className="class-title">Choose Your Class</h2>
      <div className="class-grid">
        {classes.map((cls) => (
          <div key={cls} className="class-card">
            <h3>Class {cls}</h3>
            <p>Learn and grow with curated lessons for Class {cls} students.</p>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Class;
