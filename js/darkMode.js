// Get the theme toggle buttons
const themeToggleBtns = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
const lightIcons = document.querySelectorAll('#theme-toggle-light-icon, #theme-toggle-light-icon-mobile');
const darkIcons = document.querySelectorAll('#theme-toggle-dark-icon, #theme-toggle-dark-icon-mobile');

// Function to set theme and update icons
function setTheme(isDark) {
    if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
        lightIcons.forEach(icon => icon.classList.remove('hidden'));
        darkIcons.forEach(icon => icon.classList.add('hidden'));
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
        lightIcons.forEach(icon => icon.classList.add('hidden'));
        darkIcons.forEach(icon => icon.classList.remove('hidden'));
    }
}

// Initialize theme based on localStorage or system preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setTheme(true);
} else {
    setTheme(false);
}

// Add click event listeners to toggle buttons
themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const isDark = !document.documentElement.classList.contains('dark');
        setTheme(isDark);
    });
}); 