/**
 * Dependencies
 */

const React = require('react')
const moment = require('moment')
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
      <div className="jsx-CommentSection__timestamp">
        <time>{moment(props.postedAt).format('YYYY')}</time>
      </div>
      <CommentForm />
    </div>
  )
}

/**
 * Validate prop types
 */

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired,
  postedAt: PropTypes.string.isRequired
}

/**
 * Export component
 */

module.exports = CommentSection
