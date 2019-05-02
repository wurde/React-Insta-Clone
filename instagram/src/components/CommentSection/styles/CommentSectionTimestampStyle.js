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

let CommentSectionTimestampStyle = styled.div(() => `
  padding: 0px 16px;
  margin-top: 8px;
  font-size: 14px;
  color: #999;
  text-transform: uppercase;
`)

/**
 * Export style component
 */

module.exports = CommentSectionTimestampStyle
