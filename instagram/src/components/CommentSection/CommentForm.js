/**
 * Dependencies
 */

const React = require('react')

/**
 * Import component styles
 */

require('./CommentForm.scss')

/**
 * Define component
 */

function CommentForm(props) {
  return (
    <section className="jsx-CommentForm">
      <form className="d-flex justify-content-between" onSubmit={props.addNewComment}>
        <input type="hidden" name="post_index" value={props.postIndex}></input>
        <input type="text" name="comment" placeholder="Add a comment..."></input>
        <button type="submit">Post</button>
      </form>
    </section>
  )
}

/**
 * Export component
 */

module.exports = CommentForm
