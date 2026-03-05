# NGALANG BENANG Website

This is a Next.js App Router site.

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Image Optimisation

Convert all `jpg`/`jpeg`/`png` assets in `public/` to optimised `webp` and automatically update source references in `app/`, `components/`, `data/`, and `lib/`:

```bash
pnpm images:optimise
```

This command also runs against the local sibling project at `../sanning`.
