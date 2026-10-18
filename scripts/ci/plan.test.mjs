import assert from "node:assert/strict";
import test from "node:test";
import { select } from "./plan.mjs";

test("isolated projects select only their validation", () => {
  assert.deepEqual(select(["apps/delitools/src/main.tsx"]), {
    delidev: false,
    delitools: true,
    delcore: false,
  });
  assert.deepEqual(select(["protos/delcore/v1/delcore.proto"]), {
    delidev: false,
    delitools: false,
    delcore: true,
  });
  assert.deepEqual(select(["pnpm-lock.yaml"]), {
    delidev: true,
    delitools: true,
    delcore: true,
  });
});
