import contact from './../media/contact.jpg'

function Contact(contentPage) {
  const head = '<h2>Contact page</h2>'
  const content = '<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>'
  const img = `<img src = ${contact} alt="lorem">`
  return `${contentPage.innerHTML = head + content + img}`

}

export default Contact