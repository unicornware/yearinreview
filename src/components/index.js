// Packages
import React, { Component } from 'react'

// Components
import { Timeline } from './organisms'
/**
 * Component representing the web application.
 *
 * @class App
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class App extends Component {
  /**
   * Creates a new Year in Review application.
   *
   * @param {object} props - Component properties
   */
  constructor(props) {
    super(props)

    this.route = { path: '/:year', component: Timeline }

    this.state = {
      current: { url: '/', year: 2019 },
      error: null,
      info: null
    }
  }

  /**
   * If an error is caught, the component's internal error state will be
   * updated. Afterwards, the error will be logged with the prefix
   * '!TIMELINE-ERR =>'.
   *
   * @param {Error | FeathersError} error - Current error
   * @param {object} info - Error information
   * @returns {undefined}
   */
  componentDidCatch(error, info) {
    return this.setState({ error, info }, () =>
      console.error('!TIMELINE-ERR =>', error)
    )
  }

  /**
   * Based on the current window location, the timeline data will be fetched and
   * set as part of the internal Application state.
   *
   * A window listener that updates the internal state if the window is smaller
   * than or equal to 768px will also be attached.
   *
   * @async
   * @returns {undefined}
   */
  async componentDidMount() {

  }

  /**
   * Updates @see state.error and @see state.info .
   *
   * @param {FeathersError | Error} error - Exception that was thrown
   * @param {object} info - Error infomation+
   * @returns {undefined}
   */
  handle_error = (error, info = null) => {
    return this.setState({ error, info: (error.stack || info) || null })
  }

  /**
   * Renders a <main> element containing the Year in Review web application.
   *
   * @returns {HTMLElement} <main> element
   */
  render() {
    return (
      <main>
        <h1>Hello, World</h1>
      </main>
    )
  }

  /**
   * Updates the internal mobile state.
   *
   * @returns {undefined}
   */
  resize = () => this.setState({ mobile: $(window).width() <= 768 })
}
