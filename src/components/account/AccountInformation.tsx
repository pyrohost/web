import { User } from '@prisma/client';

import { CaretSortIcon, CheckCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons';

import AccountInformationRow from '@/components/account/AccountInformationRow';
import LogoutForm from '@/components/account/LogoutForm';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/Collapsible';

import userAPI from '@/lib/api/user';
import { buildAddress } from '@/lib/utils/address';
import formatPhoneNumber from '@/lib/utils/formatPhoneNumber';

const AccountInformation = async ({ user }: { user: User }) => {
    if (!user) {
        return (
            <div className='flex flex-col rounded-xl border-[1px] border-[#ffffff15] bg-[#ffffff14] shadow-sm'>
                <div className='group flex w-full cursor-pointer select-none items-center justify-between p-6 text-left'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl font-extrabold'>Account Information</h2>
                        <p>We couldn&apos;t get your information. Try refreshing the page!</p>
                    </div>
                </div>
            </div>
        );
    }

    const userAddress = await userAPI.getUserAddress(user);
    const fullName = user?.firstName && user?.lastName ? `${user.firstName} ${user.lastName}` : null;

    return (
        <Collapsible>
            <div className='flex flex-col rounded-xl border-[1px] border-[#ffffff15] bg-[#ffffff14] shadow-sm'>
                <CollapsibleTrigger asChild>
                    <div className='group flex w-full cursor-pointer select-none items-center justify-between p-6 text-left'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-2xl font-extrabold'>Account Information</h2>
                            {!fullName || !user.phone || !userAddress ? (
                                <div className='flex items-center gap-1 text-sm font-bold text-red-500'>
                                    <CrossCircledIcon className='h-5 w-5' />
                                    <p>Missing Information</p>
                                </div>
                            ) : (
                                <div className='flex items-center gap-1 text-sm font-bold text-green-500'>
                                    <CheckCircledIcon className='h-5 w-5' />
                                    <p>Your information is up to date!</p>
                                </div>
                            )}
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <div className='rounded-full p-2 transition group-hover:bg-[#ffffff11]'>
                                <CaretSortIcon className='h-6 w-6' />
                                <span className='sr-only'>Toggle</span>
                            </div>
                        </div>
                    </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <div className='flex flex-col gap-4 overflow-hidden p-6 pt-0'>
                        <AccountInformationRow
                            error={fullName ? '' : 'You must provide your full name.'}
                            label='Full Name'
                            value={fullName}
                            user={user}
                        />
                        <AccountInformationRow locked label='Email' value={user.email} user={user} />
                        <AccountInformationRow
                            error={user.phone ? '' : 'You must provide a phone number.'}
                            label='Phone Number'
                            value={formatPhoneNumber(user.phone as string)}
                            user={user}
                        />
                        <AccountInformationRow
                            error={userAddress ? '' : 'You must provide an address.'}
                            label='Address'
                            value={buildAddress(userAddress)}
                            user={user}
                        />
                        <LogoutForm />
                    </div>
                </CollapsibleContent>
            </div>
        </Collapsible>
    );
};

export default AccountInformation;
