# Eesha's Learning Foundation

Official website for **Eesha's Learning Foundation** — a foundation working to make quality
education accessible to every child.

Built with [Vite](https://vite.dev/) and [TypeScript](https://www.typescriptlang.org/).

---

## Tech stack

| Tool | Version | Purpose |
| --- | --- | --- |
| [Vite](https://vite.dev/) | ^8.3.5 | Dev server and production bundler |
| [TypeScript](https://www.typescriptlang.org/) | ~7.0.2 | Type-safe application code |
| CSS | — | Hand-written styles (native CSS nesting) |

No framework is used — this is a lightweight, framework-free static site.

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** `^20.19.0` or `>=22.12.0` — check with `node -v`
- **npm** `10+` (ships with Node.js) — check with `npm -v`
- **Git** — check with `git --version`

> Don't have Node.js? Download the LTS build from [nodejs.org](https://nodejs.org/) or
> install it with [nvm](https://github.com/nvm-sh/nvm).

---

## Setup

### 1. Clone the repository

```bash
git clone git@github.com:Nascomsoft/Eesha-s-Learning-Foundation.git
cd Eesha-s-Learning-Foundation
```

If you prefer HTTPS over SSH, use:

```bash
git clone https://github.com/Nascomsoft/Eesha-s-Learning-Foundation.git
```

### 2. Install dependencies

```bash
npm install
```

This installs everything in `package.json` and creates the `node_modules/` folder.

### 3. Start the development server

```bash
npm run dev
```

Vite prints a local URL — usually **http://localhost:5173**. Open it in your browser.

The dev server supports **Hot Module Replacement (HMR)**: edit any file in `src/` and the
page updates instantly without a manual refresh.

### 4. Build for production

```bash
npm run build
```

This type-checks with `tsc` and bundles the site into `dist/`.

### 5. Preview the production build

```bash
npm run preview
```

Serves the contents of `dist/` locally so you can verify the production build before deploying.

---

## Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Type-check (`tsc`) and build to `dist/` |
| `npm run preview` | Locally serve the built `dist/` output |

---

## Project structure

```
Eesha-s-Learning-Foundation/
├── index.html            # Entry HTML — mounts the app into #app
├── package.json          # Dependencies and npm scripts
├── tsconfig.json         # TypeScript configuration
├── public/               # Static assets copied verbatim into dist/
│   ├── favicon.svg
│   └── icons.svg         # SVG sprite sheet
├── src/
│   ├── main.ts           # App entry point — renders the page markup
│   ├── counter.ts        # Counter button behaviour
│   ├── style.css         # Global styles and layout
│   └── assets/           # Images and logos bundled by Vite
└── dist/                 # Production build output (git-ignored)
```

---

## Pushing to GitHub

The repository is already configured with an `origin` remote pointing at
`git@github.com:Nascomsoft/Eesha-s-Learning-Foundation.git`. If you cloned the repo,
you don't need to add a remote.

### Everyday workflow

```bash
# 1. Check what changed
git status

# 2. Stage your changes
git add .

# 3. Commit with a descriptive message
git commit -m "Add homepage hero section"

# 4. Push to the remote
git push origin main
```

### If you don't have a remote set up

```bash
git remote -v                  # check current remotes
git remote add origin git@github.com:Nascomsoft/Eesha-s-Learning-Foundation.git
git push -u origin main        # -u sets upstream tracking for future pushes
```

### Authentication

The repo uses **SSH** for pushing. If you get a `Permission denied (publickey)` error:

1. Check your SSH key is loaded: `ssh -T git@github.com`
2. If you have no key, generate one: `ssh-keygen -t ed25519 -C "you@example.com"`
3. Add the contents of `~/.ssh/id_ed25519.pub` to
   [GitHub → Settings → SSH and GPG keys](https://github.com/settings/keys)
4. Verify with `ssh -T git@github.com`

To switch to HTTPS instead, run `git remote set-url origin
https://github.com/Nascomsoft/Eesha-s-Learning-Foundation.git` and authenticate with a
[Personal Access Token](https://github.com/settings/tokens) as the password.

### Working on a branch

```bash
git checkout -b feature/hero-section   # create a branch
git add .
git commit -m "Add hero section"
git push -u origin feature/hero-section # push the branch
```

Then open a pull request at
[github.com/Nascomsoft/Eesha-s-Learning-Foundation](https://github.com/Nascomsoft/Eesha-s-Learning-Foundation/pulls).

---

## Contributing

1. Create a branch for your change — don't commit directly to `main`.
2. Keep commits focused with clear messages.
3. Run `npm run build` before pushing to make sure the project still compiles.
4. Open a Pull Request for review.

---

## Deployment

`npm run build` produces a fully static site in `dist/`, which can be hosted on any static
hosting provider — GitHub Pages, Netlify, Vercel, Cloudflare Pages, or a traditional web
server. Point the host's build command at `npm run build` and the publish directory at `dist`.

---

## License

See [LICENSE](LICENSE) if present, otherwise contact the foundation directly.
