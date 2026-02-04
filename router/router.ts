import { DecisionLogger } from "../src/decisionLog.js";

export type ProviderName = "opus" | "kimi_2_5" | "codex";

export type TaskType =
  | "governance"
  | "analysis"
  | "spec_drafting"
  | "implementation"
  | "debug";

export type Route = {
  task_type: TaskType;
  primary: ProviderName;
  fallback?: ProviderName;
};

export type RouterOptions = {
  logger?: DecisionLogger;
};

const ROUTES: Record<TaskType, Route> = {
  governance: { task_type: "governance", primary: "opus", fallback: "kimi_2_5" },
  analysis: { task_type: "analysis", primary: "kimi_2_5", fallback: "opus" },
  spec_drafting: { task_type: "spec_drafting", primary: "codex", fallback: "kimi_2_5" },
  implementation: { task_type: "implementation", primary: "codex" },
  debug: { task_type: "debug", primary: "codex", fallback: "opus" },
};

export class Router {
  private readonly logger: DecisionLogger;

  constructor(opts: RouterOptions = {}) {
    this.logger = opts.logger || new DecisionLogger();
  }

  route(input: { task_id: string; task_type: TaskType; assumptions: string }): Route {
    const r = ROUTES[input.task_type];
    this.logger.append({
      task_id: input.task_id,
      provider: r.primary,
      decision: `route:${input.task_type}->${r.primary}${r.fallback ? ` (fallback ${r.fallback})` : ""}`,
      assumptions: input.assumptions,
      needs_opus_review: r.primary === "opus" ? "no" : "yes",
    });
    return r;
  }

  logFallback(input: { task_id: string; from: ProviderName; to: ProviderName; why: string; assumptions: string }): void {
    this.logger.append({
      task_id: input.task_id,
      provider: input.to,
      decision: `fallback:${input.from}->${input.to} (${input.why})`,
      assumptions: input.assumptions,
      needs_opus_review: input.to === "opus" ? "no" : "yes",
    });
  }
}
