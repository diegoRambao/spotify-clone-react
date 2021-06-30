import { shallow, mount } from 'enzyme'
import { Cover } from 'components/molecules/Cover'

describe('<Cover />', () => {
  const url = 'https://example.png'
  const title = 'Titulo'
  const subtitle = 'Subtitle'

  const wrapper = mount(
    <Cover
      img={url}
      title={title}
      subtitle={subtitle}
    />)

  test('render content', () => {
    const wrapper = shallow(
      <Cover
        img={url}
        title={title}
        subtitle={subtitle}
      />)
    expect(wrapper).toMatchSnapshot()
  })

  test('render title', () => {
    const h3 = wrapper.find('h3')
    expect(h3.text()).toBe(title)
  })

  test('render subtitle', () => {
    const h5 = wrapper.find('h5')
    expect(h5.text()).toBe(subtitle)
  })

  test('render img', () => {
    const img = wrapper.find('img')
    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(title)
  })
})
