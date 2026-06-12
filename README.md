# toolkit

[![npm version](https://img.shields.io/npm/v/@ekim088/toolkit)](https://www.npmjs.com/package/@ekim088/toolkit)
[![CI](https://github.com/ekim088/toolkit/actions/workflows/ci.yaml/badge.svg)](https://github.com/ekim088/toolkit/actions/workflows/ci.yaml)

A simple JavaScript utility library. See the [API documentation](https://ekim088.github.io/toolkit/).

## Installation

Install via npm or yarn:

```
yarn add @ekim088/toolkit
```

This package is ESM-only and requires Node.js 22 or later.

## Usage

This package supports both barrel and subpath imports:

```js
import { clone } from '@ekim088/toolkit';
```

or

```js
import { clone } from '@ekim088/toolkit/clone';
```

## Releasing

Releases are automated using [changesets](https://github.com/changesets/changesets):

1. In your feature PR, run `yarn changeset` to pick the bump type
   (major/minor/patch) and add a description of your changes. Commit the
   generated markdown file in `.changeset/` with your changes. **Only changes
   that impact the published package require a changeset.**
2. When the PR merges to `main`, the Release workflow opens (or updates) a
   "Version Packages" PR that aggregates all pending changesets: it bumps the
   version and updates `CHANGELOG.md`.
3. Merge the "Version Packages" PR to publish to npm. A notification is sent on
   successful publish and the [docs site](https://ekim088.github.io/toolkit/)
   is automatically re-deployed.
