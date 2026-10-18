# DeliTools

DeliTools provides useful end-user tools on desktop, Android, iOS and web, with usage-based billing through delcore. The current shell is blank.

Web address: https://delitools.delino.io

Run `pnpm dev` for web development and `pnpm build` for a static web build.

Run `pnpm dev:desktop` for desktop. Generate mobile projects with `pnpm mobile:android:init` or `pnpm mobile:ios:init`, then use `pnpm dev:android` or `pnpm dev:ios`. Android requires the SDK/NDK and Java 17. iOS requires macOS and Xcode.

Run `pnpm test` here and `cargo test` at the repository root. See the [application contract](../../docs/apps-delitools-foundation.md) for mobile signing, environment configuration and test-channel distribution.
