import type { Route } from "./+types/home";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin, FaFacebookSquare, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "POKÉDEX | About"},
		{ name: "description", content: "..." }
	];
}

export default function About() {
	return (
		<main className="container">
			<h1>About Me</h1>
			<div className="flex gap-2 items-center">
				{socials.map(({ href, icon }) => (
					<a href={href} target="_blank" className="about-icon">
						{icon}
					</a>
				))}
				<span>&middot;</span>
				<a href="https://josetmnn.vercel.app" target="_blank" className="hoverable-link">
					portfolio
				</a>
			</div>
			<p>
				This is my first project with React; I made this in line with the principle of &ldquo;the best way to learn a framework, is to create something with it&rdquo;.
				Hope you're impressed! ☺️
			</p>
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
		icon: <AiFillInstagram />,
	},
];
