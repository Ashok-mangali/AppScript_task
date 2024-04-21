import React, { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

import './index.css';

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <footer>
      <div className='subscribe-section'>
        <div className='search-section'>
          <h2>BE THE FIRST TO KNOW</h2>
          <p>sign up for updates from App Scrip</p>
          <div className='search-container'>
            <input className='search-input' type='search' placeholder='Enter your email..' />
            <button className='search-button' type='button'>SUBSCRIBE</button>
          </div>
        </div>
        <div className='call-us'>
          <h3>CONTACT US</h3>
          <p>+$$ 221 133 5380</p>
          <p>coustomercare@appscrip.com</p>
          <h3>CURRENCY</h3>
          <p className='currency-img-container'><img className='currency-img' src="/images/Currency_Flag.png" alt="currency-type" />*USD</p>
          <span>transaction will be completed in Euros and a currency reference is available on hover</span>
        </div>
      </div>
      <hr />
      <div className='quick-link'>
        {isMobile ? (
          <>
          <select>
            <optgroup label="App Scrip">
              <option>App Scrip</option>
              <option>Stories</option>
              <option>Artisans</option>
              <option>Boutiques</option>
              <option>Contact Us</option>
              <option>EU Compliances Docs</option>
            </optgroup>
            </select>
              
            <select>
            <optgroup label="QUICK LINKS">
              <option>QUICK LINKS</option>
              <option>Join/Login as a Seller</option>
              <option>Payment & Pricing</option>
              <option>Return & Refunds</option>
              <option>FAQs</option>
              <option>Privacy Policy</option>
              <option>Terms & Conditions</option>
            </optgroup>
          </select>
          </>
        ) : (
          <>
            <div>
              <h3>App Scrip</h3>
              <p>About us</p>
              <p>Stories</p>
              <p>Artisans</p>
              <p>Boutiques</p>
              <p>Contact Us</p>
              <p>EU Compliances Docs</p>
            </div>
            <div>
              <h3>QUICK LINKS</h3>
              <p>Orders & Shipping</p>
              <p>Join/Login as a Seller</p>
              <p>Payment & Pricing</p>
              <p>Return & Refunds</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </>
        )}
        <div className="follow-us">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com">
              <FaInstagram className="icon" />
            </a>
            <a href="https://www.linkedin.com">
              <FaLinkedin className="icon" />
            </a>
          </div>
          <div className="payment-methods">
            <p>Accepted Payment Methods:</p>
            <div className="payment-icons">
              <img src="/images/payment-visa.png" alt="Visa" />
              <img src="/images/payment-iphone.png" alt="Iphone" />
              <img src="/images/payment-paypal.png" alt="PayPal" />
              <img src="/images/payment-gpay.png" alt="Gpay" />
              <img src="/images/payment-amex.png" alt="Amex" />
            </div>
          </div>
        </div>
      </div>
      <p className='copy-rights'>Copyrights &copy; 2024 App Scrip. All rights reserved </p>
    </footer>
  );
};

export default Footer;