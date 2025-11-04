// Footer.jsx
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Brand */}
        <div className="footer-brand">
          <h3 className="brand-name">ReadyUp</h3>
          <p className="brand-tagline">
            Order while you shop. Pick it up when it's ready.
          </p>
        </div>

        {/* Middle: Links */}
        <div className="footer-links">
          <div className="link-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#restaurants">Restaurants</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
            </ul>
          </div>

          <div className="link-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Right: Social */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.847.07 3.242.148 4.684.655 5.766 1.304 1.083.649 1.824 1.493 2.288 2.424.464.931.676 1.835.725 2.854.032.665.037.733.037 2.236v.106c0 1.503-.005 1.571-.037 2.236-.049 1.019-.261 1.923-.725 2.854-.464.931-1.205 1.775-2.288 2.424-1.082.649-2.524 1.156-5.766 1.304-1.263.058-1.643.07-4.847.07v0zm0-2.163h-4.055c-1.263 0-1.643.012-2.348.048-1.985.093-3.153.526-4.033 1.114C.566 2.214 0 3.07 0 4.095v15.81c0 1.025.566 1.881 1.564 2.484.88.588 2.048 1.021 4.033 1.114 1.263.058 1.643.07 2.348.07h4.055c1.263 0 1.643-.012 2.348-.07 1.985-.093 3.153-.526 4.033-1.114 1.001-.603 1.564-1.459 1.564-2.484v-15.81c0-1.025-.566-1.881-1.564-2.484-.88-.588-2.048-1.021-4.033-1.114-1.263-.058-1.643-.07-2.348-.07zm0 17.69c-4.67 0-7.44-2.77-7.44-7.44s2.77-7.44 7.44-7.44 7.44 2.77 7.44 7.44-2.77 7.44-7.44 7.44zm0-13.83c-3.66 0-6.39 2.73-6.39 6.39s2.73 6.39 6.39 6.39 6.39-2.73 6.39-6.39-2.73-6.39-6.39-6.39zm0 10.35c-2.72 0-4.92-2.2-4.92-4.92s2.2-4.92 4.92-4.92 4.92 2.2 4.92 4.92-2.2 4.92-4.92 4.92z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 00-2.127-3.027 9.858 9.858 0 00-7.86 2.882 9.858 9.858 0 00-2.882 7.86 10 10 0 003.027 7.86 10 10 0 007.86 2.882 9.858 9.858 0 007.86-2.882 10 10 0 003.027-7.86 9.858 9.858 0 00-2.882-7.86zM12 11.001v2h10v-2h-10zm0-4.001v2h10v-2h-10zm0-4v2h10v-2h-10z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line & Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2025 ReadyUp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;