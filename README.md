# Thurmont

Hosted at: https://thurmonteducation.com

Static website for Thurmont Education LLC. This site is built using:
- html, css, and javascript
- Jekyll framework for dependency organization, routing, and more
- Tailwindcss for simplified styling
- DaisyUI and TailwindUI for components built with tailwindcss
- AlpineJS for adding component functionality to components

> The site is deployed using Github Pages

## Development

To collaborate on this repo, follow these steps:

1. Pull repo to your local machine via SSH

2. Install project dependencies with Bundler: `bundle install`

   > **Note:** since Jekyll is written in Ruby, you need to make sure Ruby is installed locally, then run `gem install bundler` for Bundler

4. Build the site locally: `jekyll build` - You'll need to run this after making changes and before pushing code to ensure the most up to date version of the site is built

   > **Tip:** if you run into issues, you could try `bundle exec jekyll build` to ensure you use the correct project dependency versions

6. Serve the site locally: `jekyll serve` - You should see something like "Server address: http://127.0.0.1:4000/" which is where your site is hosted locally

   > **Note:** while developing, you can avoid running jekyll build before serve to see your changes locally. But, always make sure to use jekyll build before pushing code

8. When you add a new Tailwindcss style not already used in the repo, you'll need to run: `npm run build:css` to pull that new style into the project

9. Code pushed to prod is automatically deployed to thurmonteducation.com via GithubPages. Make sure to keep the main and prod branches up to date
