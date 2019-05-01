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
    window.localStorage.setItem('username', event.target.elements[0].value)
    window.location.reload()
  }

  return (
    <div className="jsx-LoginForm">
      <div className="row">
        <div className="col-12">
          <h1>Login</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <form onSubmit={handleOnSubmit}>
            <div className="row">
              <div className="col-12">
                <input type="text" name="username" placeholder="username" className="jsx-LoginForm__input" required></input>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <input type="password" name="password" placeholder="secret" className="jsx-LoginForm__input"></input>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <button type="submit">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

/**
 * Export component
 */

module.exports = LoginForm
