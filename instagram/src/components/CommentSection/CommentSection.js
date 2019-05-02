/**
 * Dependencies
 */

const React = require('react')
const moment = require('moment')
const PropTypes = require('prop-types')
const Comment = require('./Comment')
const CommentForm = require('./CommentForm')
const styles = require('./styles/index')

/**
 * Constants
 */

const Component = React.Component

/**
 * Define component
 */

class CommentSection extends Component {
  state = {
    comments: this.props.comments
  }

  addNewComment = event => {
    event.preventDefault()

    // TODO look at using callback method to avoid (overwrite *complications).
    this.setState({
      comments: [...this.state.comments, {
        username: window.localStorage.getItem('username'),
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

        <styles.CommentSectionTimestampStyle>
          <time>{moment(this.props.postedAt, 'MMMM Do YYYY, hh:mm:ss a').fromNow()}</time>
        </styles.CommentSectionTimestampStyle>

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
