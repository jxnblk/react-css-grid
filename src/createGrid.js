
import React from 'react'
import Robox from 'robox'
import createStyles from './create-styles'

const breakpoints = {
  sm: 'screen and (min-width:40em)',
  md: 'screen and (min-width:52em)',
  lg: 'screen and (min-width:64em)'
}

export const createGrid = (Comp) => {
  const Base = Robox(Comp)

  class Wrapped extends React.Component {
    render () {
      const {
        col = 12,
        sm,
        md,
        lg,
        children,
        ...props
      } = this.props

      const { css, className } = createStyles(breakpoints)({ col, sm, md, lg })

      const cx = className + ' ' + (props.className || '')

      const sx = {
        boxSizing: 'border-box',
        display: 'inline-block',
        ...props.style
      }

      return (
        <Base {...props} style={sx} className={cx}>
          <style dangerouslySetInnerHTML={{ __html: css }} />
          {children}
        </Base>
      )
    }
  }

  return Wrapped
}

export default createGrid

