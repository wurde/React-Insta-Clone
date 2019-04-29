/**
 * Dependencies
 */

const React = require('react')
const components = require('./components/index')
const initial_data = require('./initial_data')
const PropTypes = require('prop-types')

/**
 * Import component styles
 */

require('./App.scss')

/**
 * Define component
 */

function App() {
  return (
    <div className="jsx-App">
      <components.SearchBar />
      <components.PostContainer posts={initial_data} />
    </div>
  )
}

/**
 * Export component
 */

module.exports = App
