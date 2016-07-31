
import React from 'react'
import Grid from '..'


class App extends React.Component {
  render () {
    return (
      <Grid p={3}>
        <h1>Hello react-css-grid</h1>
        <div>
          <Grid sm={6} md={3} p={2}>
            sm6 md3
          </Grid>
          <Grid sm={6} md={3} p={2}>
            sm6 md3
          </Grid>
          <Grid sm={6} md={3} p={2}>
            sm6 md3
          </Grid>
          <Grid sm={6} md={3} p={2}>
            sm6 md3
          </Grid>
        </div>
      </Grid>
    )
  }
}

export default App

