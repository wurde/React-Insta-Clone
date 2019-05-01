/**
 * Dependencies
 */

const React = require('react')
const withAuthenticate = require('./withAuthenticate')
const PostsPage = require('../PostContainer/PostsPage')
const LoginPage = require('../Login/LoginPage')

/**
 * Define component
 */

const AuthenticatedPostsPage = withAuthenticate(PostsPage)(LoginPage)

/**
 * Export component
 */

module.exports = AuthenticatedPostsPage
