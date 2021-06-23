import { shallow } from 'enzyme'
import { Title } from 'components/atoms/Title'

describe('<Title', () => {
  const text = 'text example'

  test('render content', () => {
    const wrapper = shallow(<Title>{text}</Title>)
    expect(wrapper).toMatchSnapshot()
  })

  test('render children', () => {
    const wrapper = shallow(<Title>{text}</Title>)
    expect(wrapper.text()).toBe(text)
  })
})
