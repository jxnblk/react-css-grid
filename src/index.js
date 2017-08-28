import styled from 'styled-components'
import PropTypes from 'prop-types'

const px = n => typeof n === 'number' ? n + 'px' : n

const width = props => ({
  gridTemplateColumns: `repeat(auto-fit, minmax(${px(props.width)}, 1fr))`
})

const gutter = props => ({
  gridGap: px(props.gutter)
})

const Grid = styled.div`
  display: grid;
  ${width}
  ${gutter}
`

Grid.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  gutter: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired
}

Grid.defaultProps = {
  width: 256,
  gutter: 32
}

export default Grid
