import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/_main.tsx"),
	route("about", "routes/about.tsx"),
	route("character/:slug", "routes/character/[slug].tsx"),
] satisfies RouteConfig;
