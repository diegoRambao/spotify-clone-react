import * as actions from 'consts/actionTypes'

export const SetAllFavorite = payload => ({
  type: actions.SetAllFavorite,
  payload
})

export const ResetAllFavorite = () => ({
  type: actions.ResetAllFavorite
})
