import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='flex flex-1 flex-col overflow-x-clip xl:px-1 xl:pb-1'>
            <div className='relative z-10 h-full max-h-[800px] min-h-[calc(100vh-76px)] w-full overflow-clip rounded-3xl bg-brand text-white'>
                <div className='relative mx-auto flex h-full w-full max-w-[1620px] flex-col items-center px-6'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
