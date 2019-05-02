/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

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
      <styles.LoginFormStyle>
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
                  <styles.LoginFormInputStyle>
                    <input type="text" name="username" placeholder="username" className="jsx-LoginForm__input" required></input>
                  </styles.LoginFormInputStyle>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <styles.LoginFormInputStyle>
                    <input type="password" name="password" placeholder="secret" className="jsx-LoginForm__input"></input>
                  </styles.LoginFormInputStyle>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <styles.LoginFormButtonStyle>
                    <button type="submit">Login</button>
                  </styles.LoginFormButtonStyle>
                </div>
              </div>
            </form>
          </div>
        </div>
      </styles.LoginFormStyle>
    </div>
  )
}

/**
 * Export component
 */

module.exports = LoginForm
