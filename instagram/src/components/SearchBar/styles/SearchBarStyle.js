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

let SearchBarStyle = styled.div(() => `
  background-color: #FFF;
  border-bottom: 1px solid #DDD;
`)

/**
 * Export style component
 */

module.exports = SearchBarStyle
