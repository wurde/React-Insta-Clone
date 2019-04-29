/**
 * Dependencies
 */

const React = require('react')
const PropTypes = require('prop-types')
const CommentSection = require('../CommentSection/CommentSection')

/**
 * Import component styles
 */

require('./Post.scss')

/**
 * Define component
 */

function Post(props) {
  return (
    <div className="jsx-Post">
      {JSON.stringify(props.post)}
      <CommentSection comments={props.post.comments} />
    </div>
  )
}

/**
 * Validate prop types
 */

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
  })
}

/**
 * Export component
 */

module.exports = Post
