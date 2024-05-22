import prisma from '@/lib/prisma';

export async function POST(request: Request) {
    const body = await request.json();

    try {
        const user = await prisma.user.update({
            where: { id: body.id },
            data: {
                phone: body.phone,
                preferredName: body.preferredName,
                pronouns: body.pronouns,
            },
        });

        return Response.json(user);
    } catch (error) {
        return new Response(`An error occurred updating user.`, {
            status: 500,
        });
    }
}
