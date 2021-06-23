import { shallow, mount } from 'enzyme'
import '@testing-library/jest-dom/extend-expect'
import { Box } from 'components/atoms/Box'

describe('<Box />', () => {
  const text = 'Hello world'
  test('render content', () => {
    const wrapper = shallow(<Box />)
    expect(wrapper).toMatchSnapshot()
  })

  test('render children', () => {
    const wrapper = mount(<Box>{text}</Box>)
    expect(wrapper.text()).toBe(text)
  })
})
