import { environment } from 'utils/environment'

export const getAuthorizationCode = async ({ code }) => {
  const data = {
    grant_type: 'authorization_code',
    code,
    redirect_uri: environment.redirectUri
  }

  const bodyEncoded = Object.keys(data).map(
    key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')

  const Authorization = `Basic ${btoa(environment.clientId + ':' + environment.clientSecrect)}`

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      body: bodyEncoded,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization
      }
    })

    console.log(response)
  } catch (err) {
    console.erorr(err)
  }
}
