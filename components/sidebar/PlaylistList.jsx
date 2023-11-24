'use client'

import { useState, useEffect } from 'react'
import Album from './Album'


export default function Playlists() {
    const [playlists, setPlaylists] = useState([])

    const getPlaylists = async () => {
        const { access_token } = JSON.parse(window.localStorage.getItem('token'))

        const res = await fetch('https://api.spotify.com/v1/me/playlists', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })

        const data = await res.json()

        setPlaylists(data.items)
    }

    useEffect(() => {
        getPlaylists()
    }, [])

    return (
        <div className='flex flex-col overflow-y-scroll w-full h-full overflow-x-hidden'>
            {playlists.map((playlist) => (
                <Album key={playlist.id} {...playlist} />
            ))}
        </div>
    )
}