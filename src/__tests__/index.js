import {screen, act} from '@testing-library/react'

test('renders the app', () => {
  const root = document.createElement('div')
  root.id = 'root'
  document.body.append(root)

  let reactRoot
  act(() => {
    reactRoot = require('..').root
  })

  screen.getByTitle('Bookshelf')
  screen.getByRole('heading', {name: /bookshelf/i})
  screen.getByRole('button', {name: /log ?in/i})
  screen.getByRole('button', {name: /register/i})

  // cleanup
  act(() => reactRoot.unmount())
  document.body.removeChild(root)
})
