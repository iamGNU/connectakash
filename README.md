# connectakash

My personal portfolio website, live at **[connectakash.com](https://connectakash.com)**.

## Pages

| Page | File | What it shows |
| --- | --- | --- |
| Home | `index.html` | Intro, about, skills and education |
| Projects | `project.html` | Project cards with descriptions, tech stack and links |
| Coin Flip Game | `coin_flip_game.html` | A small coin toss game with heads/tails stats |

## Built with

- Plain HTML, CSS and JavaScript (no build step)
- [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts
- Dark mode that follows the visitor's system setting by default, with a toggle in the header (the choice is saved in the browser)

## Project structure

```
index.css          Shared styles, colour variables and dark mode
project.css        Projects page styles
coin_flip.css      Coin Flip page styles
coin_flip.js       Coin Flip game logic
theme.js           Dark mode toggle
favicon.svg        Browser tab icon
resources/         Images and the resume PDF (assetResume.pdf)
```

## Running locally

Paths start with `/`, so open the site through a local web server rather than double-clicking the files. For example:

```bash
npx serve .
```

## Deployment

Every push to `main` deploys the site to GitHub Pages through `.github/workflows/static.yml`. The custom domain is set in `CNAME`.

## Updating the resume

Replace `resources/assetResume.pdf` with the new file, keeping the same name. The menu link and the Download Resume button both point to it.
