---
name: vitest
description: Version-aware Vitest configuration, assertions, mocking and fixtures. Use for projects that use Vitest or explicitly request it, including React and Vite; preserve the existing runner and project conventions.
metadata:
  author: Anthony Fu
  version: "2026.9.25"
  source: Generated from https://github.com/vitest-dev/vitest, scripts located at https://github.com/antfu/skills
---

Use the installed Vitest version and project configuration as the authority. These references were generated for **Vitest 5.0.1 on 2026-09-25**; the inprojects adaptation was reviewed on 2026-10-08.

## Before applying a recipe

- Read package manifests, lockfiles, test scripts, Vite/Vitest config and setup files. Determine the selected major version, environment, globals mode and existing cleanup. Follow the project's package manager and requested test scope.
- For another major version, verify the relevant API and defaults in that version's official docs. Do not upgrade Vitest, Vite, Node or TypeScript just to fit a recipe. In particular, v5 defaults for `clearMocks`, inline projects and module mocking differ from older releases.
- This is an API reference. Follow the project's test-design policy for behaviors, independent expected values and mocking boundaries. A mock returning a configured value demonstrates API syntax, not application correctness.
- Restore mocks, globals, environment variables and clocks in teardown or `finally`, including after failed assertions. In React, combine timer advancement with the renderer's `act` and respect Testing Library/user-event version compatibility. See [runtime boundaries](references/best-practices-runtime-boundaries.md).
- For a plan, report the version assumptions and proposed cases. For a review, cite concrete defects. For implementation, run the narrow relevant command and report its actual result; distinguish unrun examples from verified behavior.

Read only the reference needed for the task.

## Core

| Topic | Description | Reference |
|-------|-------------|-----------|
| Configuration | Vitest and Vite config integration, defineConfig usage | [core-config](references/core-config.md) |
| CLI | Command line interface, commands and options | [core-cli](references/core-cli.md) |
| Test API | test/it function, modifiers like skip, only, concurrent | [core-test-api](references/core-test-api.md) |
| Describe API | describe/suite for grouping tests and nested suites | [core-describe](references/core-describe.md) |
| Expect API | Assertions with toBe, toEqual, matchers and asymmetric matchers | [core-expect](references/core-expect.md) |
| Hooks | beforeEach, afterEach, beforeAll, afterAll, aroundEach | [core-hooks](references/core-hooks.md) |

## Features

| Topic | Description | Reference |
|-------|-------------|-----------|
| Mocking | Mock functions, modules, timers, dates with vi utilities | [features-mocking](references/features-mocking.md) |
| Snapshots | Snapshot testing with toMatchSnapshot and inline snapshots | [features-snapshots](references/features-snapshots.md) |
| Coverage | Code coverage with V8 or Istanbul providers | [features-coverage](references/features-coverage.md) |
| Test Context | Test fixtures, context.expect, test.extend for custom fixtures | [features-context](references/features-context.md) |
| Concurrency | Concurrent tests, parallel execution, sharding | [features-concurrency](references/features-concurrency.md) |
| Filtering | Filter tests by name, file patterns, tags | [features-filtering](references/features-filtering.md) |
| Test Tags | Label tests with tags to filter runs and apply shared options | [features-test-tags](references/features-test-tags.md) |
| Reporters | Built-in reporters, default selection, CI/output config | [features-reporters](references/features-reporters.md) |
| Benchmarking | Write benchmarks with the bench fixture (Tinybench) | [features-benchmarking](references/features-benchmarking.md) |

## Advanced

| Topic | Description | Reference |
|-------|-------------|-----------|
| Vi Utilities | vi helper: mock, spyOn, fake timers, hoisted, waitFor | [advanced-vi](references/advanced-vi.md) |
| Environments | Test environments: node, jsdom, happy-dom, custom | [advanced-environments](references/advanced-environments.md) |
| Type Testing | Type-level testing with expectTypeOf and assertType | [advanced-type-testing](references/advanced-type-testing.md) |
| Projects | Multi-project workspaces, different configs per project | [advanced-projects](references/advanced-projects.md) |
