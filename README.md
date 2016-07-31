
# React CSS Grid

**Experimental**
Responsive CSS-based React grid component

[![Build Status](https://travis-ci.org/jxnblk/react-css-grid.svg?branch=master)](https://travis-ci.org/jxnblk/react-css-grid)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

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

```jsx
// Higher order component
import React from 'react'
import { createGrid } from 'react-css-grid'

const CustomGrid = (props) => <div {...props} />

export default createGrid(CustomGrid)
```

## Features
- Simple, encapsulated grid layout API
- Uses CSS for native @media-rule-based responsive styles
- Works with server-side rendering

## Grid component props
- `col` (number 0–12) sets width across all breakpoints based on a 12 column grid.
- `sm` (number 0–12) sets width from the `sm` breakpoint up
- `md` (number 0–12) sets width from the `md` breakpoint up
- `lg` (number 0–12) sets width from the `lg` breakpoint up
- `align` (string, `top`, `middle`, `bottom`, or `baseline`) - sets vertical align

## How it works

The Grid component uses `display: inline-block` to create grid layouts.
It creates CSS rules based on props and inserts that string into an inline style tag.
The component only creates the rules it needs for itself,
however other Grid components may generate duplicative styles of their own.

## Caveats
- Produces an inline style **tag** within the body (e.g. not inline styles)
- Similar component instances create duplicative CSS rules – this may or may not affect performance
- Atomic class selectors are global

MIT License
