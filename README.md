
# React CSS Grid

React layout component based on [CSS Grid Layout][spec]

[![Build Status][travis-badge]][travis]

[travis-badge]: https://travis-ci.org/jxnblk/react-css-grid.svg?branch=master
[travis]: https://travis-ci.org/jxnblk/react-css-grid

```sh
npm i react-css-grid
```

```jsx
// Example usage
import React from 'react'
import Grid from 'react-css-grid'

class App extends React.Component {
  render () {
    return (
      <Grid
        width={320}
        gap={24}>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
      </Grid>
    )
  }
}
```

## Features

- Simple, encapsulated grid layout API

[spec]: https://www.w3.org/TR/css-grid-1/

MIT License
