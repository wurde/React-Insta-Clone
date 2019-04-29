/**
 * Dependencies
 */

const React = require('react')
const PropTypes = require('prop-types')
const Comment = require('./Comment')
const CommentForm = require('./CommentForm')

/**
 * Import component styles
 */

require('./CommentSection.scss')

/**
 * Define component
 */

function CommentSection(props) {
  return (
    <div className="jsx-CommentSection">
      {props.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
      <CommentForm />
    </div>
  )
}

/**
 * Validate prop types
 */

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired
}

/**
 * Export component
 */

module.exports = CommentSection
