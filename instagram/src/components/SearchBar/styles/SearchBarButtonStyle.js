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

let SearchBarButtonStyle = styled.div(() => `
  button {
    background-color: inherit;
    border: inherit;
    cursor: pointer;
    padding: 10px;
    outline: none;
  }
`)

/**
 * Export style component
 */

module.exports = SearchBarButtonStyle
