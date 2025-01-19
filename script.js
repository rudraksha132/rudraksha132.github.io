if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark-theme');
} else {
    document.documentElement.classList.add('light-theme');
}
