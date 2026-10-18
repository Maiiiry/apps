# Repository workflow contract

Install with `pnpm install --frozen-lockfile`. Run `pnpm test` in each app, root `cargo test`, and `go test ./...`. Generate frontend `dist` before Rust validation, then remove generated `dist` directories. Native builds, device launches, account-backed integration and store acceptance are separate checks. Preserve source revision, commands, results and unperformed checks in commits and CI artifacts.

CI compares PRs with their base, pushes with the previous revision, and manual runs with the main merge base (or the parent on main). Manual validation remains affected-only. Ordinary CI runs on Ubuntu; macOS is restricted to the separate main-only mobile release workflow. Delcore validation includes format, vet, build, unit tests, real PostgreSQL integration and OCI checks. Protocol changes require lint, format, regeneration freshness and FILE breaking checks against the comparison revision.

Mobile dispatch preserves signed build-only mode and opt-in Google Play internal/TestFlight uploads. Configure the protected environment described in the application contract before use. Release workflows do not establish store acceptance until run with real accounts.

The Tauri wrapper consumes the immutable release and hashes in `prebuilt-dependencies.lock.json`. These shared binaries remain published by `delinoio/oss`; keep that producer URL and source pin unchanged. Local source builds are explicit; CI source fallback is forbidden.

Use root `pnpm format` and `pnpm format:check` for changed supported files. Lefthook formats staged files while preserving unstaged changes. CI passes the exact comparison through `TURBO_SCM_BASE` and `TURBO_SCM_HEAD`. Track assets of at least 512 KiB with exact-path Git LFS entries and hydrate them before builds. Schema-only baseline checks skip unrelated LFS smudging.

The import baseline uses the former Go module path. Breaking validation normalizes only that exact old `go_package` option to the new module path, preserving all wire and remaining FILE checks. Remove this compatibility projection when all supported baselines use this repository.
