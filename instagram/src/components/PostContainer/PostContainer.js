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
      {props.posts.map(post => <Post key={post.id} post={post} /> )}
    </div>
  )
}

/**
 * Export component
 */

module.exports = PostContainer
