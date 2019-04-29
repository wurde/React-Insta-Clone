/**
 * Dependencies
 */

const React = require('react')
const CommentForm = require('./CommentForm')

/**
 * Import component styles
 */

require('./Comment.scss')

/**
 * Define component
 */

function Comment(props) {
  return (
    <div className="jsx-Comment">
      {props.comment.username}<br/>
      {props.comment.text}
    </div>
  )
}

/**
 * Export component
 */

module.exports = Comment
