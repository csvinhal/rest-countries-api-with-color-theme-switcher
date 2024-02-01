const currentTheme = window.localStorage.getItem('theme')

if (!currentTheme) document.documentElement.classList.add(currentTheme)