/**
 * Dependencies
 */

const React = require('react')
const components = require('./components/index')
const initial_data = require('./initial_data')

/**
 * Constants
 */

const Component = React.Component

/**
 * Import component styles
 */

require('./App.scss')

/**
 * Define component
 */

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    this.setState({ posts: initial_data })
  }

  render() {
    return (
      <div className="jsx-App">
        <components.SearchBar />
        <components.PostContainer posts={this.state.posts} />
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = App
