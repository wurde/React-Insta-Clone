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

function SearchBar() {
  return (
    <div className="jsx-SearchBar">
      <div className="row">
        <div className="col-3">
          <i className="fab fa-instagram fa-2x"></i> |
          <h2>Instagram</h2>
        </div>
        <div className="col-6">
          <i className="fas fa-search fa-2x"></i> Search
        </div>
        <div className="col-3">
          <i className="far fa-compass fa-2x"></i>
          <i className="far fa-heart fa-2x"></i>
          <i className="far fa-user fa-2x"></i>
        </div>
      </div>
    </div>
  )
}

/**
 * Export component
 */

module.exports = SearchBar
