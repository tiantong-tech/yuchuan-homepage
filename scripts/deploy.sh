#!/usr/bin/env sh

set -e

yarn run build

cd ./dist

git init
git add -A
git commit -m 'deploy'

git push -f git@git.dev.tencent.com:zhanglan12/zhanglan12.coding.me.git master

cd -
