// Packages
import React from 'react'
import ReactDOM from 'react-dom'

// Compiled Sass stylesheet
import './sass/app.sass'

// Application
import App from './components'

// Service worker
import * as sw from './sw'

/**
 * @file Application entry point
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

// Application will be rendered inside of <div id="root"></div>
ReactDOM.render(<App />, document.getElementById('root'))

/**
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * @see {@link https://bit.ly/CRA-PWA}
 */
sw.unregister()
