<template>
    <div>
      <!-- Navbar -->
      <nav class="navbar">
        <div class="container">
          <router-link to="/" class="navbar-logo">Prabhdeep Singh</router-link>
          <ul class="navbar-links">
            <li><router-link to="https://90541118325.github.io/prabhsidhu.github.io/pages/index.vue">Home</router-link></li>
            <li><router-link to="https://90541118325.github.io/prabhsidhu.github.io/pages/about.vue">About</router-link></li>
            <li><router-link to="https://90541118325.github.io/prabhsidhu.github.io/pages/blog.vue" class="active-link">Blog</router-link></li>
            <li><router-link to="https://90541118325.github.io/prabhsidhu.github.io/pages/contact">Contact</router-link></li>
          </ul>
        </div>
      </nav>
  
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Welcome to My Blog</h1>
          <p>Stay updated with my latest thoughts and articles.</p>
          <NuxtLink to="https://90541118325.github.io/prabhsidhu.github.io/about" class="cta-button">Learn More About Me</NuxtLink>
        </div>
      </section>
  

      






















    <main class="main-content">
        <h2 class="main-title">Living Style: Punjab vs Canada</h2>
        <div class="blog-posts">
          <article class="post-card">
            <h3>Living in Punjab vs Canada: Two Worlds, One Heart</h3>
            <p class="post-date">Posted on November 30, 2024</p>
            <p>Living in Punjab, India, and Canada offers two vastly different lifestyles, each with its own charm. Both places hold their unique appeal, but they come with contrasting environments, traditions, and ways of life. Let’s take a journey through the heart of Punjab and compare it with life in Canada — one a vibrant, bustling region steeped in culture and history, the other a peaceful land of multicultural diversity and modernity.</p>
  
            <h4>The Heartbeat of Punjab: Tradition Meets Warmth</h4>
            <p>Punjab, often called the "Land of Five Rivers," is a place where tradition and hospitality reign supreme. The lifestyle here is rooted in strong community values and close-knit family ties. People in Punjab live in extended families, often sharing a home with multiple generations under one roof. Meals are a family affair, with traditional dishes like "Sarson da Saag and Makki di Roti" enjoyed together. Life is often busy with festivals like Baisakhi, Diwali, and Lohri marking the passage of time, and the vibrant street markets always buzzing with life.</p>
  
            <p>Homes are often grand, with large courtyards, giving space for open-air activities and traditional rituals. The pace of life is generally slower in rural areas, while cities like Amritsar and Chandigarh showcase a blend of urban hustle and rural peace. People enjoy long evenings on terraces with chai and pakoras, engaging in lively conversations under the starry skies.</p>
  
            <h4>The Canadian Dream: Space, Privacy, and Diversity</h4>
            <p>In Canada, life is different but equally inviting. The lifestyle here is more individualistic, focused on personal space and privacy. With vast open spaces, especially in provinces like British Columbia and Ontario, Canadians enjoy large homes with expansive backyards, perfect for outdoor activities like barbeques, hiking, and skiing in the winter months. The idea of community still holds value, but here it’s often centered around the shared interests of multicultural groups, making Canada one of the most welcoming places in the world for immigrants.</p>
  
            <p>Canada’s cities like Toronto, Vancouver, and Montreal are modern hubs of diversity, where people from all over the world live harmoniously. The multicultural environment gives rise to a fusion of food, music, and traditions from every corner of the globe. The Canadian lifestyle focuses on work-life balance, with many people enjoying ample vacation time, and the emphasis is on outdoor activities like hiking, skiing, and ice skating in the winter, a stark contrast to Punjab’s warmer weather and outdoor gatherings.</p>
  
            <h4>Contrast and Harmony</h4>
            <p>While Punjab offers a fast-paced, rich cultural atmosphere with a strong connection to tradition and community, Canada offers a more serene lifestyle with a high standard of living, marked by the beauty of nature and a fusion of global cultures. Both places celebrate life in their own ways, with Punjab’s vibrant festivals and strong cultural ties, and Canada’s warm, diverse communities and stunning landscapes.</p>
  
            <p>In the end, whether you prefer the lively, bustling streets of Punjab or the peaceful, diverse spaces of Canada, both lifestyles offer invaluable experiences. They each represent a unique way of embracing the world, where the people, culture, and lifestyle are woven together in beautiful harmony.</p>
          </article>
        </div>
      </main>









      <!-- Blog Posts Section -->
      <!-- <section class="blog-posts">
        <div class="container">
          <h2>Latest Posts</h2>
          <div class="blog-post">
            <h3>Understanding Web Development</h3>
            <p class="post-meta">Published on November 30, 2024 | <a href="#">Tech</a>, <a href="#">Web Development</a></p>
            <p>Web development is an ever-evolving field. In this article, I will share insights into the technologies shaping the web...</p>
            <NuxtLink to="/blog/understanding-web-development" class="cta-button">Read More</NuxtLink>
          </div>
          <div class="blog-post">
            <h3>The Importance of UI/UX Design</h3>
            <p class="post-meta">Published on November 25, 2024 | <a href="#">Design</a>, <a href="#">UI/UX</a></p>
            <p>UI/UX design is more than just aesthetics; it's about creating seamless and intuitive experiences for users...</p>
            <NuxtLink to="/blog/importance-of-ui-ux-design" class="cta-button">Read More</NuxtLink>
          </div>
        </div>
      </section> -->
  
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
    head() {
      return {
        title: 'Prabhdeep Singh - Blog',
        meta: [
          { hid: 'description', name: 'description', content: 'Prabhdeep Singh’s blog where you can find articles on web development, UI/UX design, and more.' },
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
  
  .navbar-links .active-link {
    color: #f39c12; /* Active link color */
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
  
  /* Blog Posts Section */
  .blog-posts {
    background-color: #f4f4f4;
    padding: 50px 20px;
  }
  
  .blog-posts .container {
    text-align: center;
  }
  
  .blog-posts h2 {
    font-size: 32px;
    margin-bottom: 40px;
  }
  
  .blog-post {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .blog-post h3 {
    font-size: 24px;
    margin-bottom: 15px;
  }
  
  .blog-post .post-meta {
    font-size: 14px;
    color: #888;
  }
  
  .blog-post .post-meta a {
    text-decoration: none;
    color: #f39c12;
  }
  
  .blog-post .post-meta a:hover {
    text-decoration: underline;
  }
  
  .blog-post p {
    font-size: 16px;
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
      display: none;
    }
  
    .navbar-logo {
      font-size: 20px;
    }
  }
  </style>
  
