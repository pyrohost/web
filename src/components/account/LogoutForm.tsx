import { PyroButton } from "@/components/ui/PyroButton";

const LogoutForm = () => {
	return (
		<form action={"/logout"} method="get">
			<PyroButton type={"submit"} size={"small"}>
				Log Out
			</PyroButton>
		</form>
	);
};

export default LogoutForm;
