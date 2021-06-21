import { SetToken } from 'consts/actionTypes'

const initialState = {
  token: window.localStorage.getItem('token')
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SetToken:
      return { ...state, token: action.payload }
    default:
      return state
  }
}
