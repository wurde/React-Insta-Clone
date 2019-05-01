/**
 * Dependencies
 */

const React = require('react')

/**
 * Import component styles
 */

require('./LoginForm.scss')

/**
 * Define component
 */

function LoginForm(props) {
  function handleOnSubmit(event) {
    event.preventDefault()
    console.log("handleOnSubmit")
    // TODO add username to localStorage
  }

  return (
    <div className="jsx-LoginForm">
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="username"></input>
        <input type="password" name="password"></input>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

/**
 * Export component
 */

module.exports = LoginForm
