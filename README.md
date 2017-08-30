
# React CSS Grid

React layout component based on [CSS Grid Layout][spec] and built with [styled-components][sc]

[![Build Status][travis-badge]][travis]

http://jxnblk.com/react-css-grid

[travis-badge]: https://img.shields.io/travis/jxnblk/react-css-grid/master.svg?style=flat-square
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

### `width` (number or string)

Sets the width at which child elements will break into columns.
Pass a number for pixel values or a string for any other valid CSS length.

```jsx
<Grid width={512} />
```

### `gap` (number or string)

Sets the gutter (`grid-gap`) between columns.
Pass a number for pixel values or a string for any other valid CSS length.

```jsx
<Grid gap={16} />
```

### `align` (string)

Sets `align-items` to control child element alignment.


## Browser Support

See http://caniuse.com/#feat=css-grid


## Related

- [Grid Styled](https://github.com/jxnblk/grid-styled)
- [Styled System](https://github.com/jxnblk/styled-system)
- [styled-components][sc]
- [CSS Grid Layout Module][spec]
- [CSS Grid Layout on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Grid by Example](https://gridbyexample.com/video/series-auto-fill-auto-fit/)
- [Spring Into CSS Grid](http://jonibologna.com/spring-into-css-grid/)


[spec]: https://www.w3.org/TR/css-grid-1/
[demo]: http://jxnblk.com/react-css-grid/
[sc]: https://styled-components.com

[MIT License](LICENSE.md)
