'use strict'

/**
 * Dependencies
 */

const styled_components = require('styled-components')

/**
 * Constants
 */

const styled = styled_components.default

/**
 * Define style component
 */

let CommentStyle = styled.div(() => `
  padding: 0 16px;
`)

/**
 * Export style component
 */

module.exports = CommentStyle
