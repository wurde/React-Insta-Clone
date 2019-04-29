/**
 * Dependencies
 */

const React = require('react')
const components = require('./components/index')
const initial_data = require('./initial_data')

/**
 * Import component styles
 */

require('./App.scss')

/**
 * Define component
 */

function App() {
  return (
    <div className="App">
      <h1>Instagram</h1>
      <components.SearchBar />
      <components.PostContainer />
    </div>
  )
}

/**
 * Export component
 */

module.exports = App
