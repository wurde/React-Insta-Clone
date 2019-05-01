/**
 * Dependencies
 */

const React = require('react')
const moment = require('moment')
const PropTypes = require('prop-types')
const Comment = require('./Comment')
const CommentForm = require('./CommentForm')

/**
 * Constants
 */

const Component = React.Component

/**
 * Import component styles
 */

require('./CommentSection.scss')

/**
 * Define component
 */

class CommentSection extends Component {
  state = {
    current_user: this.props.current_user,
    comments: this.props.comments
  }

  addNewComment = event => {
    event.preventDefault()

    // TODO look at using callback method to avoid (overwrite *complications).
    this.setState({
      comments: [...this.state.comments, {
        username: this.state.current_user,
        text: event.target[1].value
      }]
    })

    event.target[1].value = ""
  }

  removeComment = event => {
    event.preventDefault()

    if (window.confirm("Are you sure?")) {
      let new_comments = [...this.state.comments]
      new_comments.splice(event.target.dataset.commentIndex, 1)
      this.setState({ comments: new_comments })
    }
  }

  render() {
    return (
      <div className="jsx-CommentSection">
        {this.state.comments.map((comment, index) => <Comment key={index} index={index} comment={comment} removeComment={this.removeComment} />)}

        <div className="jsx-CommentSection__timestamp">
          <time>{moment(this.props.postedAt, 'MMMM Do YYYY, hh:mm:ss a').fromNow()}</time>
        </div>

        <CommentForm postIndex={this.props.postIndex} addNewComment={this.addNewComment} />
      </div>
    )
  }
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
