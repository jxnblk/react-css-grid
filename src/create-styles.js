
const width = col => `${col / 12 * 100}%`

const createClassName = breakpoint => col => `_g${breakpoint}${col}`

const createRule = breakpoints => breakpoint => className => col => {
  if (typeof col !== 'number') {
    return ''
  }
  const media = breakpoints[breakpoint]
  const rule = `.${className}{width:${width(col)}}`
  if (!media) {
    return rule
  }
  return `@media ${media}{${rule}}`
}

const createStyles = breakpoints => props => {
  const createBreakpointRule = createRule(breakpoints)

  const styles = Object.keys(props).map(key => {
    const val = props[key]
    if (!val) {
      return false
    }
    const className = createClassName(key)(val)
    const rule = createBreakpointRule(key)(className)(val)

    return {
      className,
      rule
    }
  }).filter(s => s !== false)

  const css = styles.reduce((a, b) => {
    return a + b.rule
  }, '')

  const className = styles.reduce((a, b) => {
    return a + b.className + ' '
  }, '').trim()

  return { css, className }
}

export default createStyles

