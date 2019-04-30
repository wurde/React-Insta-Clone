/**
 * Dependencies
 */

const React = require('react')
const PropTypes = require('prop-types')
const CommentSection = require('../CommentSection/CommentSection')

/**
 * Constants
 */

const Component = React.Component

/**
 * Import component styles
 */

require('./Post.scss')

/**
 * Define component
 */

class Post extends Component {
  state = {
    likes: this.props.post.likes
  }

  addNewLike = () => {
    this.setState({ likes: this.state.likes + 1 })
  }

  focusCommentForm = () => {
    let element = document.querySelector('#postIndex' + this.props.postIndex)
    if (element) { element.focus() }
  }

  render() {
    return (
      <article className="jsx-Post">
        <header className="jsx-Post__header">
          <div className="row">
            <div className="col-12 d-flex align-items-center">
              <img src={this.props.post.thumbnailUrl} width="40px" className="jsx-Post__thumbnail" />
              <span className="jsx-Post__username">{this.props.post.username}</span>
            </div>
          </div>
        </header>

        <div className="row">
          <div className="col-12">
            <img src={this.props.post.imageUrl} width="100%" />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <section className="jsx-Post__actionbar">
              <button onClick={this.addNewLike} className="jsx-Post__actionbar--red">
                <i className="far fa-heart fa-2x jsx-Post__action"></i>
              </button>
              <button onClick={this.focusCommentForm}>
                <i className="far fa-comment fa-2x fa-flip-horizontal jsx-Post__action"></i>
              </button>
            </section>

            <section className="jsx-Post__likes">
              <p>{this.state.likes} likes</p>
            </section>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <CommentSection postIndex={this.props.postIndex} comments={this.props.post.comments} postedAt={this.props.post.timestamp} current_user={this.props.current_user} />
          </div>
        </div>
      </article>
    )
  }
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
