import styled from 'styled-components'
import { space, fontSize } from 'styled-system'

const Heading = styled.h2`
  ${space}
  ${fontSize}
`

Heading.defaultProps = {
  f: 5,
  m: 0
}

Heading.h1 = Heading.withComponent('h1')

export default Heading
