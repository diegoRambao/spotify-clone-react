import * as actions from 'consts/actionTypes'

export const SetAllPlaylist = payload => ({
  type: actions.SetAllPlaylist,
  payload
})

export const SetPlaylist = payload => ({
  type: actions.SetPlaylist,
  payload
})

export const SetSongsPlaylist = payload => ({
  type: actions.SetSongsPlaylist,
  payload
})

export const SetTotalSongsPlaylist = payload => ({
  type: actions.SetTotalSongsPlaylist,
  payload
})
