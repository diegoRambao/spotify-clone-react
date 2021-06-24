import { SetAllPlaylist, SetPlaylist } from 'consts/actionTypes'

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
    default:
      return state
  }
}
