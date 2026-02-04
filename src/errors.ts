export type NeedsOwnerAction = {
  kind: "NEEDS_OWNER_ACTION";
  message: string;
  missing: string[];
};

export class OwnerActionError extends Error {
  readonly kind = "NEEDS_OWNER_ACTION" as const;
  readonly missing: string[];

  constructor(message: string, missing: string[]) {
    super(message);
    this.name = "OwnerActionError";
    this.missing = missing;
  }

  toJSON(): NeedsOwnerAction {
    return { kind: this.kind, message: this.message, missing: this.missing };
  }
}
