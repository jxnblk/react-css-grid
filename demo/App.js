
import React from 'react'
import Grid from '../src/Grid'

class App extends React.Component {
  render () {
    return (
      <div>
        <header className='p3'>
          <h1>React CSS Grid Demo</h1>
          <a href='https://github.com/jxnblk/react-css-grid'>GitHub</a>
        </header>
        <div className='debug'>
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

