// SPDX-License-Identifier: FSL-1.1-ALv2
import { define } from "rstack";

define.fmt({
  proseWrap: "preserve",
  embeddedLanguageFormatting: "off",
  ignorePatterns: [
    "**/dist/**",
    "**/node_modules/**",
    "**/vendor/**",
    ".agents/skills/**",
    "crates/fspy_detours_sys/detours/**",
    "**/third-party/**",
    "**/testdata/**",
    "**/fixtures/**",
    "packages/*/src/gen/**",
    "apps/bundlewhy-web/src/gen/**",
    "**/*.generated.*",
    "**/pnpm-lock.yaml",
    "**/package-lock.json",
    "**/npm-shrinkwrap.json",
    "**/yarn.lock",
  ],
});
