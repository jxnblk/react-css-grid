import styled from 'styled-components'
import PropTypes from 'prop-types'

const px = n => typeof n === 'number' ? n + 'px' : n

const width = props => ({
  gridTemplateColumns: `repeat(auto-fit, minmax(${px(props.width)}, 1fr))`
})

const gap = props => ({
  gridGap: px(props.gap)
})

const Grid = styled.div`
  display: grid;
  ${width}
  ${gap}
`

Grid.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  gap: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired
}

Grid.defaultProps = {
  width: 256,
  gap: 32
}

export default Grid
