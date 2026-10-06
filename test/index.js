'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const useAckee = require('../src/index.js')

test('exports useAckee as default and named export', () => {
  assert.equal(typeof useAckee, 'function')
  assert.equal(useAckee.useAckee, useAckee)
})

test('works with React server rendering', () => {
  const Component = () => {
    useAckee('/', {
      server: 'https://example.com',
      domainId: 'domain-id',
    })

    return React.createElement('div', null, 'rendered')
  }

  const markup = renderToStaticMarkup(React.createElement(Component))

  assert.equal(markup, '<div>rendered</div>')
})
