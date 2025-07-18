import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ItemDetails } from "~/components/character/ItemDetails";
import type { Character } from "~/lib/types/character";

import axios from 'axios';
import { Skeleton } from "~/components/ui/skeleton";
import type { Route } from "../character/+types/[slug]";
import { FiArrowUpRight } from "react-icons/fi";


export function meta({}: Route.MetaArgs) {
	const { slug } = useParams();
	return [
		{ title: `POTTERDÉX | ${slug}` },
		{ name: "description", content: ""}
	];
}


export default function CharacterSlug() {
	const { slug } = useParams();

	const [ character, setCharacter ] = useState<any>(null);
	const [ isLoading, setIsLoading ] = useState<boolean>(true);
	
	useEffect(() => {
		axios.get(`https://api.potterdb.com/v1/characters/${slug}`)
				.then(res => {
						setCharacter(res.data.data.attributes);
				})
				.catch(error => {
						console.log(error);
				})
				.finally(() => {
						setIsLoading(false);
				});
	}, [slug]);

	if (isLoading) {
		return CharacterSlugSkeleton();
	}
	
	if (!character) {
		return CharacterSlugNotFound();
	}

	return (
		<main className="container">
			{/* TODO: bread crumbs */}
			<ItemDetails {...character}/>
		</main>
	);
}


function CharacterSlugSkeleton() {
	// TODO: add skeleton that matches intended figure

	return (
		<main className="container">
			<section className="flex flex-col gap-y-2 rounded bg-card border border-border px-2 py-4">
				<Skeleton className="w-80 h-4 pb-2" />
				<Skeleton className="w-125 h-10" />
				<Skeleton className="w-80 h-5" />
				<Skeleton className="w-80 h-4" />
				<Skeleton className="w-60 h-4" />
				<Skeleton className="w-50 h-4" />
			</section>
		</main>
	);
}


function CharacterSlugNotFound() {
	return (
		<main className="container">
			<section>
				<h1>404: Character not found</h1>
				<Link to="/" className="flex flex-row items-baseline gap-2 hover:gap-4 highlight-link">Back to home <FiArrowUpRight /></Link>
			</section>
		</main>
	);
}
