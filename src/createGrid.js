
import React from 'react'
import createStyles from './create-styles'

const breakpoints = {
  sm: 'screen and (min-width:40em)',
  md: 'screen and (min-width:52em)',
  lg: 'screen and (min-width:64em)'
}

const cols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export const createGrid = (Comp) => {
  class GridWrap extends React.Component {
    render () {
      const {
        col = 12,
        sm,
        md,
        lg,
        align,
        children,
        ...props
      } = this.props

      const { css, className } = createStyles(breakpoints)({ align, col, sm, md, lg })

      const cx = className + ' ' + (props.className || '')

      return (
        <Comp {...props} className={cx}>
          <style dangerouslySetInnerHTML={{ __html: css }} />
          {children}
        </Comp>
      )
    }
  }

  GridWrap.propTypes = {
    col: React.PropTypes.oneOf(cols),
    sm: React.PropTypes.oneOf(cols),
    md: React.PropTypes.oneOf(cols),
    lg: React.PropTypes.oneOf(cols),
    align: React.PropTypes.oneOf([
      'top',
      'middle',
      'bottom',
      'baseline'
    ])
  }

  return GridWrap
}

export default createGrid

