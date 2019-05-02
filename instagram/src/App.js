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

  filterPosts = event => {
    event.preventDefault()

    let query = event.target.elements[0].value

    this.setState({
      posts: this.state.posts.filter(post => post.username === query)
    })
  }

  render() {
    return (
      <div className="jsx-App">
        <components.AuthenticatedPostsPage
          filterPosts={this.filterPosts}
          posts={this.state.posts} />
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = App
