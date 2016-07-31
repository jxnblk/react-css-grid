
import React from 'react'
import Grid from '../src/Grid'

class App extends React.Component {
  render () {
    return (
      <div className=''>
        <h1 className='p3'>React CSS Grid</h1>
        <div>
          <Grid className='p3' sm={6} md={3}>
            <h2 className='m0'>sm6 md3</h2>
          </Grid>
          <Grid className='p3' sm={6} md={3}>
            <h2 className='m0'>sm6 md3</h2>
          </Grid>
          <Grid className='p3' sm={6} md={3}>
            <h2 className='m0'>sm6 md3</h2>
          </Grid>
          <Grid className='p3' sm={6} md={3}>
            <h2 className='m0'>sm6 md3</h2>
          </Grid>
        </div>
      </div>
    )
  }
}

export default App

