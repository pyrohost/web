const LogoutForm = () => {
    return (
        <form action={'/logout'} method='get'>
            <button
                className='relative mt-4 w-fit rounded-full border-0 bg-brand px-5 py-2 text-sm font-bold capitalize outline-none ring-0'
                type='submit'
            >
                Log Out
            </button>
        </form>
    );
};

export default LogoutForm;
