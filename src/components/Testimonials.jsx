import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Edora has transformed how we manage our educational resources. It's intuitive and saves us countless hours.",
      author: "Sarah Johnson",
      role: "School Principal",
      school: "Lincoln High School"
    },
    {
      id: 2,
      quote: "The single sign-on feature is a game-changer. Our teachers and students love how easy it is to access all their tools.",
      author: "Michael Chen",
      role: "IT Director",
      school: "Tech Academy"
    },
    {
      id: 3,
      quote: "The analytics dashboard helps us make data-driven decisions to improve student engagement and performance.",
      author: "Emily Rodriguez",
      role: "Department Head",
      school: "DPS Bal School"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="title">What Educators Say</h2>
        <p className="subtitle">
          Join thousands of schools that trust Edora to manage their educational technology
        </p>
        
        <div className="grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial cardani">
              <div className="content">
                <blockquote className="quote">
                  "{testimonial.quote}"
                </blockquote>
                <div className="author">
                  <div className="info">
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}</span>
                    <span>{testimonial.school}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
