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

const withAuthenticate = ProtectedPage => LoginPage => {
  let username = window.localStorage.getItem('username')

  if (username) {
    return class extends Component {
      render() {
        return <ProtectedPage {...this.props} />
      }
    }
  } else {
    return class extends Component {
      render() {
        return <LoginPage {...this.props} />
      }
    }
  }
}

/**
 * Export component
 */

module.exports = withAuthenticate
