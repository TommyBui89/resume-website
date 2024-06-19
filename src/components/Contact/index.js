import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import './ContactStyle.css';
import StarsCanvas from "../StarCanvas/StarCanvas.jsx";
import EarthCanvas from "../EarthCanvas/EarthCanvas.jsx";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Tommy Bui",
          from_email: form.email,
          to_email: "buitommy998@gmail.com",
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("Failed to send message:", error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contact-section">
      <StarsCanvas />
      <div className="contact-form-container">
        <p>Get in touch</p>
        <h3>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <label>
            Your Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              aria-label="Your Name"
              required
            />
          </label>
          <label>
            Your Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              aria-label="Your Email"
              required
            />
          </label>
          <label>
            Your Message
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              aria-label="Your Message"
              required
            />
          </label>
          <button type="submit">{loading ? "Sending..." : "Send"}</button>
        </form>
      </div>
      <div className="earth-canvas-container">
        <EarthCanvas />
      </div>
    </div>
  );
};

export default Contact;
