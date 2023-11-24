import Image from 'next/image'

export default function Album(album) {
    return (
        <div className='flex flex-row items-center gap-2 rounded-sm hover:bg-gray-700 p-2 cursor-pointer transition duration-200 ease-in-out'>
            <Image
                src={album.images[0].url}
                alt="playlist cover"
                width={48}
                height={48}
                className='rounded-sm object-cover w-12 h-12'
            />
            <div className='flex flex-col'>
                <p className='truncate'>
                    {album.name}
                </p>
                <p className='text-sm text-gray-400 truncate'>
                    {album.tracks.total} songs • {album.owner.display_name}
                </p>
            </div>
        </div>
    )
}