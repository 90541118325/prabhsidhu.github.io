<template>
  <div>
    <header class="header">
      <div class="logo">
        <h1>My Portfolio</h1>
      </div>
      <!-- Only Mobile Menu -->
      <div class="burger-menu" @click="toggleMenu">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </div>
    </header>

    <!-- Mobile Navigation Menu (shown when burger icon is clicked) -->
    <div v-if="menuOpen" class="mobile-nav">
      <ul class="mobile-nav-list">
        <li><NuxtLink to="/" class="mobile-nav-link">Home</NuxtLink></li>
        <li><NuxtLink to="/about" class="mobile-nav-link">About</NuxtLink></li>
        <li><NuxtLink to="/portfolio" class="mobile-nav-link">Portfolio</NuxtLink></li>
        <li><NuxtLink to="/blog" class="mobile-nav-link">Blog</NuxtLink></li>
        <li><NuxtLink to="/contact" class="mobile-nav-link">Contact</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
/* Header Styles */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2d3436;
  padding: 20px 40px;
  color: white;
  position: relative;
}

.logo h1 {
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 1px;
}

/* Mobile Menu */
.burger-menu {
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
}

.burger-line {
  width: 30px;
  height: 4px;
  background-color: white;
  border-radius: 2px;
}

/* Mobile Nav */
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.mobile-nav-list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
}

.mobile-nav-link {
  text-decoration: none;
  color: white;
  font-size: 24px;
  font-weight: 500;
  padding: 15px 30px;
  background-color: #2d3436;
  border-radius: 10px;
  transition: background-color 0.3s, transform 0.3s;
}

.mobile-nav-link:hover {
  background-color: #f39c12;
  transform: translateY(-2px);
}

.mobile-nav-link:active {
  transform: translateY(2px);
}

/* Media Query for Mobile */
@media (max-width: 768px) {
  .burger-menu {
    display: flex;
  }
}

@media (min-width: 769px) {
  /* Hide the entire navbar and burger menu on large screens */
  .burger-menu {
    display: none;
  }

  .mobile-nav {
    display: none;
  }
}
</style>
