import { games } from '@/lib/games';

const Page = ({ params }: { params: { game: string } }) => {
    const { game } = params;
    if (!games.map((g) => g.slug).includes(game)) {
        return <div>Game not found</div>;
    }

    return <div>{game}</div>;
};

export default Page;
