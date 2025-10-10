import React from 'react';
import styles from './Testimonials.module.css';

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
      school: "Summit Elementary"
    }
  ];

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>What Educators Say</h2>
        <p className={styles.subtitle}>
          Join thousands of schools that trust Edora to manage their educational technology
        </p>
        
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonial}>
              <div className={styles.content}>
                <blockquote className={styles.quote}>
                  "{testimonial.quote}"
                </blockquote>
                <div className={styles.author}>
                  <div className={styles.info}>
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
