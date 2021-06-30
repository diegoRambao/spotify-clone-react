import { shallow, mount } from 'enzyme'
import { CardPlaylist } from 'components/molecules/CardPlaylist'
import { Link, MemoryRouter } from 'react-router-dom'

describe('<CardPlaylist>', () => {
  const playlist = {
    id: '1234567890', name: 'Playlist 1', tracks: { total: 67 }, images: [{ url: 'https://example.png' }]
  }

  const wrapper = mount(<MemoryRouter><CardPlaylist playlist={playlist} /></MemoryRouter>)

  test('render content', () => {
    const wrapper = shallow(<CardPlaylist playlist={playlist} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('property to link to be id playlist', () => {
    const link = wrapper.find(Link)
    expect(link.prop('to')).toBe(`/playlist/${playlist.id}`)
  })

  test('render image', () => {
    const img = wrapper.find('img')
    expect(img.prop('alt')).toBe(playlist.name)
    expect(img.prop('src')).toBe(playlist.images[0].url)
    expect(img.prop('loading')).toBe('lazy')
  })

  test('render title', () => {
    const h4 = wrapper.find('h4')
    expect(h4.text()).toBe(playlist.name)
  })

  test('render total', () => {
    const h6 = wrapper.find('h6')
    expect(h6.text()).toBe(`${playlist.tracks.total} canciones`)
  })
})
