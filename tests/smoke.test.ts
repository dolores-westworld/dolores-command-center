import assert from "node:assert";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { Router } from "../router/router.js";
import { OpusClient } from "../providers/opus_client.js";
import { KimiClient } from "../providers/kimi_client.js";
import { OwnerActionError } from "../src/errors.js";
import { DecisionLogger } from "../src/decisionLog.js";

function withEnv<K extends string>(key: K, val: string | undefined, fn: () => void) {
  const prev = process.env[key];
  if (val === undefined) delete process.env[key];
  else process.env[key] = val;
  try {
    fn();
  } finally {
    if (prev === undefined) delete process.env[key];
    else process.env[key] = prev;
  }
}

// 1) missing key detection
withEnv("OPUS_API_KEY", undefined, () => {
  try {
    new OpusClient();
    assert.fail("expected missing OPUS_API_KEY");
  } catch (e) {
    assert.ok(e instanceof OwnerActionError);
    assert.deepEqual(e.missing, ["OPUS_API_KEY"]);
  }
});

withEnv("KIMI_API_KEY", undefined, () => {
  try {
    new KimiClient();
    assert.fail("expected missing KIMI_API_KEY");
  } catch (e) {
    assert.ok(e instanceof OwnerActionError);
    assert.deepEqual(e.missing, ["KIMI_API_KEY"]);
  }
});

// 2) routing selection + decision logging
const tmp = path.join(os.tmpdir(), `decisions-${Date.now()}.log`);
const logger = new DecisionLogger({ logPath: tmp });
const r = new Router({ logger });

const route = r.route({ task_id: "T-001", task_type: "analysis", assumptions: "stub" });
assert.equal(route.primary, "kimi_2_5");
assert.equal(route.fallback, "opus");

// 3) fallback logging
r.logFallback({ task_id: "T-001", from: "kimi_2_5", to: "opus", why: "simulated_unavailable", assumptions: "stub" });

const logText = fs.readFileSync(tmp, "utf-8");
assert.ok(logText.includes("route:analysis->kimi_2_5"));
assert.ok(logText.includes("fallback:kimi_2_5->opus"));

console.log("PASS");
