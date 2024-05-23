import { redirect } from 'next/navigation';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const url = `https://letmegooglethat.com/?${searchParams.get('q') ? `q=${searchParams.get('q')}` : ''}`;
    redirect(url);
}