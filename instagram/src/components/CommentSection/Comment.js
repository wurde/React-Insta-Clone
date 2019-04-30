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
  console.log("props", props)
  return (
    <div className="jsx-Comment">
      <strong>{props.comment.username}</strong> {props.comment.text}<br/>
      <button className="jsx-Comment__button" onClick={props.removeComment} data-comment-index={props.index}>x</button>
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
