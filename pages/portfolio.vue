<template>
  <div>
    <header class="header">
      <h1>My Portfolio</h1>
      <nav>
        <ul class="nav-list">
          <li><NuxtLink to="/" class="nav-link">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="nav-link">About</NuxtLink></li>
          <li><NuxtLink to="/portfolio" class="nav-link">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/blog" class="nav-link">Blog</NuxtLink></li>
          <li><NuxtLink to="/contact" class="nav-link">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main class="main-content">
      <h2 class="main-title">Some of My Work</h2>
      <div class="portfolio-grid">
        <div class="portfolio-card">
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
        </div>
        <div class="portfolio-card">
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
        </div>
        <div class="portfolio-card">
          <h3>Project 3</h3>
          <p>Description of Project 3.</p>
        </div>
      </div>
    </main>
    <footer class="footer">
      <p>&copy; 2024 My Portfolio. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
  .header {
    background: linear-gradient(to right, #00c6ff, #0072ff);
    padding: 20px;
    color: white;
    text-align: center;
  }
  .nav-list {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .nav-link {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
  }
  .nav-link:hover {
    color: #ff7f50;
  }
  .main-content {
    text-align: center;
    padding: 40px 20px;
    background: #f9f9f9;
  }
  .main-title {
    font-size: 36px;
    margin-bottom: 10px;
  }
  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  .portfolio-card {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .footer {
    background: #2f2f2f;
    color: white;
    text-align: center;
    padding: 20px;
  }
</style>
