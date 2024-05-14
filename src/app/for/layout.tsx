const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='layout'>
            <div className='content'>{children}</div>
        </div>
    );
};

export default Layout;
