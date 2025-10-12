import React, { useEffect, useState } from "react";
import "./Results.css";

const results = [
  {
    name: "Aarav Sharma",
    achievement: "Scored 98% in CBSE Class 10 Boards",
    image: "https://cdn-icons-png.flaticon.com/512/219/219970.png",
  },
  {
    name: "Diya Patel",
    achievement: "Ranked #3 in State-level Science Olympiad",
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
  },
  {
    name: "Rohan Mehta",
    achievement: "Scored 96% in Class 12 Commerce Stream",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
  },
  {
    name: "Ananya Gupta",
    achievement: "Selected for National Coding Championship Finals",
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
  },
];

function Results() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % results.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="results-container">
      <h2 className="results-title">Outstanding Results by Our Students</h2>
      <p className="results-subtitle">
        Our learners have achieved excellence through dedication, guidance, and our innovative learning system.
      </p>

      <div className="results-slider">
        {results.map((student, i) => (
          <div
            key={i}
            className={`result-card ${i === index ? "active" : ""}`}
          >
            <img src={student.image} alt={student.name} className="result-image" />
            <h3>{student.name}</h3>
            <p>{student.achievement}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
