/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Define component
 */

function CommentForm(props) {
  return (
    <section className="jsx-CommentForm">
      <styles.CommentFormStyle>
        <form className="d-flex justify-content-between" onSubmit={props.addNewComment}>
          <input type="hidden" name="post_index" value={props.postIndex}></input>
          <input id={'postIndex' + props.postIndex} type="text" name="comment" placeholder="Add a comment..."></input>
          <button type="submit">Post</button>
        </form>
      </styles.CommentFormStyle>
    </section>
  )
}

/**
 * Export component
 */

module.exports = CommentForm
