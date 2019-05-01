/**
 * Dependencies
 */

const React = require('react')
const withAuthenticate = require('./withAuthenticate')
const PostContainer = require('../PostContainer/PostContainer')

/**
 * Define component
 */

const AuthenticatedPostContainer = withAuthenticate(PostContainer)

/**
 * Export component
 */

module.exports = AuthenticatedPostContainer
