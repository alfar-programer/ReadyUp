// UserContactPage.jsx
import React from 'react';
import "../../Styles/global.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAddLocationAlt } from "react-icons/md";
import { MdEmail } from "react-icons/md";

import './UserContactPage.css'; // 👈 Import the new CSS

const UserContactPage = () => {
  return (
    <section id="user-contact-page" className="contact-page">
      <div className='main-container'>
        <h1>Get in <span>Touch</span></h1>
        <p>
          Have a question or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className='container-contact'>
          {/* Left: Form */}
          <div className='form-card'>
            <h2>Send us a message</h2>
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="phone">Phone (optional)</label>
              <input type="tel" id="phone" name="phone" />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>

              <button type="submit" className='submit-btn'>Send Message</button>
            </form>
          </div>

          {/* Right: Contact Info & Hours */}
          <div className='box-info'>
            {/* Contact Info */}
            <div className='info-card'>
              <h2>Contact Information</h2>
              <div className='info-item'>
                <div className='icon'><FaPhoneAlt /></div>
                <div>
                  <h3>Phone</h3>
                  <p>+20 1098 1659 67</p>
                </div>
              </div>
              <div className='info-item'>
                <div className='icon'><MdEmail /></div>
                <div>
                  <h3>Email</h3>
                  <p>Mazenaboelelaelfar@gmail.com</p>
                </div>
              </div>
              <div className='info-item'>
                <div className='icon'><MdAddLocationAlt /></div>
                <div>
                  <h3>Location</h3>
                  <p>Giza gardien october</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className='info-card2'>
              <h2>Business Hours</h2>
                <div className='business-hours2'>
                <div className='days-container'>
                  <p><span>Monday - Friday</span></p>
                  <p><span>Saturday - Sunday</span></p>
                  </div>
                <div className='hours-container'>
              <p><span>9:00 AM - 6:00 PM</span></p>
              <p><span>10:00 AM - 4:00 PM</span></p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserContactPage;