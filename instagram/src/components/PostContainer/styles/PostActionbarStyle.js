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

let PostActionbarStyle = styled.div(() => `
  padding: 0px 16px;
  margin-top: 8px;
`)

/**
 * Export style component
 */

module.exports = PostActionbarStyle
