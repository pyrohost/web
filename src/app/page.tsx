import { Metadata } from 'next';

import WhereYourWorldPlays from '@/components/landing/WhereYourWorldPlays';
import OneApp from '@/components/landing/OneApp';
import TransparentAndOpenSource from '@/components/landing/TransparentAndOpenSource';
import BetterHosting from '@/components/landing/BetterHosting';
import SparkToLife from '@/components/landing/SparkToLife';
import BetterVPS from '@/components/landing/BetterVPS';
import StayInTheLoop from '@/components/landing/StayInTheLoop';
import MakePyroWhereYourWorldPlays from '@/components/landing/MakePyroWhereYourWorldPlays';

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
