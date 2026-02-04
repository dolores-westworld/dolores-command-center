import { OwnerActionError } from "../src/errors.js";

export type OpusClientOptions = {
  apiKey?: string;
  baseUrl?: string;
};

export class OpusClient {
  readonly apiKey: string;
  readonly baseUrl?: string;

  constructor(opts: OpusClientOptions = {}) {
    const key = opts.apiKey || process.env.OPUS_API_KEY;
    if (!key) {
      throw new OwnerActionError("Missing OPUS_API_KEY", ["OPUS_API_KEY"]);
    }
    this.apiKey = key;
    this.baseUrl = opts.baseUrl || process.env.OPUS_API_BASE_URL;
  }

  async healthcheck(): Promise<{ ok: true; provider: "opus" }> {
    // Stub only: no network calls in v1.
    return { ok: true, provider: "opus" };
  }

  async complete(_input: { prompt: string }): Promise<never> {
    // Stub only.
    throw new Error("NOT_IMPLEMENTED_NO_NETWORK_CALLS");
  }
}
