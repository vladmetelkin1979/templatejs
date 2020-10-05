import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Production from './Pages/Production'

const links = [
  {
    'href': '#home',
    'navName': 'Home',
    'mod': Home
  },
  {
    'href': '#production',
    'navName': 'Production',
    'mod': Production
  },
  {
    'href': '#about',
    'navName': 'About',
    'mod': About
  },
  {
    'href': '#contact',
    'navName': 'Contact',
    'mod': Contact
  }
]

class Navigate {
  // wrapper of the navigation
  constructor() {
    this.navigation = document.createElement('nav')
    this.links = links
  }

  // links of routes
  router(contentPage) {
    window.location.hash.toString() === '' ? contentPage.innerHTML = this.links[0].mod(contentPage) : new Error('no page')
    for (let index = 0; index < this.links.length; index++) {
      for (const key in this.links[index]) {
        if (this.links[index].hasOwnProperty(key)) {
          window.location.hash === this.links[index][key] ? contentPage.innerHTML = this.links[index].mod(contentPage) : new Error('no page')
        }
      }
    }
  }
  // // create HTML for links  
  createNav() {
    const ul = document.createElement('ul')
    for (let index = 0; index < this.links.length; index++) {
      let li = document.createElement('li'), a = document.createElement('a')
      li.appendChild(a)
      for (const key in this.links[index]) {
        if (this.links[index].hasOwnProperty(key)) {
          key === 'href' ? a.href = this.links[index][key] : new Error('no href')
          key === 'navName' ? a.innerHTML = this.links[index][key] : new Error('no navName')
        }
      }
      ul.appendChild(li)
    }
    this.navigation.appendChild(ul)
    return this.navigation
  }
  // // initialization and listening events the location.hash
  routerInit() {
    if (this.navigation.children) {
      const contentPage = document.createElement('div')
      contentPage.className = 'column'
      document.body.appendChild(contentPage)
      window.addEventListener("hashchange", () => {
        this.router(contentPage)
      })
      window.addEventListener("load", () => {
        this.router(contentPage)
      })
    } else {
      new Error('no navigation list')
    }
  }
}

export default Navigate