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

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>About Me</h1>
        <p>Learn more about my background and experience as a Web Developer.</p>
      </div>
    </section>

    <!-- About Me Details Section -->
    <section class="about-details">
      <div class="container">
        <h2>My Journey</h2>
        <p>
          I am a passionate web developer from Punjab, India. With experience in
          creating responsive websites and web applications, I am proficient in
          both front-end and back-end technologies.
        </p>
        <p>
          My interest in web development began during my university days, where
          I explored various technologies, from HTML/CSS to advanced frameworks
          like Vue.js and Node.js. Over the years, I have worked on various
          projects, developing websites that are user-friendly, fast, and
          visually appealing.
        </p>
        <p>
          When I am not coding, I enjoy learning new technologies, contributing
          to open-source projects, and sharing knowledge with others in the web
          development community.
        </p>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills">
      <div class="container">
        <h2>Skills & Technologies</h2>
        <div class="skills-list">
          <div class="skill-item">
            <h3>Front-End</h3>
            <p>HTML, CSS, JavaScript, Vue.js</p>
          </div>
          <div class="skill-item">
            <h3>Back-End</h3>
            <p>Node.js, Express.js, MongoDB</p>
          </div>
          <div class="skill-item">
            <h3>Design</h3>
            <p>UI/UX, Figma, Adobe XD</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 Prabhdeep Singh. All Rights Reserved.</p>
        <div class="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  layout: 'default',
  head() {
    return {
      title: 'Prabhdeep Singh - About Me',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About page of Prabhdeep Singh, Web Developer',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Navbar Styles */
.navbar {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 15px 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.navbar:hover {
  background-color: rgba(0, 0, 0, 0.9);
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
  padding: 0;
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

/* Hero Section */
.hero {
  background-color: #2d3436;
  color: white;
  padding: 100px 20px;
  text-align: center;
  position: relative;
  margin-top: 70px;
}

.hero-content h1 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 18px;
  margin-bottom: 30px;
}

/* About Me Section */
.about-details {
  background-color: #ffffff;
  padding: 50px 20px;
}

.about-details .container {
  text-align: center;
}

.about-details h2 {
  font-size: 32px;
  margin-bottom: 20px;
}

.about-details p {
  font-size: 18px;
  margin-bottom: 20px;
}

/* Skills Section */
.skills {
  background-color: #f4f4f4;
  padding: 50px 20px;
}

.skills .container {
  text-align: center;
}

.skills h2 {
  font-size: 32px;
  margin-bottom: 20px;
}

.skills-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.skill-item {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 30%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.skill-item h3 {
  font-size: 24px;
  margin-bottom: 15px;
}

.skill-item p {
  font-size: 16px;
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
  .skills-list {
    flex-direction: column;
  }

  .skill-item {
    width: 100%;
  }

  .navbar-links {
    display: none;
  }

  .navbar-logo {
    font-size: 20px;
  }
}
</style>
