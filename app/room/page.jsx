import Sidebar from "@/components/sidebar/Sidebar";
import Queue from "@/components/queue/Queue";
import Player from "@/components/player/Player";
import Header from "@/components/header/Header";

export default function Room() {
    return (
        <div className='flex flex-col max-h-screen w-screen bg-gray-900'>
            <div className='flex flex-row flex-grow overflow-hidden'>
                <Sidebar />
                <div className='flex flex-col flex-grow overflow-hidden'>
                    <Header />
                    <Queue />
                </div>
            </div>
            <Player />
        </div>
    )
}