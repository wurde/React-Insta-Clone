/**
 * Dependencies
 */

const React = require('react')

/**
 * Import component styles
 */

require('./SearchBar.scss')

/**
 * Define component
 */

function SearchBar(props) {
  function logoutUser() {
    window.localStorage.removeItem('username')
    window.location.reload()
  }

  return (
    <header className="jsx-SearchBar">
      <div className="container">
        <div className="row jsx-SearchBar--padding">
          <div className="col-3 d-flex align-items-center">
            <i className="fab fa-instagram fa-2x"></i>
            <div className="jsx-SearchBar__spacer"></div>
            <h3>Instagram</h3>
          </div>

          <div className="col-6 d-flex align-items-center justify-content-center">
            <form onSubmit={props.filterPosts}>
              <input type="text" name="q" placeholder="Search" className="jsx-SearchBar__input"></input>
              <button type="submit"><i className="fa fa-search"></i></button>
            </form>
          </div>

          <div className="col-3 d-flex align-items-center">
            <i className="far fa-compass fa-2x jsx-SearchBar__explore"></i>
            <i className="far fa-heart fa-2x jsx-SearchBar__activity"></i>
            <i className="far fa-user fa-2x jsx-SearchBar__profile" onClick={logoutUser}></i>
          </div>
        </div>
      </div>
    </header>
  )
}

/**
 * Export component
 */

module.exports = SearchBar
