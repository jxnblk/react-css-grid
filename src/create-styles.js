
export const width = col => `${col / 12 * 100}%`

export const createClassName = prefix => base => `__${prefix}${base}`

export const createWidthRule = breakpoints => breakpoint => className => col => {
  if (typeof col !== 'number') {
    return ''
  }
  const media = breakpoints[breakpoint]
  const rule = `.${className}{width:${width(col)}}`

  return media ? `@media ${media}{${rule}}` : rule
}

export const createRule = className => prop => val => {
  return `.${className}{${prop}:${val}}`
}

const createStyles = breakpoints => ({
  align = 'top',
  ...rest
}) => {
  const createBreakpointRule = createWidthRule(breakpoints)

  const styles = Object.keys(rest).map(key => {
    const val = rest[key]
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

  const boxSizingClassName = createClassName('b')('b')
  styles.push({
    className: boxSizingClassName,
    rule: createRule(boxSizingClassName)('box-sizing')('border-box')
  })

  const displayClassName = createClassName('d')('ib')
  styles.push({
    className: displayClassName,
    rule: createRule(displayClassName)('display')('inline-block')
  })

  const alignClassName = createClassName('a')(align)
  styles.push({
    className: alignClassName,
    rule: createRule(alignClassName)('vertical-align')(align)
  })

  const css = styles.reduce((a, b) => {
    return a + b.rule
  }, '')

  const className = styles.reduce((a, b) => {
    return a + b.className + ' '
  }, '').trim()

  return { css, className }
}

export default createStyles

