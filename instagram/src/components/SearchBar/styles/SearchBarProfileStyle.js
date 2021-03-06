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

let SearchBarProfileStyle = styled.div(() => `
  margin-left: 15px;
  cursor: pointer;
`)

/**
 * Export style component
 */

module.exports = SearchBarProfileStyle
