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

let CommentFormStyle = styled.div(() => `
  border-top: 1px solid #DDD;
  margin-top: 4px;
  padding: 20px 16px;

  input {
    border: none;
    width: 100%;
    height: 30px;
    outline: none;
    border-radius: 3px;
    padding: 5px 10px;
  }

  input:focus {
    border: 1px solid #acd4fa;
  }

  button {
    background-color: inherit;
    border: inherit;
    color: #3897f0;
    font-weight: 800;
    opacity: 0.4;
    cursor: pointer;
  }
`)

/**
 * Export style component
 */

module.exports = CommentFormStyle
