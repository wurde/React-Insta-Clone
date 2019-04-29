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
      {props.comment.username}<br/>
      {props.comment.text}
    </div>
  )
}

/**
 * Validate prop types
 */

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })
}

/**
 * Export component
 */

module.exports = Comment
