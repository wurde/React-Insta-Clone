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

let PostLikesStyle = styled.div(() => `
  padding: 0px 16px;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 500;
`)

/**
 * Export style component
 */

module.exports = PostLikesStyle
