import { redirect } from 'next/navigation';

export async function GET() {
    redirect('https://github.com/pyrohost/legal/blob/main/licenses/PSAL.md');
}
