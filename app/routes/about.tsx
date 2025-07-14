import type { Route } from "./+types/home";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin, FaFacebookSquare, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "About Me"},
		{ name: "description", content: "..." }
	];
}

export default function About() {
	return (
		<>
			<h1>About Me</h1>
			<div className="flex gap-2 items-center">
				{socials.map(item => (
					<a href={ item.link } target="_blank" className="about-icon">
						{ item.icon }
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
		</>
	);
}

const socials = [
	{
		key: "LI: jedtomanan",
		icon: <FaLinkedin />,
		link: "https://www.linkedin.com/in/jedtomanan/",
	},
	{
		key: "Git: JoseTomanan",
		link: "https://github.com/JoseTomanan",
		icon: <FaGithub />,
	},
	{
		key: "FB: jedtomanan",
		link: "https://www.facebook.com/jedtomanan/",
		icon: <FaFacebookSquare />,
	},
	{
		key: "IG: jose.tmnn",
		link: "https://www.instagram.com/jose.tmnn/",
		icon: <AiFillInstagram />,
	},
];