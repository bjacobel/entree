#!/bin/bash

set -e

npx yalc publish --no-dev-mod

mkdir -p my-new-project
pushd my-new-project

yarn init -y
npx --yes yalc add entree
node node_modules/entree/install/lib/index.js
yarn run test
yarn run lint

diff yarn.lock ../yarn.lock

popd
rm -rf my-new-project
