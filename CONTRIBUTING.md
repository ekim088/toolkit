# Contributing

## Prerequisites

Node.js 24+ and Yarn 4. Run `corepack enable` once to pick up the Yarn version
pinned in `packageManager`, then install dependencies:

```sh
yarn install --immutable
```

## Commands

```sh
yarn test            # vitest in watch mode (test:ci for a single run)
yarn lint            # eslint + tsc --noEmit
yarn build           # compile to ./lib
yarn docs            # generate the typedoc site into ./docs
yarn lint:package    # build, pack, and validate with publint + attw
```

## Commits

Commits must follow [Conventional Commits](https://www.conventionalcommits.org/).
A commit-hook enforces this automatically and validates staged changes.

## Changesets

Any change that affects the published package needs a [changeset](https://github.com/changesets/changesets). In your feature PR, run `yarn changeset`, pick the bump type (major/minor/patch),
and describe the change; commit the generated file in `.changeset/` alongside
your work. **Only changes that impact the published package require a changeset** -
internal-only changes (docs, CI, tests) can skip it.

## Releasing

Releases are automated using changesets:

1. When a PR carrying a changeset merges to `main`, the Release workflow opens
   (or updates) a "Version Packages" PR that aggregates all pending changesets:
   it bumps the version and updates `CHANGELOG.md`.
2. Merge the "Version Packages" PR to publish to npm. The Release workflow runs
   `yarn lint` and `yarn test:ci` before publishing. A notification is sent on
   successful publish and the [docs site](https://ekim088.github.io/toolkit/)
   is automatically re-deployed.
