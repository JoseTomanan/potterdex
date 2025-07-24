import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemDetails, ItemDetailsSkeleton } from "~/components/character/ItemDetails";

import axios from 'axios';
import type { Route } from "../character/+types/[slug]";


export function meta({}: Route.MetaArgs) {
	return [
		{ title: `POTTERDÉX | Character` },
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

	const contents = isLoading
				? <ItemDetailsSkeleton />
				: <ItemDetails {...character}/>;

	return (
		<main className="container">
			<div className="h-6" />
			<section className="character-slug-page space-y-4">
				{contents}
			</section>
		</main>
	);
}
