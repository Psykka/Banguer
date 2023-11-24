'use client'

import { useState } from 'react'
import Song from './Song'

export default function Queue() {
    const [songs, setSongs] = useState([
        {
            title: 'Toxicity',
            artist: 'System of a Down',
            duration: '3:39',
            album: {
                name: 'Toxicity',
                images: [
                    {
                        url: 'https://i.scdn.co/image/ab67616d00001e0230d45198d0c9e8841f9a9578'
                    }
                ]
            }
        },
        {
            title: 'Mater of Puppets',
            artist: 'Metallica',
            duration: '8:35',
            album: {
                name: 'Master of Puppets',
                images: [
                    {
                        url: 'https://i.scdn.co/image/ab67616d0000b273668e3aca3167e6e569a9aa20'
                    }
                ]
            }
        },
        {
            title: 'My Own Summer (Shove It)',
            artist: 'Deftones',
            duration: '3:35',
            album: {
                name: 'Around the Fur',
                images: [
                    {
                        url: 'https://i.scdn.co/image/ab67616d00001e020b1129853982ea17845d4eb6'
                    }
                ]
            }
        },
        {
            title: 'Walk',
            artist: 'Pantera',
            duration: '5:15',
            album: {
                name: 'Vulgar Display of Power',
                images: [
                    {
                        url: 'https://i.scdn.co/image/ab67616d00001e02347c0a40c1e3f0c890a6d9d6'
                    }
                ]
            }
        },
        {
            title: 'Chop Suey!',
            artist: 'System of a Down',
            duration: '3:30',
            album: {
                name: 'Toxicity',
                images: [
                    {
                        url: 'https://i.scdn.co/image/ab67616d00001e0230d45198d0c9e8841f9a9578'
                    }
                ]
            }
        },
        {
            title: 'The Unforgiven',
            artist: 'Metallica',
            duration: '6:27',
            album: {
                name: 'Metallica',
                images: [
                    {
                        url: 'https://i.scdn.co/image/ab67616d0000b273cf84c5b276431b473e924802'
                    }
                ]
            }
        },
        {
            title: 'Change (In the House of Flies)',
            artist: 'Deftones',
            duration: '5:01',
            album: {
                name: 'White Pony',
                images: [
                    {
                        url: 'https://i.scdn.co/image/ab67616d0000b2735c53799f473fa3e1a48c00ed'
                    }
                ]
            }
        },
        {
            title: 'In the End',
            artist: 'Linkin Park',
            duration: '3:36',
            album: {
                name: 'Hybrid Theory',
                images: [
                    {
                        url: 'https://i.scdn.co/image/ab67616d0000b273e2f039481babe23658fc719a'
                    }
                ]
            }
        },
        {
            title: 'Aerials',
            artist: 'System of a Down',
            duration: '4:06',
            album: {
                name: 'Toxicity',
                images: [
                    {
                        url: 'https://i.scdn.co/image/ab67616d00001e0230d45198d0c9e8841f9a9578'
                    }
                ]
            }
        },
        {
            title: 'Enter Sandman',
            artist: 'Metallica',
            duration: '5:32',
            album: {
                name: 'Metallica',
                images: [
                    {
                        url: 'https://i.scdn.co/image/ab67616d0000b273cf84c5b276431b473e924802'
                    }
                ]
            }
        }
    ])

    return (
        <div className='flex flex-col flex-grow text-gray-300 p-2 overflow-y-auto'>
            {songs && songs.map((song, index) => (<Song key={song.id} index={index} song={song} />))}
        </div>
    )
}