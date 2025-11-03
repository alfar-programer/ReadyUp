import React from 'react'
import './hero.css'


const Hero = () => {
  return (
    <section>
      <div className="hero-container">
        <div className='left-hero'>
          <div className='container-text'>
            <div className='hero-text'>
              <h1>Order while you shop. <span> Pick it up when it's ReadyUp!</span></h1>
              <p>Skip the wait, shop in peace. Order from your favorite restaurants and we'll notify you when your food is ready.</p>
            </div>
            <div className='hero-buttons'>
              <button className='btn-hero btn-hero-primary'>Get the App</button>
              <button className='btn-hero btn-hero-secondary'>Learn More</button>
            </div>

            <div className='hero-analytics'>
              <div className='analytics-item'>
                <h2>500K+</h2>
                <p>Downloads</p>
              </div>
              <div className='analytics-item'>
                <h2>1M+</h2>
                <p>Orders Served</p>
              </div>
              <div className='analytics-item'>
                <h2>4.8</h2>
                <p>User Rating</p>
              </div>
            </div>
          </div>

        </div>

      
          <div className='hero-image right-hero'>
            <img
              src="/Homepageimgs/Hero-section.png"
              alt="Hero"
              className="hero-img"
            />
          </div>
        </div>

    </section>
  )
}

export default Hero