# inprojects distribution

This GitHub fork preserves [antfu/skills](https://github.com/antfu/skills) history. The maintained distribution is **vitest 1.0.0** at `plugin/`, tagged `inprojects-v1.0.0`. The repository root remains the upstream authoring repository, not the installable plugin.

## Provenance and scope

- Upstream baseline: `e53a142a2420e8cd812cfe9ed0484ab01bc856aa`.
- Canonical skill: `skills/vitest/`.
- MIT license: `LICENSE.md`, copied verbatim to `plugin/LICENSE`.
- The package contains only `vitest` and its references. It includes no hooks, MCP servers or other upstream skills.
- Fork versioning is independent of upstream and of the framework version documented by the skill.

## Authoring and validation

Edit the canonical skill, run `python3 scripts/package_plugin.py`, and commit the generated package. Run `python3 scripts/package_plugin.py --check` to detect drift. See [example checks](../../evals/README.md) for executed checks and limits. Regeneration of upstream skill content requires reapplying and reviewing our corrections.

## Installation

Install `vitest@inprojects-ai-tools` from the team marketplace, which selects `plugin/` at a reviewed release tag. Do not install a second standalone copy of the same skill. In Claude Code prefer `claude plugin install vitest@inprojects-ai-tools --scope project` from the intended project.

## Updating upstream

Fetch `upstream`, review changes since `e53a142a2420e8cd812cfe9ed0484ab01bc856aa`, and merge only after evaluating affected guidance. Re-run examples, package drift and client validation. Publish a new immutable `inprojects-vX.Y.Z` tag and update the marketplace explicitly. Do not move published tags or blindly regenerate from newer framework docs.
