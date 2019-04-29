/**
 * Dependencies
 */

const React = require('react')
const PropTypes = require('prop-types')
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
      <strong>{props.comment.username}</strong> {props.comment.text}<br/>
    </div>
  )
}

/**
 * Validate prop types
 */

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })
}

/**
 * Export component
 */

module.exports = Comment
