import LogoWhite from './LogoWhite';

const Footer = () => {
    return (
        <footer className='sticky bottom-0 flex flex-col justify-between gap-12 px-4 py-7 text-white md:flex-col md:gap-x-12 md:px-10 lg:flex-row'>
            <div className='flex flex-col items-start gap-4 md:w-full lg:w-fit'>
                <LogoWhite />
                <p className='text-xs text-[#999]'>© 2024 Pyro Host Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
