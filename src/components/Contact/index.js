import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion"; // Import Framer Motion
import emailjs from "@emailjs/browser";
import './ContactStyle.css';
import StarsCanvas from "../StarCanvas/StarCanvas.jsx";
import EarthCanvas from "../EarthCanvas/EarthCanvas.jsx";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" }); // Detects when in view

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
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.div
      className="contact-section"
      id="contact"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }} // Start hidden & moved down
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when scrolling in/out
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
    >
      <StarsCanvas />
      <motion.div
        className="contact-form-container"
        initial={{ opacity: 0, scale: 0.9 }} // Start faded & slightly smaller
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} // Animate in/out
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <p>Get in touch</p>
        <h3>Contact</h3>
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
              aria-label="Your Message"
              required
            />
          </label>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "Sending..." : "Send"}
          </motion.button>
        </form>
      </motion.div>
      <motion.div
        className="earth-canvas-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} // Animates when in view
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <EarthCanvas />
      </motion.div>
    </motion.div>
  );
};

export default Contact;