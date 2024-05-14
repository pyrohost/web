import { GameSearchBar } from '@/components/GameSearchBar';

export default function Search() {
    return (
        <div className='flex flex-1 flex-col overflow-x-clip xl:px-1 xl:pb-1'>
            <div className='relative z-10 min-h-[calc(100vh-76px)] w-full overflow-clip rounded-3xl'>
                <div className='relative mx-auto flex flex-col items-center gap-8 px-4 py-32 text-center xl:px-24'>
                    <GameSearchBar />
                </div>
            </div>
        </div>
    );
}
