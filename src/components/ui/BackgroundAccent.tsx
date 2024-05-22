const BackgroundAccent = () => {
    return (
        <div className='relative' aria-hidden>
            <div
                className='pointer-events-none absolute left-0 z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%]'
                style={
                    {
                        '--circle-background': '#FF4438',
                    } as React.CSSProperties
                }
            ></div>
            <div
                className='pointer-events-none absolute left-0 top-[-80px] z-[0] hidden h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%] xl:block'
                style={
                    {
                        '--circle-background': '#FF4438',
                    } as React.CSSProperties
                }
            ></div>
            <div
                className='pointer-events-none absolute right-0 top-[400px] z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%]'
                style={
                    {
                        '--circle-background': '#FF4438',
                    } as React.CSSProperties
                }
            ></div>
            <div
                className='pointer-events-none absolute left-[220px] top-[400px] z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%]'
                style={
                    {
                        '--circle-background': '#FF4438',
                    } as React.CSSProperties
                }
            ></div>
            <div
                className='pointer-events-none absolute right-[200px] top-0 z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-[transparent] to-70% opacity-[12%]'
                style={
                    {
                        '--circle-background': '#FF4438',
                    } as React.CSSProperties
                }
            ></div>
        </div>
    );
};

export default BackgroundAccent;