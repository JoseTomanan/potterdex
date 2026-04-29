# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:5173 with HMR
npm run build      # Production build (outputs to build/client and build/server)
npm run start      # Serve the production build
npm run typecheck  # Run react-router typegen + tsc
```

## Architecture

Potterdex is a Harry Potter character browser — a React Router v7 SSR app that consumes the [PotterDB API](https://api.potterdb.com/v1). The app is dark-mode only.

### Routing (`app/routes.ts`)

| Path | File | Purpose |
|------|------|---------|
| `/` | `routes/_main.tsx` | Paginated character grid with search/sort/filter |
| `/about` | `routes/about.tsx` | Static about page |
| `/character/:slug` | `routes/character/[slug].tsx` | Individual character detail page |

### Global state — `SearchContext`

`app/lib/context/SearchContext.tsx` provides `SearchState` (search string, database, sort field, order) to the whole tree via `SearchProvider` (mounted in `root.tsx`). The home route consumes `useSearchContext()` to build the PotterDB API query URL.

### Data flow

All API calls use `axios` directly inside `useEffect` hooks (no loaders/actions). The home page builds the URL from `SearchState` and re-fetches when search params or page change. The character detail page fetches by `slug` from route params.

### Component layers

- `app/components/character/` — `ItemGrid` renders a grid of `ItemCard`s; clicking a name opens `ItemModal` (shadcn `Dialog`); `ItemDetails` / `ItemDetailsSkeleton` are used on the character slug page.
- `app/components/navbar/` — `NavBar` with `SearchBar`; clicking the logo clears search only when on `/`.
- `app/components/ui/` — shadcn/ui primitives (button, dialog, form, input, pagination, select, skeleton, tooltip).

### Styling

Tailwind CSS v4 with a custom dark theme defined in `app/styles/theme.css`. House colors map to chart tokens:
- Gryffindor → `chart-2` (red-orange)
- Ravenclaw → `chart-1` (blue)
- Hufflepuff → `chart-3` (yellow)
- Slytherin → `chart-4` (green)

Helper `getHouseRelatedStyle(house)` in `app/lib/utils.ts` returns the correct Tailwind class. The `cn()` utility wraps `clsx` + `tailwind-merge`.

### Key constants

`app/lib/constants.ts` exports `ITEMS_PER_PAGE = 20` and `API_BASE_URL = "https://api.potterdb.com/v1"` (though the home route currently inlines the URL — prefer using the constant).
