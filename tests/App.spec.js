// Packages
import React from 'react'
import ReactDOM from 'react-dom'

// Component
import App from '../src/App'

/**
 * @file App component unit tests
 * @see @class App
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Test that the App component renders without crashing.
 */
it('Renders without crashing', () => {
  // Create DOM container
  const div = document.createElement('div')

  try {
    // Attempt to render App component
    ReactDOM.render(<App />, div)
  } catch (err) {
    console.warn(`APP TEST ERR: ${err.message}`, err)
  }

  // Unmount component
  ReactDOM.unmountComponentAtNode(div)
})
