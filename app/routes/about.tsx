import type { Route } from "./+types/about";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin, FaFacebookSquare, FaGithub } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "POTTERDÉX | About"},
		{ name: "description", content: "About the creator" }
	];
}

export default function About() {
	return (
		<main className="container">
			<div className="h-8"/>
			<section className="flex flex-col gap-4 px-2">
				<div className="flex flex-col gap-1">
					<h1>About Me</h1>
					<span className="flex gap-2 items-center">
						{socials.map(({ href, icon }, i) => (
							<a href={href} target="_blank" className="about-icon" key={i}>
								{icon}
							</a>
						))}
					</span>
				</div>

				<div>
					<p>
						This frontend UI uses the <a href="https://docs.potterdb.com" target="_blank" className="hoverable-link">PotterDB API</a>.
						Logo is taken from open source emoji library <a href="https://github.com/twitter/twemoji" target="_blank" className="hoverable-link">Twemoji</a>.
					</p>
					<p>
						This is my first project with React; I made this in line with the principle of &ldquo;the best way to learn a framework, is to create something with it&rdquo;.
						<br />
						You can visit this app's <a href="https://github.com/JoseTomanan/potterdex" className="hoverable-link"> Git repository</a>.
						You can also visit my <a href="https://josetmnn.vercel.app" target="_blank" className="hoverable-link">portfolio webpage</a>.
					</p>
				</div>

				<a
					href="https://www.linkedin.com/in/jedtomanan/"
					className="w-fit flex items-baseline gap-2 hover:gap-4 highlight-link">
					Connect with me
					<FiArrowUpRight />
				</a>
			</section>
		</main>
	);
}

const socials: {href: string, icon: any}[] = [
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
