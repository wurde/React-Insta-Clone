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

let LoginFormButtonStyle = styled.div(() => `
  button {
    background-color: #DBDBDB;
    border: inherit;
    cursor: pointer;
    padding: 10px;
    outline: none;
    border-radius: 5px;
    width: 190px;
    font-weight: 600;

    &:hover {
      background-color: #cbcbcb;
    }

    &:active {
      background-color: #ababab;
    }
  }
`)

/**
 * Export style component
 */

module.exports = LoginFormButtonStyle
