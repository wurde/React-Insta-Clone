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

  focusPost = (post_id) => {
    console.log(`focusPost ${post_id}`)
    this.setState({
      posts: this.state.posts.filter(post => post.id === post_id)
    })
  }

  render() {
    return (
      <div className="jsx-App">
        <components.AuthenticatedPostsPage
          filterPosts={this.filterPosts}
          focusPost={this.focusPost}
          posts={this.state.posts} />
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = App
