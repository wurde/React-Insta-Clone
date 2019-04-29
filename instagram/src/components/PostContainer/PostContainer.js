/**
 * Dependencies
 */

const React = require('react')
const Post = require('./Post')

/**
 * Import component styles
 */

require('./PostContainer.scss')

/**
 * Define component
 */

function PostContainer(props) {
  return (
    <div className="jsx-PostContainer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <section class="jsx-PostContainer__section">
              {props.posts.map(post => <Post key={post.id} post={post} /> )}
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Export component
 */

module.exports = PostContainer
