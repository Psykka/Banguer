export default function Player() {
    return (
        // add 
        <div className='flex h-24 w-full items-stretch bg-gray-900 text-gray-300 p-4'>
            <div className='flex flex-1 flex-row items-center gap-4'>
                <div className='w-12 h-12 rounded-sm bg-gray-800'></div>
                <div className='flex flex-col'>
                    <p className='text-sm font-bold'>Song Title</p>
                    <p className='text-xs'>Artist</p>
                </div>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center'>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <button className='w-8 h-8 rounded-full bg-gray-800 text-gray-300'>
                        <i className='bx bx-shuffle'></i>
                    </button>
                    <button className='w-8 h-8 rounded-full bg-gray-800 text-gray-300'>
                        <i className='bx bx-skip-previous'></i>
                    </button>
                    <button className='w-8 h-8 rounded-full bg-gray-800 text-gray-300'>
                        <i className='bx bx-play'></i>
                    </button>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <p className='text-xs'>0:00</p>
                    <div className='w-64 h-1 rounded-full bg-gray-800'>
                        <div className='w-1/2 h-full rounded-full bg-white'></div>
                    </div>
                    <p className='text-xs'>3:00</p>
                </div>
            </div>
            <div className='flex flex-1 flex-row items-center gap-4 justify-end'>
                <button className='w-8 h-8 rounded-full bg-gray-800 text-gray-300'>
                    <i className='bx bx-list-ul'></i>
                </button>
            </div>
        </div>
    )
}