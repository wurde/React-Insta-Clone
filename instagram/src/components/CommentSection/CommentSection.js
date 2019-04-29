/**
 * Dependencies
 */

const React = require('react')
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
 * Export component
 */

module.exports = CommentSection
