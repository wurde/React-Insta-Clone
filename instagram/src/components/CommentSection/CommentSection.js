/**
 * Dependencies
 */

const React = require('react')

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
      {props.comment.username}<br/>
      {props.comment.text}
    </div>
  )
}

/**
 * Export component
 */

module.exports = CommentSection
