const PyroPill = ({ children, leftChild }: { children: React.ReactNode; leftChild?: React.ReactNode }) => {
    return (
        <div data-pyro-ui='pill' className='mb-4'>
            <div className='flex h-8 cursor-default select-none items-center gap-[6px] rounded-full border border-brand/30 bg-brand/10 px-[11px] py-[4px] text-brand backdrop-blur-xl'>
                {leftChild}
                <div className='text-15 font-medium'>{children}</div>
            </div>
        </div>
    );
};

export default PyroPill;
