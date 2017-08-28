
# React CSS Grid

React layout component based on [CSS Grid Layout][spec] ([Demo][demo])

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

- Responsive grid layout with zero media queries
- Simple API for handling tiled layouts
- Customizable column width and gutters


## Props

- `width` (number or string) width at which child elements will break into columns - either a number pixel value or any valid CSS width value as a string
- `gap` (number or string) gutter (`grid-gap`) between columns - either a number pixel value or any valid CSS width value as a string


## Browser Support

See http://caniuse.com/#feat=css-grid

## Related

- [Grid Styled](https://github.com/jxnblk/grid-styled)
- [styled-components](https://github.com/styled-components/styled-components)
- [CSS Grid Layout Module][spec]
- [CSS Grid Layout on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Grid by Example](https://gridbyexample.com/video/series-auto-fill-auto-fit/)
- [Spring Into CSS Grid](http://jonibologna.com/spring-into-css-grid/)


[spec]: https://www.w3.org/TR/css-grid-1/
[demo]: http://jxnblk.com/react-css-grid/

[MIT License](LICENSE.md)
