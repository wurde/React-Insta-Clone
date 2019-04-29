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
    <div className="jsx-App">
      <h1>Instagram</h1>
      <components.SearchBar />
      {initial_data.map(data => <components.PostContainer key={data.id} data={data} /> )}
    </div>
  )
}

/**
 * Export component
 */

module.exports = App
