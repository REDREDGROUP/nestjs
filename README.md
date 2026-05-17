# REDREDGROUP NestJS Packages

NestJS integrations maintained in a pnpm workspace.

## Packages

- `@redredgroup/nestjs-firebase-admin`: Firebase Admin integration
- `@redredgroup/nestjs-google-auth`: Google Authentication integration
- `@redredgroup/nestjs-mixpanel`: Mixpanel integration
- `@redredgroup/nestjs-openai`: OpenAI integration
- `@redredgroup/nestjs-solapi`: SOLAPI integration

## Requirements

- Node.js `24.13.0`
- pnpm `10.11.1`

## Install

```bash
pnpm install
```

## Workspace Commands

```bash
pnpm format
pnpm lint
pnpm type-check
pnpm test
pnpm build:production
```

This workspace uses Biome for formatting and linting.

## Publish

```bash
pnpm package-publish
```

Changesets are used for versioning and release notes.

## Copyright

© 2026 REDREDGROUP Software. All Right Reserved.
