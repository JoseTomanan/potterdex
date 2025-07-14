import type { Route } from "./+types/home";
import { FaLinkedin, FaFacebookSquare, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "About Me"},
		{ name: "", content: "" }
	];
}

export default function About() {
	return (
		<>
			<h1>About Me</h1>
			<div className="flex items-baseline gap-2">
				<a href="https://josetmnn.vercel.app" target="_blank" className="hoverable-link">
					portfolio
				</a>
				<span>&middot;</span>
				{socials.map((
						{icon, link, handle}) => (
						<a href={link} target="_blank" className="about-icon">
							{icon}
						</a>
				))}
			</div>
			<p>
				This is my first project with React, in line with the principle of &ldquo;the best way to learn a framework, is to create something with it&rdquo;.
			</p>
			<p>
				Hope you're impressed! ☺️
			</p>
		</>
	);
}

const socials = [
	{
		icon: <FaLinkedin />,
		link: "https://www.linkedin.com/in/jedtomanan/",
		handle: "jedtomanan"
	},
	{
		icon: <FaGithub />,
		link: "https://github.com/JoseTomanan",
		handle: "JoseTomanan"
	},
	{
		icon: <FaFacebookSquare />,
		link: "https://www.facebook.com/jedtomanan/",
		handle: "jedtomanan"
	},
	{
		icon: <AiFillInstagram />,
		link: "https://www.instagram.com/jose.tmnn/",
		handle: "jose.tmnn"
	},
];