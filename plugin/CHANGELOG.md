# Changelog

All notable changes to the inprojects distribution will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this distribution follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1] - 2026-10-08

### Changed

- Rewrote the skill description with concrete trigger situations and Polish request phrases, so agents that route by description alone, such as Claude Code, select the skill reliably.
- Pointed React test-design decisions to the `ui-tests-design` skill.

## [1.0.0] - 2026-10-08

### Added

- Added a focused Claude Code, Codex and portable plugin package with preserved upstream MIT license.
- Added reproducible evaluation examples and source provenance.

### Fixed

- Made version assumptions explicit and ensured cleanup in standalone async timer and module-mocking examples.

### Changed

- Scoped discovery to Vitest projects and separated API examples from behavior-test oracles.

[Unreleased]: https://github.com/inprojectspl/antfu-skills/compare/inprojects-v1.0.1...main
[1.0.1]: https://github.com/inprojectspl/antfu-skills/compare/inprojects-v1.0.0...inprojects-v1.0.1
[1.0.0]: https://github.com/inprojectspl/antfu-skills/releases/tag/inprojects-v1.0.0
