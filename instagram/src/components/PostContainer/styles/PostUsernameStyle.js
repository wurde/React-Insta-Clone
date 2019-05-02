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

let PostUsernameStyle = styled.div(() => `
  margin-left: 16px;
`)

/**
 * Export style component
 */

module.exports = PostUsernameStyle
