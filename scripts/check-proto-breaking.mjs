// SPDX-License-Identifier: Apache-2.0
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const buf = fileURLToPath(
  new URL("../node_modules/@bufbuild/buf/bin/buf", import.meta.url),
);
const revision = execFileSync(
  "git",
  ["rev-parse", "--verify", "--end-of-options", `${process.argv[2]}^{commit}`],
  { encoding: "utf8" },
).trim();
const temporary = mkdtempSync(join(tmpdir(), "proto-baseline-"));
const run = (...args) =>
  execFileSync(process.execPath, [buf, ...args], {
    stdio: "inherit",
    env: { ...process.env, GIT_LFS_SKIP_SMUDGE: "1" },
  });
try {
  const original = join(temporary, "original.json");
  const projected = join(temporary, "projected.json");
  run(
    "build",
    `.git#ref=${revision}`,
    "--as-file-descriptor-set",
    "--output",
    original,
  );
  const baseline = JSON.parse(readFileSync(original, "utf8"));
  // The import baseline uses the previous repository's Go module. Normalize
  // only that known ownership transfer; retain all wire and other FILE checks.
  // Remove this projection when supported baselines all use delino-apps.
  for (const file of baseline.file ?? []) {
    if (
      file.package === "delcore.v1" &&
      file.options?.goPackage ===
        "github.com/delinoio/oss/protos/gen/go/delcore/v1;delcorev1"
    ) {
      file.options.goPackage =
        "github.com/delinoio/delino-apps/protos/gen/go/delcore/v1;delcorev1";
    }
  }
  writeFileSync(projected, JSON.stringify(baseline));
  run("breaking", "--against", projected);
} finally {
  rmSync(temporary, { recursive: true, force: true });
}
