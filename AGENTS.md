# Repository instructions

- Read `docs/README.md` and the owning project/domain contracts before changes. Keep docs current.
- `apps/delidev` and `apps/delitools` own application shells; `servers/delcore-api` and `protos/delcore` own Delcore. Shared scripts own build support.
- Keep development rules in AGENTS.md and feature contracts in docs. Preserve historical validation evidence. Do not add issue/PR identifiers to documentation.
- Use English code/comments and structured logging. Prefer enums.
- Run package-local `pnpm test` for frontend changes and root `cargo test` for Rust changes. Generate required frontend output first; remove all generated `dist` directories before completion.
- Commit after staging without delay. Do not bypass hooks. Use the pinned Rstack formatter through `pnpm format` and `pnpm format:check`; hooks format staged files and preserve unstaged edits.
- Preserve affected manual CI and keep macOS out of ordinary CI. Follow the workflow contract.
- Never commit credentials or signing material. Follow the environment and dependency security contracts.
- Repository code is Apache-2.0; preserve third-party notices. Track assets of at least 512 KiB in exact-path Git LFS attributes.
- Follow Toss Design Guidelines for frontend changes, focus single critical inputs, and support Esc in dialogs.
