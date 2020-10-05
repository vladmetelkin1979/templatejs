import home from './../media/home.jpg'

function Home(contentPage) {
    const head = '<h2>Home page</h2>'
    const content = '<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>'
    const img = `<img src = ${home} alt="lorem">`
    return `${contentPage.innerHTML = head + content + img}`
}

export default Home