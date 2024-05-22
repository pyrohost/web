import { CaretSortIcon } from '@radix-ui/react-icons';

const DashboardSkeletonSection = ({ title }: { title: string }) => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex min-h-[108px] flex-col justify-center gap-4 overflow-hidden rounded-xl border-[1px] border-[#ffffff11] bg-[#ffffff09] shadow-sm'>
                <div className='flex w-full items-center justify-between p-6 text-left'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl font-extrabold'>{title}</h2>
                        <div className='flex items-center gap-1 text-sm font-bold text-neutral-500'>
                            <div className='max-h-2 min-h-2 min-w-2 max-w-2 animate-pulse rounded-full bg-neutral-500'></div>
                            <p>Loading...</p>
                        </div>
                    </div>
                    <div className='rounded-full p-2 transition hover:bg-[#ffffff11]'>
                        <CaretSortIcon className='h-6 w-6' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardSkeletonSection;
