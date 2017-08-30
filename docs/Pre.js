import styled from 'styled-components'
import { space } from 'styled-system'

const Pre = styled.pre`
  font-family: Menlo, monospace;
  font-size: 14px;
  max-width: 100%;
  overflow: auto;
  ${space}
`

Pre.defaultProps = {
  m: 0
}

export default Pre
