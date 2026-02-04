import { OwnerActionError } from "../src/errors.js";

export type KimiClientOptions = {
  apiKey?: string;
  baseUrl?: string;
};

export class KimiClient {
  readonly apiKey: string;
  readonly baseUrl?: string;

  constructor(opts: KimiClientOptions = {}) {
    const key = opts.apiKey || process.env.KIMI_API_KEY;
    if (!key) {
      throw new OwnerActionError("Missing KIMI_API_KEY", ["KIMI_API_KEY"]);
    }
    this.apiKey = key;
    this.baseUrl = opts.baseUrl || process.env.KIMI_API_BASE_URL;
  }

  async healthcheck(): Promise<{ ok: true; provider: "kimi_2_5" }> {
    // Stub only: no network calls in v1.
    return { ok: true, provider: "kimi_2_5" };
  }

  async complete(_input: { prompt: string }): Promise<never> {
    // Stub only.
    throw new Error("NOT_IMPLEMENTED_NO_NETWORK_CALLS");
  }
}
