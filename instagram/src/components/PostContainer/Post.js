/**
 * Dependencies
 */

const React = require('react')
const PropTypes = require('prop-types')
const CommentSection = require('../CommentSection/CommentSection')

/**
 * Import component styles
 */

require('./Post.scss')

/**
 * Define component
 */

function Post(props) {
  return (
    <div className="jsx-Post">
      {JSON.stringify(props.post)}
      <CommentSection comments={props.post.comments} />
    </div>
  )
}

/**
 * Export component
 */

module.exports = Post
