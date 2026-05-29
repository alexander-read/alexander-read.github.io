# alexander-read — React + TypeScript + Tailwind

Migrated from Jekyll/GitHub Pages to Vite + React + TypeScript + Tailwind CSS.

## Setup

```bash
npm install
npm run dev       # Start local dev server at http://localhost:5173
npm run build     # Type-check + build to /dist
npm run preview   # Preview the production build locally
```

## Deploy to GitHub Pages

```bash
npm run deploy    # Builds and pushes /dist to the gh-pages branch
```

Then in your repo settings → Pages, set the source branch to `gh-pages`.

> **User/org page** (`alexander-read.github.io`): keep `base: '/'` in `vite.config.ts`.  
> **Project page** (`alexander-read.github.io/some-repo`): change `base` to `'/some-repo/'`.

## Adding Blog Posts

Right now posts are listed manually in `src/pages/Notes.tsx`. To add a post:

1. Add an entry to the `POSTS` array in `Notes.tsx`.
2. Create `src/pages/posts/YourSlug.tsx` with the post content.
3. Add a `<Route path="/blog/your-slug" element={<YourPost />} />` in `App.tsx`.

If you have many Markdown posts to migrate from Jekyll, consider adding
[`vite-plugin-mdx`](https://github.com/vitejs/vite-plugin-react) or
[`@mdx-js/rollup`](https://mdxjs.com/packages/rollup/) so you can write posts
in `.mdx` files and import them as React components — keeping the authoring
experience close to what you had with Jekyll.

## Project Structure

```
src/
  components/
    Layout.tsx       # Sticky navbar + page shell
  pages/
    About.tsx        # Home / About page
    Notes.tsx         # Blog post listing
    posts/           # Individual post components (add these as you migrate)
  styles/
    index.css        # Tailwind directives + syntax highlighting CSS
  App.tsx            # Router
  main.tsx           # Entry point
```
