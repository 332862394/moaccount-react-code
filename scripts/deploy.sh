#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m"deploy" &&
git remote add origin git@github.com:332862394/moaccount-react.git &&
git branch -M main &&
git push -u origin main -f
cd -
