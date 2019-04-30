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
    <article className="jsx-Post">
      <header className="jsx-Post__header">
        <div className="row">
          <div className="col-12 d-flex align-items-center">
            <img src={props.post.thumbnailUrl} width="40px" className="jsx-Post__thumbnail" />
            <span className="jsx-Post__username">{props.post.username}</span>
          </div>
        </div>
      </header>

      <div className="row">
        <div className="col-12">
          <img src={props.post.imageUrl} width="100%" />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <section className="jsx-Post__actionbar">
            <i className="far fa-heart fa-2x jsx-Post__action"></i>
            <i className="far fa-comment fa-2x fa-flip-horizontal jsx-Post__action"></i>
          </section>

          <section className="jsx-Post__likes">
            <p>{props.post.likes} likes</p>
          </section>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <CommentSection comments={props.post.comments} postedAt={props.post.timestamp} />
        </div>
      </div>
    </article>
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
