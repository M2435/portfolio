# Mounith Reddy — Portfolio

A Next.js portfolio site (App Router, plain CSS, light/dark mode).

## Run it in VS Code

1. Unzip this folder and open it in VS Code (`File → Open Folder…`).
2. Open a terminal in VS Code (`` Ctrl+` ``) and run:
   ```bash
   npm install
   npm run dev
   ```
3. Visit `http://localhost:3000` in your browser.

## Where to edit your content

Everything content-related lives in **`lib/data.js`** — name, bio, education,
skills, projects, achievements, contact links. Edit that one file to update
the whole site.

- Profile photo: `public/images/profile.png` (swap the file, keep the name).
- Resume PDF: `public/resume/Mounith_Reddy_Resume.pdf` (swap the file, keep the name,
  or update the filename in `lib/data.js`).
- Certifications: the section is built and ready — add entries to the
  `certifications` array in `lib/data.js` once you have the images
  (drop images in `public/certifications/`).

## Contact form (sends real email via EmailJS)

The Contact section sends messages directly from the site (no redirect to
your email app) using [EmailJS](https://www.emailjs.com), delivered through
your own Gmail.

1. Sign up at emailjs.com, connect Gmail as an Email Service, and create an
   Email Template with `{{from_name}}`, `{{from_email}}`, and `{{message}}`
   variables.
2. Copy your Service ID, Template ID, and Public Key.
3. Paste them into `lib/emailjsConfig.js`.

Until those are filled in, the form will show a friendly error instead of
silently failing.

## Deploy

Push this folder to a GitHub repo and import it on [vercel.com](https://vercel.com) —
zero config needed, it's a standard Next.js app.
