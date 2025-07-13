import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "About Me"},
		{ name: "", content: "" }
	];
}

export default function About() {
	return <>
		<h1>About Me</h1>
		<h6>
			<a className="hoverable-link">
				My full portfolio
			</a>
		</h6>
	</>
}