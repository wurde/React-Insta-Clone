/**
 * Dependencies
 */

const React = require('react')
const withAuthenticate = require('./withAuthenticate')
const PostsPage = require('../PostContainer/PostsPage')

/**
 * Define component
 */

const AuthenticatedPostsPage = withAuthenticate(PostsPage)

/**
 * Export component
 */

module.exports = AuthenticatedPostsPage
