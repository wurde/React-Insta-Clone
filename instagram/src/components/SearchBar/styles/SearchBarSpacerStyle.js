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

let SearchBarSpacerStyle = styled.div(() => `
  background-color: #262626;
  height: 28px;
  margin: 0 16px;
  width: 1px;
`)

/**
 * Export style component
 */

module.exports = SearchBarSpacerStyle
