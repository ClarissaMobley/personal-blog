//Switch function
const switchTheme = () => {
    const rootEl = document.documentElement
    let dataTheme = rootEl.getAttribute('data-theme'),
        newTheme
    
        newTheme = (dataTheme === 'light') ? 'dark' : 'light'

        rootEl.setAttribute('data-theme', newTheme)
}

// Add event listener for the theme switcher
document.querySelector('.theme-switcher').addEventListener('click', switchTheme)