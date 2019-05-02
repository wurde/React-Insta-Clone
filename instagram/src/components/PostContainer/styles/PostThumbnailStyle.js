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

let PostThumbnailStyle = styled.div(() => `
  clip-path: circle(20px at center);
`)

/**
 * Export style component
 */

module.exports = PostThumbnailStyle
