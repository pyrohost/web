'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { games } from '@/lib/static';

export const GameSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const filteredGames = games.filter(
        (game) => searchTerm === '' || game.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const totalPages = Math.ceil(filteredGames.length / itemsPerPage);
    const currentGames = filteredGames.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    return (
        <>
            <div className='relative rounded-xl bg-[#ffffff12]'>
                <svg
                    className='absolute left-4 top-1/2 -translate-y-1/2 opacity-50'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                >
                    <path
                        d='M17.5 17.5L22 22'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        d='M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinejoin='round'
                    />
                </svg>
                <input
                    autoFocus
                    className='w-full bg-transparent py-4 pl-14 outline-none'
                    type='text'
                    placeholder='Search for a game...'
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-3'>
                {currentGames.length > 0 ? (
                    currentGames.map((game) => (
                        // TODO: Finish per game pages and switch to the correct link
                        <Link
                            href={'https://pay.pyro.host/category/Game%20Panel'}
                            className='group relative flex min-h-[124px] flex-col items-center justify-center gap-4 rounded-xl bg-[#ffffff14] p-6 transition hover:-translate-y-0.5'
                            key={game.name}
                        >
                            <h2
                                className='relative z-10 text-2xl font-extrabold'
                                style={{
                                    textShadow: '0 0 10px black, 0 0 20px black, 0 0 30px black',
                                }}
                            >
                                {game.name}
                            </h2>
                            {game.images ? (
                                <>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={game.images.banner}
                                        alt={`${game.name}'s banner`}
                                        decoding='async'
                                        loading='lazy'
                                        className='absolute inset-0 aspect-[1920/620] h-full max-h-[124px] w-full rounded-xl object-cover'
                                    />
                                    <div className='absolute inset-0 rounded-xl bg-black bg-opacity-50 transition group-hover:bg-opacity-25' />
                                </>
                            ) : (
                                <p className='text-center opacity-30'>No banner available</p>
                            )}
                        </Link>
                    ))
                ) : (
                    <div className='col-span-full text-center text-xl font-bold'>
                        No games found.{' '}
                        <Link className='text-brand' href='/discord'>
                            Contact us if we&apos;re missing a game you want to play!
                        </Link>
                    </div>
                )}
            </div>
            <div className='mt-4 flex justify-center  gap-2'>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        aria-label={`Go to page ${i + 1}`}
                        className={`rounded-lg px-4 py-2 font-extrabold focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-50 ${
                            currentPage === i + 1 ? 'bg-brand text-white' : 'bg-[#ffffff14] text-white'
                        }`}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </>
    );
};
