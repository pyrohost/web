export default interface Email {
	subject: string;
	html: string | undefined;
	fallback: string;
}
