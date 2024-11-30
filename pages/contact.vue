<template>
    <div>
      <!-- Navbar -->
      <nav class="navbar">
        <div class="container">
          <router-link to="/" class="navbar-logo">Prabhdeep Singh</router-link>
          <ul class="navbar-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
      </nav>
  
      <!-- Contact Hero Section -->
      <section class="contact-hero">
        <div class="hero-content">
          <h1>Contact Me</h1>
          <p>Feel free to reach out to me for collaborations or inquiries.</p>
        </div>
      </section>
  
      <!-- Contact Form Section -->
      <section class="contact-form">
        <div class="container">
          <h2>Get in Touch</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="form.name" required placeholder="Your Name" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" required placeholder="Your Email" />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" required placeholder="Your Message"></textarea>
            </div>
            <button type="submit" class="cta-button">Send Message</button>
          </form>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <p>&copy; 2024 Prabhdeep Singh. All Rights Reserved.</p>
          <div class="social-links">
            <a href="#" target="_blank">Facebook</a>
            <a href="#" target="_blank">Twitter</a>
            <a href="#" target="_blank">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic here
        alert(`Message sent by ${this.form.name}`);
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      }
    },
    head() {
      return {
        title: 'Contact Prabhdeep Singh',
        meta: [
          { hid: 'description', name: 'description', content: 'Contact page for Prabhdeep Singh, Web Developer' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Navbar Styles */
  .navbar {
    background-color: rgba(0, 0, 0, 0.7); /* Transparent background */
    padding: 15px 20px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    transition: background-color 0.3s ease;
  }
  
  .navbar:hover {
    background-color: rgba(0, 0, 0, 0.9); /* Darkens on hover */
  }
  
  .navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .navbar-logo {
    font-size: 24px;
    font-weight: 700;
    color: #f39c12;
    text-decoration: none;
    letter-spacing: 1px;
  }
  
  .navbar-links {
    list-style: none;
    display: flex;
    margin: 0;
  }
  
  .navbar-links li {
    margin-left: 20px;
  }
  
  .navbar-links a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    font-weight: 500;
    transition: color 0.3s;
  }
  
  .navbar-links a:hover {
    color: #f39c12;
  }
  
  /* Contact Hero Section */
  .contact-hero {
    background-color: #2d3436;
    color: white;
    padding: 100px 20px;
    text-align: center;
    position: relative;
    margin-top: 70px; /* To avoid overlap with fixed navbar */
  }
  
  .contact-hero h1 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  
  .contact-hero p {
    font-size: 18px;
    margin-bottom: 30px;
  }
  
  /* Contact Form Section */
  .contact-form {
    background-color: #f4f4f4;
    padding: 50px 20px;
  }
  
  .contact-form .container {
    text-align: center;
  }
  
  .contact-form h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  
  .contact-form form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .contact-form .form-group {
    margin-bottom: 20px;
    width: 100%;
    max-width: 500px;
  }
  
  .contact-form label {
    font-size: 16px;
    margin-bottom: 5px;
  }
  
  .contact-form input, .contact-form textarea {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
  }
  
  .contact-form button {
    padding: 15px 30px;
    background-color: #f39c12;
    color: white;
    font-size: 16px;
    font-weight: 500;
    border-radius: 5px;
    transition: background-color 0.3s;
    border: none;
  }
  
  .contact-form button:hover {
    background-color: #e67e22;
  }
  
  .contact-form button:active {
    transform: translateY(2px);
  }
  
  /* Footer Section */
  .footer {
    background-color: #2d3436;
    color: white;
    padding: 30px 20px;
    text-align: center;
  }
  
  .footer p {
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .social-links a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    font-size: 20px;
  }
  
  .social-links a:hover {
    color: #f39c12;
  }
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    .navbar-links {
      display: none; /* Hide menu on smaller screens */
    }
  
    .navbar-logo {
      font-size: 20px;
    }
  }
  </style>
  