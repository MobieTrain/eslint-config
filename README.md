# eslint-config
Sharable eslint configuration

## Publishing

Upon merging commits into `main` the [`release-please`](https://github.com/googleapis/release-please) action is going to open a PR updating `CHANGELOG.md` and `package.json`, after merge, it is going to create a new tag. Then our Google Cloud Build is going to publish it into our private repo when the build is approved.