/**
 * Dependencies
 */

const React = require('react')
const PropTypes = require('prop-types')
const Post = require('./Post')
const styled_components = require('styled-components')

/**
 * Constants
 */

const styled = styled_components.default

/**
 * Define style components
 */

let PostContainerStyle = styled.div(() => `
  background-color: #FAFAFA;
`)

let PostContainerSectionStyle = styled.section(() => `
  padding-top: 60px;
`)

/**
 * Define component
 */

function PostContainer(props) {
  return (
    <div className="jsx-PostContainer">
      <PostContainerStyle>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <PostContainerSectionStyle>
                {props.posts.map((post, index) => <Post key={post.id} post={post} postIndex={index} current_user={props.current_user} /> )}
              </PostContainerSectionStyle>
            </div>
          </div>
        </div>
      </PostContainerStyle>
    </div>
  )
}

/**
 * Validate prop types
 */

PostContainer.propTypes = {
  posts: PropTypes.array.isRequired
}

/**
 * Export component
 */

module.exports = PostContainer
