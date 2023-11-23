'use client'

export default function Home() {
  const clientId = '58484fee39ab4d60a58c65cb2ab28525'
  const redirectUri = 'http://localhost:3000/api/callback'
  const scopes = [
    'user-read-private',
    'streaming',
    'user-library-read',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'playlist-read-private',
    'playlist-read-collaborative',
  ]

  const handleLogin = () => {
    const popup = window.open(
      `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}`,
      'Login with Spotify',
      'width=800,height=600'
    )

    window.addEventListener('message', (event) => {
      if (event.origin !== window.location.origin) return

      if (event.data.type === 'token') {
        console.log(event.data)
        window.localStorage.setItem('token', event.data.payload)
        popup.close()
      }
    })
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-6xl font-bold mb-4'>
          Banguer
        </h1>
        <h2 className='text-2xl font-bold'>
          Spotify listen along with your friends
        </h2>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-lg font-bold'>
          How it works
        </h2>
        <p>1. Log in with Spotify</p>
        <p>2. Create a room</p>
        <p>3. Share the link with your friends</p>
        <p>4. Listen to music together</p>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-lg font-bold'>
          Features
        </h2>
        <p>Listen to music with your friends</p>
        <p>Add songs to the queue</p>
        <p>Vote to skip songs</p>
        <p>Chat with your friends</p>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <button
          className='px-6 py-2 text-lg font-bold text-white bg-green-500 rounded-full shadow-xl hover:bg-green-600 transition duration-200 ease-in-out'
          onClick={handleLogin}
        >
          Log in with Spotify
        </button>
      </div>

      <div className='fixed bottom-0 left-0 right-0 flex flex-col items-center justify-center p-4'>
        <p className='text-sm font-bold'>
          Made with ❤️ by <a href='https://twitter.com/Psykka_' className='text-blue-500'>@Psykka</a>
        </p>
      </div>
    </div>
  )
}
