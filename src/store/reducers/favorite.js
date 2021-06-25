import { SetAllFavorite, ResetAllFavorite } from 'consts/actionTypes'

const initialState = {
  songsFavorites: []
}

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SetAllFavorite:
      return { ...state, songsFavorites: [...state.songsFavorites, ...action.payload] }
    case ResetAllFavorite:
      return { ...state, songsFavorites: [] }
    default:
      return state
  }
}
