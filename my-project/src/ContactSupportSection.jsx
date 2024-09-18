
import React, { useState } from 'react';
import './ContactSupportSection.css';

const ContactSupportSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Message Sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    }
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert("All fields are required!");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address!");
      return false;
    }
    return true;
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-form-container">
          <h2>Get in Touch</h2>
          <p className="contact-description">
            Reach out to us for inquiries or assistance. We are here to help with any questions or feedback you may have.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="contact-details-container">
          <div className="contact-details">
            <h3>Contact Information</h3>
            <p><strong>Address:</strong> Department of Consumer Affairs, Silicon Institute Of Technology, Sambalpur, Odisha, India</p>
            <p><strong>Email:</strong> support@consumeraffairs.gov.in</p>
            <p><strong>Phone:</strong> +91-123-456-7890</p>
          </div>
          

          <div className="contact-map">
            <h3>Our Location</h3>
            <iframe
              title="office-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27945.97843754442!2d84.04579535147752!3d21.579993817820366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd36a0e95d2b%3A0x35d85502c1aabe64!2sMinistry%20of%20Consumer%20Affairs%2C%20Food%20and%20Public%20Distribution!5e0!3m2!1sen!2sin!4v1631997198214!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupportSection;
