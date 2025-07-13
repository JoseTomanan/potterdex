import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "About Me"},
		{ name: "", content: "" }
	];
}

export default function About() {
	return (
		<div>
			<h1>About Me</h1>
			<h6>
				<a>
					My full portfolio
				</a>
			</h6>
		</div>
	);
}