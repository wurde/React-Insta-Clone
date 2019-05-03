/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

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
      <styles.SearchBarStyle>
        <div className="container">
          <styles.SearchBarPaddingStyle>
            <div className="row">
              <div className="col-3 d-flex align-items-center">
                <i className="fab fa-instagram fa-2x"></i>
                <styles.SearchBarSpacerStyle></styles.SearchBarSpacerStyle>
                <h3>Instagram</h3>
              </div>

              <div className="col-6 d-flex align-items-center justify-content-center">
                <form onSubmit={props.filterPosts} className="d-flex">
                  <styles.SearchBarInputStyle>
                    <input type="text" name="q" placeholder="Search"></input>
                  </styles.SearchBarInputStyle>
                  <styles.SearchBarButtonStyle>
                    <button type="submit"><i className="fa fa-search"></i></button>
                  </styles.SearchBarButtonStyle>
                </form>
              </div>

              <div className="col-3 d-flex align-items-center">
                <styles.SearchBarExploreStyle>
                  <i className="far fa-compass fa-2x jsx-SearchBar__explore"></i>
                </styles.SearchBarExploreStyle>
                <styles.SearchBarActivityStyle>
                  <i className="far fa-heart fa-2x jsx-SearchBar__activity"></i>
                </styles.SearchBarActivityStyle>
                <styles.SearchBarProfileStyle>
                  <i className="far fa-user fa-2x jsx-SearchBar__profile" onClick={logoutUser}></i>
                </styles.SearchBarProfileStyle>
              </div>
            </div>
          </styles.SearchBarPaddingStyle>
        </div>
      </styles.SearchBarStyle>
    </header>
  )
}

/**
 * Export component
 */

module.exports = SearchBar
