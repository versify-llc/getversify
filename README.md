# getversify

Promotional website for the Versify app.

## Domains

### https://getversify.web.app

- Free domain provided by Firebase hosting

### https://versifyapp.com

- Paid domain (required by app stores)
- Purchased through Hostinger
- DNS managed via Cloudflare
- Connected to Firebase hosting (firebase deploy updates site)

## Getting started

Follow these steps to get the project setup for local development.

Install Node 24:

```
nvm install 24 && nvm use 24
```

Install packages:

```
npm install
```

Run the React app in development mode:

```
npm start
```

Open [localhost:3000](http://localhost:3000) in a browser and you should be all set!

## Release

Run the deploy script:

```
npm run deploy
```

If the deploy fails, you probably need to:

1. Disable ad-blockers
2. Reauthenticate with Firebase: `firebase login --reauth`
