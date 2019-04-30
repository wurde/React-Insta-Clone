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
    posts: [],
    current_user: 'Andy'
  }

  componentDidMount() {
    this.setState({ posts: initial_data })
  }

  render() {
    return (
      <div className="jsx-App">
        <components.SearchBar />
        <components.PostContainer posts={this.state.posts} current_user={this.state.current_user} />
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = App
