import Image from "next/image"

export default function Song({song, index}) {
    return (
        <div className='flex flex-row items-center rounded-sm hover:bg-gray-700 p-2 cursor-pointer transition duration-200 ease-in-out'>
            <div className='flex flex-row items-center gap-2 w-1/3'>
                <div className='flex flex-col items-center justify-center px-4 w-8'>
                    <p>{index + 1}</p>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <Image
                        src={song.album.images[0].url}
                        alt="playlist cover"
                        width={48}
                        height={48}
                        className='rounded-sm object-cover w-12 h-12'
                    />
                    <div className='flex flex-col'>
                        <p className='text-sm font-bold'>{song.title}</p>
                        <p className='text-xs'>{song.artist}</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-1 flex-row items-center gap-2'>
                <p>
                    {song.album.name}
                </p>
            </div>
            <div className='flex flex-1 flex-row items-center gap-2'>
                <p>{song.duration}</p>
            </div>
            <div className='flex flex-row justify-end gap-2 px-4'>
                <div className='w-8 h-8 rounded-full bg-gray-800'></div>
            </div>
        </div>
    )
}