import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import Grid from './src'

test('renders', t => {
  const a = render(<Grid />).toJSON()
  t.snapshot(a)
})

test('renders with width prop', t => {
  const a = render(<Grid width={320} />).toJSON()
  t.snapshot(a)
})

test('renders with string width prop', t => {
  const a = render(<Grid width='40em' />).toJSON()
  t.snapshot(a)
})

test('renders with gap prop', t => {
  const a = render(<Grid gap={16} />).toJSON()
  t.snapshot(a)
})

test('renders with string gap prop', t => {
  const a = render(<Grid gap='1em' />).toJSON()
  t.snapshot(a)
})
