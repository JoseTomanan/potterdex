import type { Route } from "./+types/home";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin, FaFacebookSquare, FaGithub } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "POKÉDEX | About"},
		{ name: "description", content: "..." }
	];
}

export default function About() {
	return (
		<main className="flex flex-col mt-16 gap-6">
			<section className="container">
				<div className="flex flex-col gap-1">
					<h1>About Me</h1>
					<span className="flex gap-2 items-center">
						{socials.map(({ href, icon }, i) => (
							<a href={href} target="_blank" className="about-icon" key={i}>
								{icon}
							</a>
						))}
						<span>&middot;</span>
						<a href="https://josetmnn.vercel.app" target="_blank" className="hoverable-link">
							portfolio
						</a>
					</span>
				</div>
				<div>
					<p>
						This is my first project with React. I made this project in line with the principle of &ldquo;the best way to learn a framework, is to create something with it&rdquo;.
						<br/>
						I hope you're impressed!
					</p>
					<p>
						The repository of this web app can be found <a href="https://github.com/JoseTomanan/potterdex" className="hoverable-link">here</a>.
					</p>
				</div>
			</section>
		</main>
	);
}

const socials = [
	{
		href: "https://www.linkedin.com/in/jedtomanan/",
		icon: <FaLinkedin />,
	},
	{
		href: "https://github.com/JoseTomanan",
		icon: <FaGithub />,
	},
	{
		href: "https://www.facebook.com/jedtomanan/",
		icon: <FaFacebookSquare />,
	},
	{
		href: "https://www.instagram.com/jose.tmnn/",
		icon: <PiInstagramLogoFill />,
	},
];
