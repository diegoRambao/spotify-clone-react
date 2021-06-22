import { SetToken, RemoveToken, SetUser } from 'consts/actionTypes'
import { parseStringToJson } from 'utils'

const currentUser = parseStringToJson(window.localStorage.getItem('currentUser'))

const initialState = {
  token: window.localStorage.getItem('token'),
  user: currentUser
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SetToken:
      return { ...state, token: action.payload }
    case RemoveToken:
      return { ...state, token: null }
    case SetUser:
      return { ...state, user: action.payload }
    default:
      return state
  }
}
