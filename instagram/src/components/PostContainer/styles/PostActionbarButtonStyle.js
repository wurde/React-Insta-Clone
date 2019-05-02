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

let PostActionbarButtonStyle = styled.button(() => `
  background-color: inherit;
  border: inherit;
  cursor: pointer;
  outline: none;

  &:active {
    color: red;
  }
`)

/**
 * Export style component
 */

module.exports = PostActionbarButtonStyle
