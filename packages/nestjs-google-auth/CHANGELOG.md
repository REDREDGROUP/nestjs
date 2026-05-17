# @redredgroup/nestjs-google-auth

## 1.0.1

### Patch Changes

- dbce17b: Upgrade runtime and tooling dependencies to their latest published versions and align the packages with the latest SDK/type changes.

  This includes:

  - upgrading NestJS-related dev tooling, TypeScript 6, Vitest 4, tsup 8, and other workspace dependencies
  - updating Firebase Admin, Google Auth, Google APIs, Mixpanel, OpenAI, Solapi, and related package dependencies
  - migrating package lint and formatting configuration from ESLint/Prettier to Biome 2.3.13
  - re-exporting Firebase Admin types from `@redredgroup/nestjs-firebase-admin` so consumers can use the package's public API for types without adding a separate `firebase-admin` import in application code
