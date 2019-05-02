/**
 * Dependencies
 */

const React = require('react')
const PropTypes = require('prop-types')
const CommentSection = require('../CommentSection/CommentSection')
const styles = require('./styles/index')

/**
 * Constants
 */

const Component = React.Component

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
        <styles.PostStyle>
          <header>
            <styles.PostHeaderStyle>
              <div className="row">
                <div className="col-12 d-flex align-items-center">
                  <styles.PostThumbnailStyle>
                    <img src={this.props.post.thumbnailUrl} width="40px" />
                  </styles.PostThumbnailStyle>
                  <styles.PostUsernameStyle>
                    <span>{this.props.post.username}</span>
                  </styles.PostUsernameStyle>
                </div>
              </div>
            </styles.PostHeaderStyle>
          </header>

          <div className="row">
            <div className="col-12">
              <img src={this.props.post.imageUrl} width="100%" />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <section>
                <styles.PostActionbarStyle>
                  <styles.PostActionbarButtonStyle>
                    <button onClick={this.addNewLike}>
                      <i className="far fa-heart fa-2x"></i>
                    </button>
                  </styles.PostActionbarButtonStyle>

                  <styles.PostActionbarButtonStyle>
                    <button onClick={this.focusCommentForm}>
                      <styles.PostActionStyle>
                        <i className="far fa-comment fa-2x fa-flip-horizontal"></i>
                      </styles.PostActionStyle>
                    </button>
                  </styles.PostActionbarButtonStyle>
                </styles.PostActionbarStyle>
              </section>

              <section>
                <styles.PostLikesStyle>
                  <p>{this.state.likes} likes</p>
                </styles.PostLikesStyle>
              </section>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <CommentSection postIndex={this.props.postIndex} comments={this.props.post.comments} postedAt={this.props.post.timestamp} current_user={this.props.current_user} />
            </div>
          </div>
        </styles.PostStyle>
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
