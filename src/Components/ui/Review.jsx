// Review.jsx
import React from 'react';
import './review.css';

const Review = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mazen EF",
      role: "University Student",
      avatar: "/Homepageimgs/avatar1.webp",
      rating: 5,
      text: "ReadyUp changed my shopping experience! I can order lunch and pick it up after browsing stores. No more choosing between food and shopping time."
    },
    {
      id: 2,
      name: "Abdelrahman",
      role: "Mall Regular",
      avatar: "/Homepageimgs/avatar2.webp",
      rating: 5,
      text: "The notifications are perfect. I know exactly when to head to the restaurant. Saves so much time compared to waiting in line!"
    },
    {
      id: 3,
      name: "Mariam",
      role: "Student",
      avatar: "/Homepageimgs/avatar3.webp",
      rating: 5,
      text: "Love how I can order between classes and pick up when it's ready. The app is super easy to use and restaurants are always on time."
    }
  ];

  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <h2>What Students Say</h2>
        <p>Join thousands of happy users saving time every day</p>
      </div>

      <div className="reviews-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="review-card">
            <div className="stars">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className="review-text">{testimonial.text}</p>
            <div className="review-footer">
              <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
              <div className="user-info">
                <strong>{testimonial.name}</strong>
                <span className="role">{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;