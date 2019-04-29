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
    <div className="jsx-CommentForm">
      <form>
        <input type="text" name="comment" placeholder="Add comment"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

/**
 * Export component
 */

module.exports = CommentForm
