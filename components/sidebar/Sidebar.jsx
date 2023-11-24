import PlaylistList from './PlaylistList'

export default function Sidebar() {
    return (
        <aside className='flex flex-col bg-gray-900 text-gray-300 p-2 w-64'>
            <PlaylistList />
        </aside>
    )
}