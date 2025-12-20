import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.send(
      'service_kqbqq5q',     // Service ID
      'template_tzzc7bi',    // Template ID
      formData,              // Now using correct keys: name, email, message
      'Fw3IgpoNsQtPvQMgT'    // Public Key
    )
    .then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      console.error('Failed to send email:', error);
      setStatus('error');
    });
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      padding: '1rem',
    }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: '#111',
        color: 'white',
        padding: '2rem',
        borderRadius: '8px',
        maxWidth: '400px',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <h2>Contact Me</h2>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />

        <button type="submit" disabled={status === 'sending'} style={{
          backgroundColor: '#0f0',
          border: 'none',
          padding: '0.75rem 1.5rem',
          fontWeight: 'bold',
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
        }}>
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>

        {status === 'success' && <p style={{ color: '#0f0', marginTop: '1rem' }}>Message sent yerrrrrrr successfully!</p>}
        {status === 'error' && <p style={{ color: 'red', marginTop: '1rem' }}>Failed to send message. Please try again.</p>}

        <button
          type="button"
          onClick={onClose}
          style={{
            marginTop: '1rem',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          Close
        </button>
      </form>
    </div>
  );
}
