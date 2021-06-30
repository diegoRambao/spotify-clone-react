import { environment } from 'utils/environment'

const scopes = [
  'user-read-recently-played',
  'user-library-modify',
  'user-library-read',
  'playlist-read-private',
  'playlist-modify-public',
  'playlist-modify-private',
  'playlist-read-collaborative',
  'user-read-email',
  'user-read-private',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-follow-read',
  'user-follow-modify'
]

const { authEndpoint, clientId, redirectUri } = environment

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&show_dialog=true`
