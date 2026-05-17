# @redredgroup/nestjs-mixpanel

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

## 1.1.0

### Minor Changes

- 2c021de: inject data from an Array of values by prefixing the role with Many.
