import React from 'react'
import { shallow, mount } from 'enzyme'
import { Avatar } from 'components/atoms/Avatar'

describe('<Avatar />', () => {
  test('redner content', () => {
    const wrapper = shallow(<Avatar>D</Avatar>)
    expect(wrapper).toMatchSnapshot()
  })

  test('render when you pass properties img', () => {
    const imgUrl = 'http://localhost/exmample.png'
    const alt = 'Example Alt'
    const wrapper = mount(<Avatar src={imgUrl} alt={alt} />)
    const img = wrapper.find('img')
    expect(img.prop('src')).toBe(imgUrl)
    expect(img.prop('alt')).toBe(alt)
  })

  test('render children when prop is not passed', () => {
    const name = 'Sofia'
    const wrapper = mount(<Avatar>{name}</Avatar>)
    expect(wrapper.text()).toBe(name)
  })
})
