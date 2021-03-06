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

let SearchBarInputStyle = styled.div(() => `
  input {
    background-color: #FAFAFA;
    border-radius: 5px;
    border: 1px solid #DBDBDB;
    color: #999;
    font-weight: 300;
    padding: 7px;
    text-align: center;

    border: none;
    height: 30px;
    outline: none;
    border-radius: 3px;
    padding: 5px 10px;

    &:focus {
      border: 1px solid #acd4fa;
    }
  }
`)

/**
 * Export style component
 */

module.exports = SearchBarInputStyle
