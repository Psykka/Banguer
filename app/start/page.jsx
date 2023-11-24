'use client'

import { useState, useEffect } from "react";
import Image from 'next/image'

import Footer from "../../components/Footer";

export default function Start() {
    const [user, setUser] = useState(null)
    const [joining, setJoining] = useState(false)

    // get spotify account info
    const getSpotifyAccountInfo = async () => {
        if (typeof window !== 'undefined') {
            const { access_token } = JSON.parse(window.localStorage.getItem('token'))

            const res = await fetch('https://api.spotify.com/v1/me', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })

            const data = await res.json()

            setUser(data)
        }
    }

    const handleJoin = (e) => {
        console.log('joining')
        setJoining(true)
    }

    // on render fetch data
    useEffect(() => {
        getSpotifyAccountInfo()
    }, [])

    return (
        <div className='flex flex-col items-center justify-center h-screen gap-8'>

            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-6xl font-bold'>
                    Banguer
                </h1>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <Image
                        src={user?.images[1]?.url}
                        className='rounded-full w-12 h-12'
                        alt="user profile picture"
                        width={48}
                        height={48}
                    />
                    <h2 className='text-lg font-bold'>
                        {user?.display_name}
                    </h2>
                </div>
            </div>

            <div className='flex flex-row items-center justify-center gap-6'>
                <button
                    className='btn-primary'
                >
                    Create
                </button>
                <button
                    className='btn-primary'
                    onClick={handleJoin}
                >
                    Join
                </button>
            </div>

            {joining && (
                <div>
                    <input
                        type="text"
                        className='rounded-full w-64 h-12 border-2 border-black outline-none px-8'
                    />
                </div>
            )}

            <div className='flex flex-col items-center justify-center'>
                <button
                    className='text-lg font-bold text-black'
                >
                    Log out
                </button>
            </div>

            <Footer />
        </div>
    )
}