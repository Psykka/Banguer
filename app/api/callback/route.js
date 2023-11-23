export async function GET(req) {
  const params = req.nextUrl.searchParams
  const code = params.get('code')

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: `${process.env.URL}/api/callback`
    })
  })

  const json = await res.json()

  return Response.redirect(`${process.env.URL}/callback?access_token=${json.access_token}&refresh_token=${json.refresh_token}&type=${json.token_type}&expires_in=${json.expires_in}`, 302)
}