import { shallow, mount } from 'enzyme'
import { UserWidget } from 'components/molecules/UserWidget'

describe('<UserWidget />', () => {
  const name = 'Sofia Herrera'
  const url = 'http://localhost/exmample.png'

  const wrapper = mount(<UserWidget name={name} img={url} />)
  test('render content', () => {
    const wrapper = shallow(<UserWidget name={name} img={url} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('render name', () => {
    const span = wrapper.find('span')
    expect(span.text()).toBe(name)
  })

  test('render img with prop alt and src', () => {
    const img = wrapper.find('img')
    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(name)
  })

  test('render <Avatar /> with the first letter of the name', () => {
    const wrapper = mount(<UserWidget name={name} img={null} />)
    expect(wrapper.find('Avatar').text()).toBe('S')
  })
})
