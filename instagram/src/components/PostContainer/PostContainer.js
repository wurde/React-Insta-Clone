/**
 * Dependencies
 */

const React = require('react')
const CommentSection = require('../CommentSection/CommentSection')

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
      {JSON.stringify(props.data)}
      {props.data.comments.map(comment => <CommentSection key={comment.id} comment={comment} />)}
    </div>
  )
}

/**
 * Export component
 */

module.exports = PostContainer
