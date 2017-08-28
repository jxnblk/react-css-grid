import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import Grid from '../src'

const Col = styled.div`
  box-shadow: inset 0 0 0 1px cyan;
`

storiesOf('Grid', module)
  .add('Demo', () => (
    <Grid width={256}>
      <Col>
        <h1>React CSS Grid</h1>
      </Col>
      <Col>
        <h2>With varying height columns</h2>
        <p>React layout component for simple grids using CSS Grid</p>
      </Col>
      <Col>
        <p>React layout component for simple grids using CSS Grid</p>
      </Col>
      <Col>
        <p>React layout component for simple grids using CSS Grid</p>
      </Col>
    </Grid>
  ))
