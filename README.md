# Aric Notes

A personal knowledge base built with [VitePress](https://vitepress.dev/), inspired by [fe-docs](https://github.com/bosinc/fe-docs).

## Features

- 📝 **Markdown-based** - Write content in Markdown
- 🔍 **Full-text Search** - Built-in local search
- 🎨 **Clean Design** - Minimal and fast
- 📱 **Responsive** - Works on all devices
- 🌐 **Bilingual** - English and Chinese language support
- 📚 **Organized Structure** - Components, Hooks, Utils, Standards, Incidents

## Getting Started

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start development server (port 8888)
pnpm dev

# Or use the explicit command
pnpm docs:dev
```

The documentation site will be available at `http://localhost:8888`.

### Build

```bash
# Build for production
pnpm docs:build
```

### Preview

```bash
# Preview production build locally
pnpm docs:preview
```

## Project Structure

```
vitepress-notes/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts       # VitePress configuration
│   │   └── sidebar/         # Sidebar configurations
│   │       ├── index.ts
│   │       ├── enSidebar.ts
│   │       └── zhSidebar.ts
│   ├── public/              # Static assets
│   │   └── favicon.svg
│   ├── posts/               # Documentation posts (English)
│   │   ├── components/      # React components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── utils/           # Utility functions
│   │   ├── standard/        # Development standards
│   │   └── incidents/       # Incident postmortem
│   ├── zh/                  # Chinese version
│   │   └── posts/           # Same structure as /posts
│   └── index.md             # Home page
├── package.json
└── README.md
```

## Adding Content

1. Create a new `.md` file in the appropriate directory under `docs/posts/` or `docs/zh/posts/`
2. Add your content in Markdown format
3. Update the sidebar in `docs/.vitepress/sidebar/enSidebar.ts` or `zhSidebar.ts`

### Example: Adding a new hook

1. Create `docs/posts/hooks/use-custom-hook.md`
2. Add to `docs/.vitepress/sidebar/enSidebar.ts`:
   ```typescript
   '/posts/hooks/': [
     {
       text: 'Hooks',
       items: [
         { text: 'Introduction', link: '/posts/hooks/index.md' },
         { text: 'useCustomHook', link: '/posts/hooks/use-custom-hook.md' }
       ]
     }
   ]
   ```

## Configuration

Edit `docs/.vitepress/config.mts` to customize:

- Site title and description
- Navigation menu
- Theme settings
- Social links

Edit sidebar files to customize:
- `docs/.vitepress/sidebar/enSidebar.ts` - English sidebar
- `docs/.vitepress/sidebar/zhSidebar.ts` - Chinese sidebar

## License

MIT
