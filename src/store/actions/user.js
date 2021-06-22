import * as actions from 'consts/actionTypes'

export const SetToken = payload => ({
  type: actions.SetToken,
  payload
})

export const RemoveToken = payload => ({
  type: actions.RemoveToken,
  payload
})

export const SetUser = payload => ({
  type: actions.SetUser,
  payload
})
