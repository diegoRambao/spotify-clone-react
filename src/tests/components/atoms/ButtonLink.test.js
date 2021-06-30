import { shallow, mount } from 'enzyme'
import { ButtonLink } from 'components/atoms/ButtonLink'

describe('<ButtonLink />', () => {
  const text = 'Text example'
  const url = 'https://www.google.com'
  const wrapper = mount(<ButtonLink href={url}>{text}</ButtonLink>)

  test('render content', () => {
    const wrapper = shallow(<ButtonLink>{text}</ButtonLink>)
    expect(wrapper).toMatchSnapshot()
  })

  test('render children', () => {
    expect(wrapper.text()).toBe(text)
  })

  test('to have attribute href', () => {
    expect(wrapper.prop('href')).toBe(url)
  })
})
