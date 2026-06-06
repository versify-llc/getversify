#!/usr/bin/env bash
set -euo pipefail

#
# deploy.sh
# Validate code changes and then deploy to firebase
#

npm i
npm run types
npm run lint
npm run format:check
npm run build
firebase deploy
