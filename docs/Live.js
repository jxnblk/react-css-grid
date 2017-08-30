import React from 'react'
import Grid from 'react-css-grid'
import XRay from 'react-x-ray'
import styled from 'styled-components'
import {
  LiveProvider,
  LivePreview,
  LiveEditor,
  LiveError,
} from 'react-live'

const Preview = styled(LivePreview)`
  padding: 16px;
  border: 1px solid #999;
  border-radius: 3px 3px 0 0;
`

const Editor = styled(LiveEditor)`
  font-family: Menlo, monospace;
  font-size: 12px;
  tab-size: 2;
  padding: 16px;
  margin: 0;
  color: white;
  background-color: black;
  border-radius: 0 0 3px 3px;
  outline: none;
`

const Err = styled(LiveError)`
  font-family: Menlo, monospace;
  font-size: 12px;
  padding: 16px;
  color: white;
  background-color: red;
`

const scope = {
  Grid
}

const Live = props => (
  <LiveProvider
    {...props}
    mountStylesheet={false}
    scope={scope}>
    <XRay>
      <Preview />
    </XRay>
    <Editor />
    <Err />
  </LiveProvider>
)

export default Live
