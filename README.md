# toolkit

A simple JavaScript utility library. See [documentation](docs).

## Installation

Install via npm or yarn:

```
yarn add @ekim088/toolkit
```

## Usage

This package supports for barrel and subpath imports:

```
import { clone } from '@ekim088/toolkit';
```

or

```
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
   version, updates `CHANGELOG.md`, and regenerates the typedoc output in
   `docs/`.
3. Merge the "Version Packages" PR to publish to npm. A Discord notification
   confirms the publish.
