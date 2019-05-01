/**
 * Dependencies
 */

const React = require('react')
const LoginForm = require('./LoginForm')

/**
 * Import component styles
 */

require('./LoginPage.scss')

/**
 * Define component
 */

function LoginPage(props) {
  return (
    <div className="jsx-LoginPage">
      <LoginForm />
    </div>
  )
}

/**
 * Export component
 */

module.exports = LoginPage
