import React from "react";
import "./Courses.css";

const courses = [
  {
    title: "Interactive Learning",
    description:
      "Engage with video lessons, quizzes, and real-time doubt solving to make studying fun and effective.",
    color: "#4F46E5",
    image: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
  },
  {
    title: "Personalized Study Plans",
    description:
      "Learn at your own pace with adaptive study paths tailored to your strengths and goals.",
    color: "#10B981",
    image: "https://cdn-icons-png.flaticon.com/512/4781/4781517.png",
  },
  {
    title: "Live Classes & Mentorship",
    description:
      "Attend live sessions from expert teachers and get one-on-one mentorship to stay on track.",
    color: "#F59E0B",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Comprehensive Test Series",
    description:
      "Practice with regular tests, instant feedback, and performance analytics to master every subject.",
    color: "#EF4444",
    image: "https://cdn-icons-png.flaticon.com/512/4206/4206620.png",
  },
];

function Courses() {
  return (
    <div className="courses-container">
      <h2 className="courses-title">Our Courses</h2>
      <p className="courses-subtitle">
        Empowering students through engaging, personalized, and results-driven learning.
      </p>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div
            key={index}
            className="course-card"
            style={{ backgroundColor: course.color }}
          >
            <img src={course.image} alt={course.title} className="course-image" />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
