import React from "react";
import "./Subjects.css"; 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const subjects = [
  { name: "Mathematics", description: "Numbers, logic, and problem solving." },
  { name: "English",  description: "Language, literature, and communication skills." },
  { name: "Science",  description: "Explore the world of physics, chemistry, and biology." },
  { name: "History",  description: "Learn about the past and human civilization." },
  { name: "Geography",  description: "Discover the Earth and its wonders." },

];

function Subjects() {

  
  return (
    <div className="subjects-container">
      <h2 className="subjects-title">Explore Our Subjects</h2>
      <div className="subjects-grid">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="subject-card"
            
          >
            <h3>{subject.name}</h3>
            <p>{subject.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subjects;
