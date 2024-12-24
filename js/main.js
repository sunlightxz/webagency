document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    // Dark mode functionality
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleDarkIconMobile = document.getElementById('theme-toggle-dark-icon-mobile');
    const themeToggleLightIconMobile = document.getElementById('theme-toggle-light-icon-mobile');

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
        themeToggleLightIconMobile.classList.remove('hidden');
        document.documentElement.classList.add('dark');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
        themeToggleDarkIconMobile.classList.remove('hidden');
        document.documentElement.classList.remove('dark');
    }

    function toggleDarkMode() {
        // Toggle theme
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }

        // Toggle icons
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');
        themeToggleDarkIconMobile.classList.toggle('hidden');
        themeToggleLightIconMobile.classList.toggle('hidden');
    }

    // Add click event listeners to both desktop and mobile toggle buttons
    document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);
    document.getElementById('theme-toggle-mobile').addEventListener('click', toggleDarkMode);
});

// Footer functionality
document.addEventListener('DOMContentLoaded', () => {
    const subscribeBtn = document.getElementById('subscribeBtn');
    const emailInput = document.getElementById('emailInput');
  
    subscribeBtn.addEventListener('click', () => {
      const email = emailInput.value.trim();
      if (email && isValidEmail(email)) {
        alert('Thank you for subscribing!');
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address');
      }
    });
  
    emailInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        subscribeBtn.click();
      }
    });
  });
  
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }




  document.querySelectorAll('.icon-item').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        const category = icon.getAttribute('data-category');
        const title = icon.getAttribute('data-title');
        const description = icon.getAttribute('data-description');

        document.getElementById('category').textContent = category;
        document.getElementById('title').textContent = title;
        document.getElementById('description').textContent = description;
    });

    icon.addEventListener('mouseleave', () => {
        document.getElementById('category').textContent = 'PPC';
        document.getElementById('title').textContent = 'Technical SEO Audit';
        document.getElementById('description').textContent = 'We are well known within the industry for our technical capabilities due to our industry leading software.';
    });
});
