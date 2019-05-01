/**
 * Dependencies
 */

const React = require('react')

/**
 * Constants
 */

const Component = React.Component

/**
 * Define component
 */

const withAuthenticate = ProtectedPage =>
  class extends Component {
    render() {
      return <ProtectedPage />
    }
  }

/**
 * Export component
 */

module.exports = withAuthenticate
