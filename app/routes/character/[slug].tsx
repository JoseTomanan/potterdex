import { FaArrowsSpin } from "react-icons/fa6";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ItemDetails } from "~/components/item/ItemDetails";
import type { Character } from "~/lib/types/character";

import axios from 'axios';
import { Skeleton } from "~/components/ui/skeleton";


const fetcher = (url: string) => fetch(url).then(res => res.json);

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
		<main className="container flex flex-col justify-center align-middle">
			<FaArrowsSpin className="size-20 animate-spin" />
			<Skeleton className="w-full h-20" />
		</main>
	);
}


function CharacterSlugNotFound() {
	return (
		<main>
			<h1>404: Character not found</h1>
			<Link to="/">Back to items</Link>
		</main>
	);
}
