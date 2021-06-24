import { SetAllPlaylist, SetPlaylist, SetSongsPlaylist, SetTotalSongsPlaylist } from 'consts/actionTypes'

const initialState = {
  playlists: [],
  playlist: null
}

export const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SetAllPlaylist:
      return { ...state, playlists: [...state.playlists, ...action.payload] }
    case SetPlaylist:
      return { ...state, playlist: action.payload }
    case SetSongsPlaylist:
      return { ...state, playlist: { ...state.playlist, tracks: [...state.playlist.tracks, ...action.payload] } }
    case SetTotalSongsPlaylist:
      return { ...state, playlist: { ...state.playlist, total: action.payload } }
    default:
      return state
  }
}
