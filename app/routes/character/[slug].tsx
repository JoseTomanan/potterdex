import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ItemDetails } from "~/components/character/ItemDetails";
import type { Character } from "~/lib/types/character";

import axios from 'axios';
import { Skeleton } from "~/components/ui/skeleton";


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
		<main>
			{/* TODO: bread crumbs */}
			<ItemDetails {...character}/>
		</main>
	);
}


function CharacterSlugSkeleton() {
	// TODO: add skeleton that matches intended figure

	return (
		<main className="container">
			<section className="container flex flex-col gap-y-2">
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
		<main>
			<h1>404: Character not found</h1>
			<Link to="/" className="hoverable-link">Back to items</Link>
		</main>
	);
}
