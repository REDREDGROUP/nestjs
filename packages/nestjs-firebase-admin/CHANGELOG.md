# @redredgroup/nestjs-firebase-admin

## 1.2.2

### Patch Changes

- Re-export `firebase-admin/app` runtime helpers such as `cert` from the package public API.

  This allows consumers to import both Firebase Admin types and credential helpers directly from `@redredgroup/nestjs-firebase-admin`.

## 1.2.1

### Patch Changes

- dbce17b: Upgrade runtime and tooling dependencies to their latest published versions and align the packages with the latest SDK/type changes.

  This includes:

  - upgrading NestJS-related dev tooling, TypeScript 6, Vitest 4, tsup 8, and other workspace dependencies
  - updating Firebase Admin, Google Auth, Google APIs, Mixpanel, OpenAI, Solapi, and related package dependencies
  - migrating package lint and formatting configuration from ESLint/Prettier to Biome 2.3.13
  - re-exporting Firebase Admin types from `@redredgroup/nestjs-firebase-admin` so consumers can use the package's public API for types without adding a separate `firebase-admin` import in application code

## 1.2.0

### Minor Changes

- 3093cbe: Regular package upgrades & NestJS no longer supports versions 7 and 8.

## 1.1.2

### Patch Changes

- 87b7b89: Fixed the error The default Firebase app already exists. in the serverlesss project.

## 1.1.1

### Patch Changes

- 3fbcba4: Removed unused code. Added backwards compatibility to README.md.

## 1.1.0

### Minor Changes

- eb754fd: Migrated the existing repository for @redredgroup/nestjs-firebase-admin. The old repository is now read-only and archived.

  The overall code style has changed: it no longer follows the old recursive code style and can now be used in new ways.
