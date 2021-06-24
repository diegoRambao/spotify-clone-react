import { SetAllFavorite } from 'consts/actionTypes'

const initialState = {
  songsFavorites: []
}

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SetAllFavorite:
      return { ...state, songsFavorites: [...state.songsFavorites, ...action.payload] }
    default:
      return state
  }
}
