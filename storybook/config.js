import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { injectGlobal } from 'styled-components'
import Grid from '../src'

injectGlobal([], {
  '*': {
    boxSizing: 'border-box'
  },
  body: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    lineHeight: 1.5,
    margin: 0
  }
})

addDecorator(story => (
  <div>
    {story()}
  </div>
))

const req = require.context('.', true, /\.js$/)

const load = () => {
  req.keys().forEach(req)
}

configure(load, module)
