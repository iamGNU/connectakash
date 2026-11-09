# connectakash

My personal portfolio website, live at **[connectakash.com](https://connectakash.com)**.

## Pages

| Page | File | What it shows |
| --- | --- | --- |
| Home | `index.html` | Intro, about, skills and education |
| Projects | `project.html` | Project cards with descriptions, tech stack and links |
| Blog | `blog.html` | List of blog posts; each post lives in `blog/` |
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

## Writing a blog post

1. Copy `blog/hello-world.html` to `blog/your-post-name.html`.
2. Change the title, description, `og:` tags, date and body text.
3. Add a `<li class="post-card">` for it at the top of the list in `blog.html` (newest first).

## Blog subscriptions (Kit)

The blog's **Subscribe by email** button opens a [Kit](https://kit.com) sign-up form in a new tab. Kit emails each new subscriber to confirm, and you can send them new posts from Kit.

1. Create a free Kit account and a form (Grow > Landing Pages & Forms). Keep the confirmation (incentive) email turned on, and edit its wording if you like.
2. Copy the form's share link into `KIT_SUBSCRIBE_URL` at the top of `blog.js`. The subscribe box stays hidden until this is set.
3. For the subscriber count, create a v4 API key in Kit (Settings > Developer) and add it to this repo as an Actions secret named `KIT_API_KEY` (Settings > Secrets and variables > Actions).

The deploy workflow writes the count of confirmed subscribers to `subscribers.json` on every deploy and every 6 hours. The key stays on GitHub and is never sent to visitors.

## Updating the resume

Replace `resources/assetResume.pdf` with the new file, keeping the same name. The menu link and the Download Resume button both point to it.
