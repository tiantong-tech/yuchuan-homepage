#!/usr/bin/env sh

set -e

yarn run build

cd ./dist

git init
git add -A
git commit -m 'deploy'

# git push -f git@e.coding.net:ilog/yuchuan.git master

scp -r ./* root@139.198.191.120:/app/yuchuan-homepage/dist/

cd -
