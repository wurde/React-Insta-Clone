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

let CommentButtonStyle = styled.div(() => `
  button {
    background-color: inherit;
    border: inherit;
    outline: none;
    cursor: pointer;
    color: #DDD;

    &:hover {
      color: #AAA;
    }
  }
`)

/**
 * Export style component
 */

module.exports = CommentButtonStyle
