import { Metadata } from 'next';

import BetterHosting from '@/components/landing/BetterHosting';
import BetterVPS from '@/components/landing/BetterVPS';
import MakePyroWhereYourWorldPlays from '@/components/landing/MakePyroWhereYourWorldPlays';
import OneApp from '@/components/landing/OneApp';
import SparkToLife from '@/components/landing/SparkToLife';
import StayInTheLoop from '@/components/landing/StayInTheLoop';
import TransparentAndOpenSource from '@/components/landing/TransparentAndOpenSource';
import WhereYourWorldPlays from '@/components/landing/WhereYourWorldPlays';

export const metadata: Metadata = {
    title: 'Pyro - Where your world plays',
};

const Page = () => (
    <>
        <WhereYourWorldPlays />
        <OneApp />
        <TransparentAndOpenSource />
        <BetterHosting />
        <SparkToLife />
        <BetterVPS />
        <StayInTheLoop />
        <MakePyroWhereYourWorldPlays />
    </>
);

export default Page;
