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
        <components.LoginPage />
      </div>
    )
  }
}
// <components.AuthenticatedPostsPage
//   filterPosts={this.filterPosts}
//   posts={this.state.posts}
//   current_user={this.state.current_user} />

/**
 * Export component
 */

module.exports = App
