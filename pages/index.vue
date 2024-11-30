<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar">
      <div class="container">
        <router-link to="pages/index.vue/" class="navbar-logo">Prabhdeep Singh</router-link>
        <div class="navbar-toggle" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class="navbar-links" :class="{ 'active': menuActive }">
          <li><router-link to="pages/index.vue/">Home</router-link></li>
          <li><router-link to="pages/index.vue/about">About</router-link></li>
          <li><router-link to="pages/index.vue/blog">Blog</router-link></li>
          <li><router-link to="pages/index.vue/contact">Contact</router-link></li>
        </ul>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Hey! Welcome to My Portfolio</h1>
        <p>I'm Prabhdeep Sidhu, a Web Developer with a passion for creating stunning websites.</p>
        <NuxtLink to="pages/index.vue/about" class="cta-button">Learn More About Me</NuxtLink>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="feature-item">
          <h3>Web Development</h3>
          <p>Building responsive and scalable websites using the latest technologies.</p>
        </div>
        <div class="feature-item">
          <h3>UI/UX Design</h3>
          <p>Creating user-friendly and attractive designs with a focus on usability.</p>
        </div>
      </div>
    </section>

    <!-- About Me Section -->
    <section class="about">
      <div class="container">
        <h2>About Me</h2>
        <p>I am a passionate web developer, originally from Punjab, India. I specialize in building web applications using modern technologies and love working with both front-end and back-end technologies.</p>
        <NuxtLink to="/about" class="cta-button">More About Me</NuxtLink>
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
      menuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
  },
  head() {
    return {
      title: 'Prabhdeep Singh - Web Developer',
      meta: [
        { hid: 'description', name: 'description', content: 'Portfolio of Prabhdeep Singh, Web Developer' },
      ],
    };
  },
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

.navbar-toggle {
  display: none; /* Initially hidden on large screens */
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;
  width: 30px;
}

.bar {
  height: 4px;
  width: 100%;
  background-color: #fff;
  border-radius: 2px;
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

.navbar-links.active {
  display: block; /* Show the menu when active */
}

/* Hero Section */
.hero {
  background-color: #2d3436;
  color: white;
  padding: 100px 20px;
  text-align: center;
  position: relative;
  margin-top: 70px; /* To avoid overlap with fixed navbar */
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

.cta-button {
  padding: 15px 30px;
  background-color: #f39c12;
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #e67e22;
}

.cta-button:active {
  transform: translateY(2px);
}

/* Features Section */
.features {
  background-color: #f4f4f4;
  padding: 50px 20px;
}

.features .container {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.feature-item {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 30%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.feature-item h3 {
  font-size: 24px;
  margin-bottom: 15px;
}

.feature-item p {
  font-size: 16px;
}

/* About Me Section */
.about {
  background-color: #ffffff;
  padding: 50px 20px;
}

.about .container {
  text-align: center;
}

.about h2 {
  font-size: 32px;
  margin-bottom: 20px;
}

.about p {
  font-size: 18px;
  margin-bottom: 20px;
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
    display: none; /* Hide menu by default */
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 10px;
    border-radius: 5px;
    width: 200px;
  }

  .navbar-links li {
    margin-left: 0;
    margin-bottom: 10px;
  }

  .navbar-links a {
    font-size: 18px;
  }

  .navbar-toggle {
    display: flex; /* Show hamburger menu on small screens */
  }

  .features .container {
    flex-direction: column;
    align-items: center;
  }

  .feature-item {
    width: 80%;
    margin-bottom: 20px;
  }

  .navbar-links.active {
    display: flex; /* Show menu when active */
  }
}

</style>
