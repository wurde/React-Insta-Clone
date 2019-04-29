/**
 * Dependencies
 */

const React = require('react')
const components = require('./components/index')

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
