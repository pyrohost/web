import { notFound, redirect } from 'next/navigation';


import UserAPI from '@/lib/api/user';

const Page = async () => {
    // const user = await UserAPI.getUserFromSession(await auth());
    // if (!user || !user.admin) {
    //     return notFound();
    // }

    return (
        <div>
            <h1>Admin Page</h1>
        </div>
    );
};

export default Page;
