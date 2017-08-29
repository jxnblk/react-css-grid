import React from 'react'
import Grid from 'react-css-grid'
import { Box } from 'grid-styled'
import Col from './Col'

const App = props => (
  <Box p={3}>
    <Grid>
      <Col>
        <h1>React CSS Grid</h1>
      </Col>
      <Col>
        <p>
          React layout component based on CSS Grid Layout and built with styled-components
        </p>
      </Col>
    </Grid>
  </Box>
)

export default App
