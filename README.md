## Steve Chen Portfolio Clone (React + TypeScript)

This project re-implements the Steve Chen portfolio site as a Vite-powered React/TypeScript application. All original images are served from the `public/assets` directory, while the compiled Tailwind output is imported as a global stylesheet.

Built with:
- ⚡ Vite for fast development and optimized builds
- ⚛️ React 18 with TypeScript
- 🎨 Tailwind CSS for styling

### Getting Started

```bash
npm install
npm run dev
```

The dev server runs on [http://localhost:5173](http://localhost:5173).

### Production Build

```bash
npm run build
npm run preview
```

The build artifacts are emitted to `dist/`.

### Project Structure

- `src/App.tsx` – JSX generated from the live site and typed for React.
- `src/styles.css` – Tailwind-generated stylesheet captured from the deployed bundle.
- `public/assets` – Images/GIFs referenced by the page.
- `vite.config.ts` – Vite + React configuration.

Feel free to refactor the large JSX markup into smaller components or replace the captured CSS with a Tailwind build pipeline if you plan to evolve the design further.

