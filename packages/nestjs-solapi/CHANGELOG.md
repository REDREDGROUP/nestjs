# @redredgroup/nestjs-solapi

## 1.3.1

### Patch Changes

- dbce17b: Upgrade runtime and tooling dependencies to their latest published versions and align the packages with the latest SDK/type changes.

  This includes:

  - upgrading NestJS-related dev tooling, TypeScript 6, Vitest 4, tsup 8, and other workspace dependencies
  - updating Firebase Admin, Google Auth, Google APIs, Mixpanel, OpenAI, Solapi, and related package dependencies
  - migrating package lint and formatting configuration from ESLint/Prettier to Biome 2.3.13
  - re-exporting Firebase Admin types from `@redredgroup/nestjs-firebase-admin` so consumers can use the package's public API for types without adding a separate `firebase-admin` import in application code

## 1.3.0

### Minor Changes

- 3093cbe: Regular package upgrades & NestJS no longer supports versions 7 and 8.

## 1.2.0

### Minor Changes

- upgrade solapi sdk to 5.3.0

## 1.1.1

### Patch Changes

- f8a5503: Added consoleVerificationMode in custom smsVerify. You can now use consoleVerificationMode in your local testing environment to pass verification by entering a verification code that is output to the console without sending a text.

## 1.1.0

### Minor Changes

- e7afa89: Added SMS Verify feature to the custom solapi. Users can now use this feature to send a clean verification number instead of generating and sending a random code.
