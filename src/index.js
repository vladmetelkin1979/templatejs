import Navigate from './Navigate'
import './index.css'

// create navigation for App
const nav = new Navigate()

document.body.appendChild(nav.createNav())

//router initialization
nav.routerInit()

//create footer for App
const footer = document.createElement('footer')
const home = '<h3>home</h3>', production = '<h3>production</h3>', about = '<h3>about</h3>', contact = '<h3>contact</h3>'
footer.innerHTML = home + production + about + contact
document.body.appendChild(footer)



















































