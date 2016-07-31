
# React CSS Grid

Responsive CSS-based React grid component

```sh
npm i react-css-grid
```

```js
// Example usage
import React from 'react'
import Grid from 'react-css-grid'

class App extends React.Component {
  render () {
    return (
      <div>
        <Grid col={6} sm={4} md={3} lg={2}>Column</Grid>
        <Grid col={6} sm={4} md={3} lg={2}>Column</Grid>
        <Grid col={6} sm={4} md={3} lg={2}>Column</Grid>
        <Grid col={6} sm={4} md={3} lg={2}>Column</Grid>
      </div>
    )
  }
}
```

The Grid component creates CSS rules based on props and insert that string into an inline style tag. The component only creates the rules it needs for itself, however other Grid components may generate duplicative styles of their own.


MIT License
