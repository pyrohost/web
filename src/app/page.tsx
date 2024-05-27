import type { Metadata } from "next";

import BetterHosting from "@/components/marketing/BetterHosting";
import BetterVPS from "@/components/marketing/BetterVPS";
import MakePyroWhereYourWorldPlays from "@/components/marketing/MakePyroWhereYourWorldPlays";
import OneApp from "@/components/marketing/OneApp";
import SparkToLife from "@/components/marketing/SparkToLife";
import StayInTheLoop from "@/components/marketing/StayInTheLoop";
import TransparentAndOpenSource from "@/components/marketing/TransparentAndOpenSource";
import WhereYourWorldPlays from "@/components/marketing/WhereYourWorldPlays";

export const metadata: Metadata = {
	title: "Pyro - Where your world plays",
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
