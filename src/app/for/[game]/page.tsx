import { notFound } from 'next/navigation';

import { getGameBySlug } from '@/lib/static';

const Page = ({ params }: { params: { game: string } }) => {
    const game = getGameBySlug(params.game);
    if (!game) {
        return notFound();
    }

    return (
        <div>
            <h1>{game.name}</h1>
            <img src={game.images.banner} alt={game.name} />
        </div>
    );
};

export default Page;
