const currentTheme = window.localStorage.getItem('theme')
console.log('passou aqui')

if (!currentTheme) document.documentElement.classList.add(currentTheme)