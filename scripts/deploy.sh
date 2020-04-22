#!/usr/bin/env sh

set -e

yarn run build

qsctl rm qs://yuchuan-homepage/ -r

qsctl sync ./dist/ qs://yuchuan-homepage/ -r
