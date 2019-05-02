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

let PostStyle = styled.div(() => `
  background-color: #FFF;
  border: 1px solid #DDD;
  text-align: left;
  margin-bottom: 60px;
  border-radius: 5px;
`)

/**
 * Export style component
 */

module.exports = PostStyle
