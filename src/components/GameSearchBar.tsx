'use client';

import { games } from '@/lib/games';
import { useState } from 'react';

export const GameSearchBar = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    return (
        <>
            <input
                autoFocus
                className='w-full px-6 py-4 rounded-xl bg-[#ffffff12] outline-none shadow-xl'
                type='text'
                placeholder='Search for a game...'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            />
            <div>
                {games
                    .filter((game) => {
                        if (searchTerm === '') {
                            return game;
                        } else if (game.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return game;
                        }
                    })
                    .map((game) => {
                        return (
                            <div key={game.name}>
                                <a href={`/for/${game.slug}`}>{game.name}</a>
                            </div>
                        );
                    })}
            </div>
        </>
    );
};
