# Release

How to release an updated version of this website:

## Hostinger

Hostinger runs the website for our paid domain: versifyapp.com

The release process is manual because you need to login to the Hostinger console and upload the build files.

Create a local build:

```
npm run build
```

## Firebase

Firebase hosts our free domain: getversify.web.app

⚠️ You might need to turn off your ad-blocker before running this script ⚠️

Run deploy script:

```
npm run deploy
```

If the deploy fails, you probably need to reauthenticate with firebase:

```
firebase login --reauth
```

That's all 🎉
