// 🐨 you'll need to import react and createRoot from react-dom up here
import * as React from 'react'
import {createRoot} from 'react-dom/client'
// 🐨 you'll also need to import the Logo component from './components/logo'
import {Logo} from './components/logo'

/* 🐨 create an App component here and render the logo, the title ("Bookshelf"),
a login button, and a register button. */
/* 🐨 for fun, you can add event handlers for both buttons to alert that the
button was clicked */
function App() {
  return (
    <div>
      <Logo width="80" height="80"></Logo>
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => alert('you clicked login!')}>login</button>
      </div>
      <div>
        <button onClick={() => alert('you clicked register!')}>register</button>
      </div>
    </div>
  )
}

// 🐨 use createRoot to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')
const rootDomElement = document.getElementById('root')
const reactRoot = createRoot(rootDomElement)
reactRoot.render(<App />)
export {reactRoot}
