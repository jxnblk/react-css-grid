import React from 'react'
import { createProvider } from 'refunk'
import XRay from 'react-x-ray'
import Grid from 'react-css-grid'
import { Box } from 'grid-styled'
import Bar from './Bar'
import Button from './Button'
import Label from './Label'
import Slider from './Slider'
import Col from './Col'
import Heading from './Heading'
import Pre from './Pre'
import Text from './Text'
import Link from './Link'
import Flex from './Flex'
import BlockLink from './BlockLink'
import Image from './Image'
import Tweet from './Tweet'
import Code from './Code'
import List from './List'
import Live from './Live'

const App = props => (
  <XRay disabled={!props.xray}>
    <Bar p={1}>
      <Grid
        width={128}
        gap={8}
        align='center'>
        <Grid.Item span={2}>
          <Label htmlFor='width'>width {props.width}</Label>
          <Slider
            id='width'
            name='width'
            max={widths.length - 1}
            value={widths.indexOf(props.width)}
            onChange={e => props.update(handleWidthChange(e.target.value))}
          />
        </Grid.Item>
        <Grid.Item span={2}>
          <Label htmlFor='width'>gap {props.gap}</Label>
          <Slider
            type='range'
            id='gap'
            name='gap'
            max={gaps.length - 1}
            value={gaps.indexOf(props.gap)}
            onChange={e => props.update(handleGapChange(e.target.value))}
          />
        </Grid.Item>
        <Button
          onClick={e => {
            props.update(toggleXRay)
          }}
          children='x-ray'
        />
      </Grid>
    </Bar>
    <Box p={[ 2, 3 ]}>
      <Grid
        width={props.width}
        gap={props.gap}>
        <Grid.Item>
          <Heading.h1 mb={2}>React CSS Grid</Heading.h1>
          <Text mb={2}>
            React layout component based on CSS Grid Layout and built with
            {' '}
            <Link href='https://styled-components.com'>
              styled-components
            </Link>
          </Text>
          <Flex>
            <BlockLink
              mr={1}
              href='https://travis-ci.org/jxnblk/react-css-grid'>
              <Image
                src='https://img.shields.io/travis/jxnblk/react-css-grid/master.svg?style=flat-square'
                height='20'
              />
            </BlockLink>
            <Tweet />
            <BlockLink
              ml={1}
              href='https://github.com/jxnblk/react-css-grid'>
              <Image
                src='https://img.shields.io/github/stars/jxnblk/react-css-grid.svg?style=social&label=Star'
              />
            </BlockLink>
          </Flex>
        </Grid.Item>
        <div>
          <Heading mb={2}>Install</Heading>
          <Pre>npm i react-css-grid</Pre>
        </div>
        <Grid.Item>
          <Heading mb={2}>Usage</Heading>
          <Pre children={usage} />
        </Grid.Item>
        <div>
          <Heading mb={2}>Features</Heading>
          <List>
            <li>Responsive grid layout with zero media queries</li>
            <li>Simple API for handling tiled layouts</li>
            <li>Customizable column width and gutters</li>
          </List>
        </div>
        <div>
          <Heading mb={2}>Props</Heading>
          <List>
            <li>
              <Code>width</Code>
              <Text>
                Sets the width at which child elements will break into columns.
                Pass a number for pixel values or a string for any other valid CSS length.
              </Text>
            </li>
            <li>
              <Code>gap</Code>
              <Text>
                Sets the gutter (grid-gap) between columns.
                Pass a number for pixel values or a string for any other valid CSS length.
              </Text>
            </li>
            <li>
              <Code>align</Code>
              <Text>
                Sets align-items to control child element alignment.
              </Text>
            </li>
          </List>
        </div>
        <div>
          <Heading mb={2}>Width</Heading>
          <Live code={widthExample} />
        </div>
        <div>
          <Heading mb={2}>Gap</Heading>
          <Live code={gapExample} />
        </div>
        <div>
          <Heading mb={2}>Align</Heading>
          <Live code={alignExample} />
        </div>
        <footer>
          <Heading mb={2}>Footer</Heading>
          <List>
            <li>
              <Link href='https://github.com/jxnblk/react-css-grid'>GitHub</Link>
            </li>
            <li>
              <Link href='http://jxnblk.com'>Made by Jxnblk</Link>
            </li>
          </List>
        </footer>
      </Grid>
    </Box>
  </XRay>
)

const usage = `import React from 'react'
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
}`

const widthExample = `<Grid width={128}>
  <h2>Hello</h2>
  <h2>Hi</h2>
</Grid>`

const gapExample = `<Grid
  width={96}
  gap={16}>
  <h2>Hello</h2>
  <h2>Hi</h2>
</Grid>`

const alignExample = `<Grid
  width={96}
  align='baseline'>
  <h2>Hello</h2>
  <h4>Hi</h4>
</Grid>`

const state = {
  width: 320,
  gap: 32,
  xray: false
}

const toggleXRay = state => ({ xray: !state.xray })

const widths = [
  128,
  192,
  256,
  320,
  384,
  512,
  768,
  1024
]

const handleWidthChange = val => state => ({
  width: widths[parseInt(val)]
})

const gaps = [
  0,
  8,
  16,
  32,
  64,
  128
]

const handleGapChange = val => state => ({
  gap: gaps[parseInt(val)]
})

export default createProvider(state)(App)
