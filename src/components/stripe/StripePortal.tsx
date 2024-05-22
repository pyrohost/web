import StripePortalButton from '@/components/stripe/StripePortalButton';

const StripePortal = async ({ customerId }: { customerId: string }) => {
    if (!customerId || customerId === '') {
        return <p>No customer ID provided</p>;
    }

    return <StripePortalButton customerID={customerId} />;
};

export default StripePortal;
