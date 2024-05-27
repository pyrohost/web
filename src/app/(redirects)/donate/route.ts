import { redirect } from "next/navigation";

export async function GET() {
	redirect("https://opencollective.com/pyro-inc");
}
