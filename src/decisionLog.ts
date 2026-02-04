import fs from "node:fs";
import os from "node:os";
import path from "node:path";

export type DecisionLogEntry = {
  timestamp: string;
  task_id: string;
  provider: string;
  decision: string;
  assumptions: string;
  needs_opus_review: "yes" | "no";
};

export type DecisionLoggerOptions = {
  logPath?: string;
};

export class DecisionLogger {
  readonly logPath: string;

  constructor(opts: DecisionLoggerOptions = {}) {
    this.logPath =
      opts.logPath ||
      process.env.DECISION_LOG_PATH ||
      path.join(os.homedir(), "clawdbot", "work", "decisions.log");
  }

  ensureHeader(): void {
    if (fs.existsSync(this.logPath)) return;
    fs.mkdirSync(path.dirname(this.logPath), { recursive: true });
    fs.writeFileSync(
      this.logPath,
      "# decisions.log (append-only)\n# format: timestamp | task_id | provider | decision | assumptions | needs_opus_review\n",
      { encoding: "utf-8" }
    );
  }

  append(e: Omit<DecisionLogEntry, "timestamp"> & { timestamp?: string }): void {
    this.ensureHeader();
    const ts = e.timestamp || new Date().toISOString();
    const line = [
      ts,
      e.task_id,
      e.provider,
      sanitize(e.decision),
      sanitize(e.assumptions),
      e.needs_opus_review,
    ].join(" | ");
    fs.appendFileSync(this.logPath, line + "\n", { encoding: "utf-8" });
  }
}

function sanitize(s: string): string {
  // Keep log one-line, no secrets handling.
  return (s || "").replace(/[\r\n]+/g, " ").trim();
}
