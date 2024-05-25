import { register } from '@/actions/auth';
import RegisterForm from '@/components/ui/RegisterForm';

export default async function Page() {
    return (
        <>
            <h1>Create an account</h1>
            <RegisterForm />
        </>
    );
}
