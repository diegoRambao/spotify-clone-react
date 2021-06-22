import { combineReducers } from 'redux'
import { userReducer } from './user'
import { favoriteReducer } from './favorite'
import { playlistReducer } from './playlist'

export const rootReducer = combineReducers({
  favorite: favoriteReducer,
  playlist: playlistReducer,
  user: userReducer
})
