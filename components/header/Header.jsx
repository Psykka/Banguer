export default function Header() {
    return (
        <header className='flex flex-row items-center justify-between text-gray-300 p-4'>
            <div className='flex flex-row gap-1'>
                {/* room info code and copy button */}
                <p>#8810293</p>
                <button className='text-xs bg-gray-800 rounded-sm px-2 py-1'>Copy</button>
            </div>
            <div className='flex flex-row gap-4'>
                {/* chat */}
                <div className='w-8 h-8 rounded-sm bg-gray-800'></div>
                {/* user list */}
                <div className='flex flex-row items-center'>
                    <div className='w-8 h-8 rounded-full bg-gray-800'></div>
                    <div className='w-8 h-8 rounded-full bg-gray-800'></div>
                    <div className='w-8 h-8 rounded-full bg-gray-800'></div>
                </div>
            </div>
        </header>
    )
}