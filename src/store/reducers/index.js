import { combineReducers } from 'redux'

import { favoriteReducer } from './favorite'
import { playlistReducer } from './playlist'
import { searchReducer } from './search'
import { userReducer } from './user'

export const rootReducer = combineReducers({
  favorite: favoriteReducer,
  playlist: playlistReducer,
  search: searchReducer,
  user: userReducer
})
