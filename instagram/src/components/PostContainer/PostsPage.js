/**
 * Dependencies
 */

const React = require('react')
const SearchBar = require('../SearchBar/SearchBar')
const PostContainer = require('./PostContainer')

/**
 * Import component styles
 */

require('./PostsPage.scss')

/**
 * Define component
 */

function PostsPage(props) {
  return (
    <div className="jsx-PostsPage">
      <SearchBar filterPosts={props.filterPosts} />
      <PostContainer posts={props.posts} current_user={props.current_user} />
    </div>
  )
}

/**
 * Export component
 */

module.exports = PostsPage