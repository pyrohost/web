import { PyroButton } from '@/components/ui/PyroButton';
import { PyroLink } from '@/components/ui/PyroLink';

import { stripe } from '@/lib/stripe';

export default async function ResultPage({
    searchParams,
}: {
    searchParams: { session_id: string };
}): Promise<JSX.Element> {
    if (!searchParams.session_id) throw new Error('Invalid session ID provided.');

    try {
        await stripe.checkout.sessions.retrieve(searchParams.session_id, {
            expand: ['line_items', 'payment_intent'],
        });
    } catch (error) {
        return (
            <div className='flex flex-1 flex-col items-center justify-center'>
                <div className='mx-auto w-full max-w-lg rounded-2xl border border-brand border-opacity-20 bg-[#111111] p-4'>
                    <img src='https://i.giphy.com/ISOckXUybVfQ4.webp' className='mb-4 w-full rounded-xl' />
                    <h1 className='text-center text-3xl font-extrabold'>Payment Failed</h1>
                    <div className='mt-2'>
                        <p className='text-center'>Your payment could not be processed.</p>{' '}
                        <p className='text-center'>
                            Please try again or <PyroLink href='/discord'>contact support</PyroLink> for assistance.
                        </p>
                    </div>
                    <div className='mx-auto my-4 w-full max-w-lg border-t border-brand border-opacity-20' />

                    <PyroButton href='/for' className='mt-6'>
                        {' '}
                        Go Back to Games
                    </PyroButton>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className='flex flex-1 flex-col items-center justify-center'>
                <div className='mx-auto w-full max-w-lg rounded-2xl border border-brand border-opacity-20 bg-[#111111] p-4'>
                    <img
                        src='https://media1.tenor.com/m/P63DgPMZ8-sAAAAC/party-hellmo.gif'
                        className='mb-4 w-full rounded-xl'
                    />
                    <h1 className='text-center text-3xl font-extrabold'>Thank You for Choosing Pyro!</h1>
                    <p className='mt-2 text-center'>We're excited to have you on board!</p>
                    <div className='mx-auto my-4 w-full max-w-lg border-t border-brand border-opacity-20' />

                    <h2 className='text-center text-2xl font-extrabold'>What's next?</h2>
                    <p className='mt-2 text-center'>
                        Check your email for login details if you don't already have a Pyrodactyl account.
                    </p>

                    <PyroButton href='https://panel.pyro.host' external={true} className='mt-6'>
                        {' '}
                        Go to Pyrodactyl Panel
                    </PyroButton>
                </div>
            </div>
        </>
    );
}
