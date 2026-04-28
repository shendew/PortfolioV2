import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Loader2, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import './Contact.css';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    // EmailJS credentials from environment variables
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        toast.success('Message sent successfully!');
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error('Email sending error:', error);
        toast.error('Something went wrong. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="container section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="heading-md">Get In <span className="text-gradient">Touch</span></h2>

        <div className="contact-wrapper">
          <motion.div
            className="contact-info glass-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="contact-title">Let's Connect</h3>
            <p className="text-body" style={{ marginBottom: '2rem' }}>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Kegalle, Sri Lanka</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>dev.shehara@gmail.com</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+94 764247796</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            className="contact-form glass-panel"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="input-group">
              <label htmlFor="user_name">Name</label>
              <input type="text" id="user_name" name="user_name" placeholder="John Doe" required />
            </div>

            <div className="input-group">
              <label htmlFor="user_email">Email</label>
              <input type="email" id="user_email" name="user_email" placeholder="john@example.com" required />
            </div>

            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="How can I help you?" required></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader2 size={20} className="spinner" style={{ animation: 'spin 2s linear infinite' }} /> : <><Send size={20} /> Send Message</>}
            </button>

          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
