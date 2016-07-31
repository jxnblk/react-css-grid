
import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Grid from '..'

let wrapper

test('renders', t => {
  t.notThrows(() => {
    wrapper = shallow(<Grid />)
  })
})

test('includes a style tag', t => {
  const style = wrapper.find('style')
  t.is(style.type(), 'style')
})

test('includes default rules', t => {
  const html = wrapper.find('style').html()
  t.regex(html, /display:inline-block/)
  t.regex(html, /vertical-align:top/)
  t.regex(html, /box-sizing:border-box/)
})

test('applies default classNames', t => {
  t.regex(wrapper.props().className, /__col12 __bb __dib __atop/)
})

test('sm prop creates @media rules', t => {
  t.plan(3)
  wrapper = shallow(<Grid sm={6} />)
  const style = wrapper.find('style').html()
  t.regex(style, /@media/)
  t.regex(style, /(min-width:40em)/)
  t.regex(style, /width:50%/)
})

test('sm prop applies sm className', t => {
  wrapper = shallow(<Grid sm={6} />)
  t.regex(wrapper.props().className, /__sm6/)
})

test('md prop creates @media rules', t => {
  t.plan(3)
  wrapper = shallow(<Grid md={6} />)
  const style = wrapper.find('style').html()
  t.regex(style, /@media/)
  t.regex(style, /(min-width:52em)/)
  t.regex(style, /width:50%/)
})

test('md prop applies md className', t => {
  wrapper = shallow(<Grid md={6} />)
  t.regex(wrapper.props().className, /__md6/)
})

test('lg prop creates @media rules', t => {
  t.plan(3)
  wrapper = shallow(<Grid lg={6} />)
  const style = wrapper.find('style').html()
  t.regex(style, /@media/)
  t.regex(style, /(min-width:64em)/)
  t.regex(style, /width:50%/)
})

test('lg prop applies lg className', t => {
  wrapper = shallow(<Grid lg={6} />)
  t.regex(wrapper.props().className, /__lg6/)
})

test('align prop creates vertical align rules', t => {
  t.plan(4)
  wrapper = shallow(<Grid align='middle' />)
  const style = wrapper.find('style').html()
  const { className } = wrapper.props()
  t.regex(style, /vertical-align:middle/)
  t.false(/vertical-align:top/.test(style))
  t.regex(className, /__amiddle/)
  t.false(/__atop/.test(className))
})

