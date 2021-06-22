import { combineReducers } from 'redux'
import { userReducer } from './user'
import { favoriteReducer } from './favorite'

export const rootReducer = combineReducers({
  user: userReducer,
  favorite: favoriteReducer
})
