import { setSongsSearch } from 'consts/actionTypes'

const initialState = {
  songsSearch: []
}

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case setSongsSearch:
      return { ...state, songsSearch: action.payload }
    default:
      return state
  }
}
