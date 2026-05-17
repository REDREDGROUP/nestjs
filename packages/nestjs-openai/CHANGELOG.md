# @redredgroup/nestjs-openai

## 1.1.1

### Patch Changes

- dbce17b: Upgrade runtime and tooling dependencies to their latest published versions and align the packages with the latest SDK/type changes.

  This includes:

  - upgrading NestJS-related dev tooling, TypeScript 6, Vitest 4, tsup 8, and other workspace dependencies
  - updating Firebase Admin, Google Auth, Google APIs, Mixpanel, OpenAI, Solapi, and related package dependencies
  - migrating package lint and formatting configuration from ESLint/Prettier to Biome 2.3.13
  - re-exporting Firebase Admin types from `@redredgroup/nestjs-firebase-admin` so consumers can use the package's public API for types without adding a separate `firebase-admin` import in application code

## 1.1.0

### Minor Changes

- 3093cbe: Regular package upgrades & NestJS no longer supports versions 7 and 8.

## 1.0.2

### Patch Changes

- de101e0: openai core version up to 4.47.2

## 1.0.1

### Patch Changes

- 35bfd70: The openai core version has been upgraded from 4.20.1 to 4.38.3.
