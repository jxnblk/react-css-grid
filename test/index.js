
import test from 'ava'
import Grid, { createGrid, createStyles } from '../index'

test('exports Grid', t => {
  t.is(typeof Grid, 'function')
})

test('exports createGrid', t => {
  t.is(typeof createGrid, 'function')
})

test('exports createStyles', t => {
  t.is(typeof createStyles, 'function')
})

