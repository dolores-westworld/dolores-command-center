// Status Dashboard — static files only. Sample data only. No network calls.

const data = {
  stats: [],
  decisions: [
    {
      id: "D-101",
      kind: "Decision",
      title: "Provide Opus + Kimi API endpoints",
      question: "What base URLs/endpoints should OPUS_API_KEY and KIMI_API_KEY target (and are they OpenAI-compatible)?",
    },
    {
      id: "D-102",
      kind: "Decision",
      title: "Confirm provider request/response schema",
      question: "For each provider API: OpenAI-compatible chat/completions or provider-specific payloads?",
    },
    {
      id: "D-103",
      kind: "Decision",
      title: "Drawer UX behavior on desktop",
      question: "Should drawers be mobile-only (desktop stays modal) or drawers everywhere?",
    },
    {
      id: "D-104",
      kind: "Decision",
      title: "Connector enablement path",
      question: "Who/where will create+install the GitHub App and provide installation context so we can test safely?",
    },
  ],
  connectors: [
    { name: "github_ro_status_dashboard_dolores_command_center", scope: "dolores-westworld/dolores-command-center@main :: status-dashboard/**", status: "Planned" },
  ],
  skills: [
    // Fill with real skills as you approve them (no auto-install).
    // { id: "S-001", status: "New", name: "...", purpose: "...", source: "..." }
  ],
  x_intake: [
    { id: "X-001", status: "Adapted", title: "Claude Code tips (plan-first, breakage/tests, repro-first)", source: "svpino" },
    { id: "X-002", status: "Parked", title: "Reddit /json thread ingestion idea", source: "TheAhmadOsman" },
    { id: "X-003", status: "Reviewed", title: "Mission control dashboard w/ autonomous agents (flagged)", source: "koltregaskes" },
    { id: "X-004", status: "New", title: "ryancarson link (pending review)", source: "ryancarson" },
  ],
  kanban: [
    {
      name: "Ideas",
      items: [
        {
          title: "Event-industry intel digest",
          tags: ["violet", "research"],
          detail: { truth: "Not specified.", blocker: "Not specified.", decision: "Not specified.", artifacts: [] },
        },
        {
          title: "Contractor ops console",
          tags: ["cyan", "ops"],
          detail: { truth: "Not specified.", blocker: "Not specified.", decision: "Not specified.", artifacts: [] },
        },
        {
          title: "Order QA layer concept",
          tags: ["amber", "quality"],
          detail: { truth: "Not specified.", blocker: "Not specified.", decision: "Not specified.", artifacts: [] },
        },
      ],
    },
    {
      name: "In Evaluation",
      items: [
        {
          title: "Wire Opus/Kimi API surfaces + token loading; unblock provider tests",
          tags: ["violet", "provider"],
          detail: { truth: "API-first routing approved; keys/endpoints missing.", blocker: "OPUS_API_KEY, KIMI_API_KEY, endpoints not provided.", decision: "Provide keys/endpoints; confirm request schema.", artifacts: ["provider-router.yaml", "decisions.log"] },
        },
        {
          title: "Drawer drill-down UX (bottom sheets)",
          tags: ["cyan", "ux"],
          detail: { truth: "Pending.", blocker: "Awaiting implementation.", decision: "Drawer on mobile only vs all sizes.", artifacts: [] },
        },
        {
          title: "GitHub read-only connector (status-dashboard/**)",
          tags: ["violet", "connector"],
          detail: { truth: "Planned scope approved; enablement pending.", blocker: "Needs GitHub App creation surface/auth.", decision: "Create dolores-gatekeeper app and install on repo.", artifacts: [] },
        },
        {
          title: "Connector governance canon",
          tags: ["cyan", "governance"],
          detail: { truth: "Not specified.", blocker: "Not specified.", decision: "Not specified.", artifacts: [] },
        },
        {
          title: "Forum-analysis intake pattern",
          tags: ["violet", "research"],
          detail: { truth: "Not specified.", blocker: "Not specified.", decision: "Not specified.", artifacts: [] },
        },
        {
          title: "Enable dashboard updates via input contract",
          tags: ["cyan", "governance"],
          detail: { truth: "Not specified.", blocker: "Not specified.", decision: "Not specified.", artifacts: [] },
        },
      ],
    },
    {
      name: "Spec Drafted",
      items: [
        {
          title: "Daily cognitive security check",
          tags: ["green", "governance"],
          detail: { truth: "Not specified.", blocker: "Not specified.", decision: "Not specified.", artifacts: [] },
        },
        {
          title: "Execution gate rule",
          tags: ["green", "governance"],
          detail: { truth: "Not specified.", blocker: "Not specified.", decision: "Not specified.", artifacts: [] },
        },
      ],
    },
    {
      name: "Blocked",
      items: [
        {
          title: "Anything requiring external access",
          tags: ["rose", "gate"],
          detail: { truth: "Not specified.", blocker: "Not specified.", decision: "Not specified.", artifacts: [] },
        },
        {
          title: "Unbounded ‘monitor daily’ ideas",
          tags: ["rose", "gate"],
          detail: { truth: "Not specified.", blocker: "Not specified.", decision: "Not specified.", artifacts: [] },
        },
      ],
    },
    {
      name: "Completed",
      items: [
        {
          title: "Spec 001/002 fidelity tests",
          tags: ["green", "qa"],
          detail: { truth: "Not specified.", blocker: "Not specified.", decision: "Not specified.", artifacts: [] },
        },
        {
          title: "Static scaffold exercises",
          tags: ["green", "qa"],
          detail: { truth: "Not specified.", blocker: "Not specified.", decision: "Not specified.", artifacts: [] },
        },
      ],
    },
  ],
  workingOn: [
    {
      title: "Governance gym drill set (manual)",
      sub: "Request-driven only",
      pill: "Governance",
      detail: { doing: "Not specified.", notDoing: "Not specified.", doneMeans: [] },
    },
    {
      title: "Connector pilot plan (read-only)",
      sub: "Single label • metadata-only",
      pill: "Connector",
      detail: { doing: "Not specified.", notDoing: "Not specified.", doneMeans: [] },
    },
    {
      title: "Execution packets format discipline",
      sub: "Paper-first broker simulation",
      pill: "Level 6",
      detail: { doing: "Not specified.", notDoing: "Not specified.", doneMeans: [] },
    },
    {
      title: "Money idea intake normalization",
      sub: "Neutral capture only",
      pill: "Ideas",
      detail: { doing: "Not specified.", notDoing: "Not specified.", doneMeans: [] },
    },
    {
      title: "Internal dashboard skeleton",
      sub: "Premium dark mode scaffold",
      pill: "UI",
      detail: { doing: "Not specified.", notDoing: "Not specified.", doneMeans: [] },
    },
  ],
  levels: [
    {
      level: 5,
      state: "COMPLETED",
      title: "Level 5",
      subtitle: "Governance locked",
      achieved: [
        "Level 5 — Governance boundaries and stop rules locked.",
        "Cognition-only architecture with explicit role separation.",
        "Binary execution gating and boring, bounded execution.",
        "X-idea intake runs security screening before novelty.",
      ],
    },
    {
      level: 6,
      state: "COMPLETED",
      title: "Level 6",
      subtitle: "Brokered static artifacts",
      achieved: [
        "Level 6 — Patch-only execution discipline validated.",
        "Execution packets and broker decisions remain bounded and checkable.",
        "Static artifact execution permitted without connectors or external access.",
        "Patch-only iteration stays minimal and scoped.",
      ],
    },
    {
      level: 7,
      state: "REMAINING",
      title: "Level 7",
      subtitle: "State authority + controlled updates",
      trying: [
        "Level 7 — Structured human input translated into dashboard state.",
        "Translate explicit dashboard inputs into minimal, broker-applied patches.",
        "Keep dashboard state grounded in explicit artifacts and owner-provided inputs.",
      ],
      success: [
        "Updates apply cleanly with minimal diffs and no scope creep.",
        "No inferred personal/private state; escalation on any ambiguity.",
      ],
    },
    {
      level: 8,
      state: "REMAINING",
      title: "Level 8",
      subtitle: "Connector pilots (read-only, gated)",
      trying: [
        "Level 8 — Natural language intake with bounded interpretation.",
        "Run reversible, single-scope connector pilots under strict gate conditions.",
        "Maintain auditability and immediate revocation without drift.",
      ],
      success: [
        "All access stays within single-label/calendar metadata boundaries.",
        "Any scope ambiguity blocks and escalates before access.",
      ],
    },
    {
      level: 9,
      state: "REMAINING",
      title: "Level 9",
      subtitle: "Robust failure handling",
      trying: [
        "Level 9 — Autonomous proposal generation with human gate.",
        "Demonstrate clean halts, rejections, and escalations under pressure.",
        "Prevent “just this once” exceptions and authority creep.",
      ],
      success: [
        "At least one rejected execution handled without defensiveness or drift.",
        "Escalation occurs earlier than risk, not after.",
      ],
    },
    {
      level: 10,
      state: "REMAINING",
      title: "Level 10",
      subtitle: "Stability and clarity over time",
      trying: [
        "Level 10 — Continuous operation under governance.",
        "Maintain consistent governance behavior across weeks.",
        "Keep plans concise and checkable without losing correctness.",
      ],
      success: [
        "Multiple boring cycles with no boundary violations.",
        "Governance remains legible and predictable under variety.",
      ],
    },
  ],
  feed: [
    {
      title: "UPDATED",
      time: "2026-02-03 08:40 CT",
      meta: "Provider router scaffold switched to API-first; decision log + secrets file path defined (keys/endpoints needed)",
      detail: { changed: "Router scaffold updated to API-first; decision log header aligned; secrets env file path defined.", safe: "No secrets stored; no connectors enabled; no tests run.", ref: "provider-router.yaml / decisions.log" },
    },
    {
      title: "CREATED",
      time: "2026-02-02 16:20 CT",
      meta: "Level 7 loop started (dashboard updates via patches)",
      detail: { changed: "Not specified.", safe: "Not specified.", ref: "" },
    },
    {
      title: "TEST PASS",
      time: "Today",
      meta: "Spec 001 fidelity confirmed (two-file output).",
      detail: { changed: "Not specified.", safe: "Not specified.", ref: "" },
    },
    {
      title: "TEST PASS",
      time: "Today",
      meta: "Execution gate dry-run: connector scenarios.",
      detail: { changed: "Not specified.", safe: "Not specified.", ref: "" },
    },
    {
      title: "COMPLETED",
      time: "Today",
      meta: "Static dashboard scaffold (files only).",
      detail: { changed: "Not specified.", safe: "Not specified.", ref: "" },
    },
    {
      title: "COMPLETED",
      time: "Today",
      meta: "Patch-only UI polish (minimal diff).",
      detail: { changed: "Not specified.", safe: "Not specified.", ref: "" },
    },
    {
      title: "PASS",
      time: "Today",
      meta: "Broker simulation packet discipline maintained.",
      detail: { changed: "Not specified.", safe: "Not specified.", ref: "" },
    },
  ],
};

function el(tag, cls) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  return node;
}

function tagClass(tag) {
  const map = {
    violet: "tag--violet",
    cyan: "tag--cyan",
    green: "tag--green",
    amber: "tag--amber",
    rose: "tag--rose",
  };
  return map[tag] || "";
}

function renderStats() {
  const root = document.getElementById("stats");
  root.innerHTML = "";
  data.stats.forEach((s) => {
    const box = el("div", "stat");
    const l = el("div", "stat__label");
    l.textContent = s.label;
    const v = el("div", "stat__value");
    v.textContent = s.value;
    const h = el("div", "stat__hint");
    h.textContent = s.hint;
    box.appendChild(l);
    box.appendChild(v);
    box.appendChild(h);
    root.appendChild(box);
  });
}

function renderDecisions() {
  const root = document.getElementById("decisions");
  if (!root) return;
  root.innerHTML = "";

  (data.decisions || []).forEach((d) => {
    const card = el("div", "decision");

    const k = el("div", "decision__k");
    k.textContent = `${d.id} • ${d.kind}`;

    const t = el("div", "decision__t");
    t.textContent = d.title;

    const q = el("div", "decision__q");
    q.textContent = d.question;

    // Inline expand (no modal required)
    const more = document.createElement("details");
    more.className = "decision__more";
    const sum = document.createElement("summary");
    sum.textContent = "More";
    const body = document.createElement("div");
    body.className = "decision__moreBody";
    body.textContent = d.question;

    more.appendChild(sum);
    more.appendChild(body);

    card.appendChild(k);
    card.appendChild(t);
    card.appendChild(q);
    card.appendChild(more);

    root.appendChild(card);
  });
}

function renderKanban() {
  const root = document.getElementById("kanban");
  root.innerHTML = "";
  data.kanban.forEach((c) => {
    const col = el("section", "col");
    const head = el("div", "col__head");
    const name = el("div", "col__name");
    name.textContent = c.name;
    const badge = el("div", "badge");
    badge.textContent = String(c.items.length).padStart(2, "0");
    head.appendChild(name);
    head.appendChild(badge);

    const cards = el("div", "cards");
    c.items.forEach((item) => {
      const btn = el("button", "cardbtn");
      btn.type = "button";
      btn.dataset.col = c.name;
      btn.dataset.title = item.title;

      const card = el("article", "card");
      const title = el("h3", "card__title");
      title.textContent = item.title;

      const meta = el("div", "card__meta");
      const pip = el("span", "pip");
      pip.setAttribute("aria-hidden", "true");
      meta.appendChild(pip);

      (item.tags || []).forEach((t) => {
        const tg = el("span", `tag ${tagClass(t)}`.trim());
        tg.textContent = t;
        meta.appendChild(tg);
      });

      card.appendChild(title);
      card.appendChild(meta);
      btn.appendChild(card);
      cards.appendChild(btn);
    });

    col.appendChild(head);
    col.appendChild(cards);
    root.appendChild(col);
  });
}

function renderWorklist() {
  const root = document.getElementById("worklist");
  root.innerHTML = "";
  data.workingOn.forEach((w, i) => {
    const li = el("li", "workitem");
    li.dataset.title = w.title;

    const top = el("div", "workitem__top");
    const left = el("div", "");
    const title = el("h3", "workitem__title");
    title.textContent = `${i + 1}. ${w.title}`;
    const sub = el("div", "workitem__sub");
    sub.textContent = w.sub;
    left.appendChild(title);
    left.appendChild(sub);

    const pill = el("div", "kpill");
    pill.textContent = w.pill;

    top.appendChild(left);
    top.appendChild(pill);

    li.appendChild(top);
    root.appendChild(li);
  });
}

function renderLevels() {
  const root = document.getElementById("levels");
  root.innerHTML = "";

  const completed = data.levels.filter((l) => l.state === "COMPLETED");
  const remaining = data.levels.filter((l) => l.state === "REMAINING");

  function group(title, sub, items, mode) {
    const box = el("section", "levelgroup");
    const head = el("div", "levelgroup__head");
    const t = el("div", "levelgroup__title");
    t.textContent = title;
    const s = el("div", "levelgroup__sub");
    s.textContent = sub;
    head.appendChild(t);
    head.appendChild(s);

    const list = el("div", "levellist");
    items.forEach((lvl) => {
      const btn = el("button", "levelbtn");
      btn.type = "button";
      btn.dataset.level = String(lvl.level);

      const top = el("div", "levelbtn__top");
      const name = el("div", "levelbtn__name");
      name.textContent = `${lvl.title}`;
      const mark = el("div", "levelbtn__mark");
      mark.textContent = lvl.subtitle;
      top.appendChild(name);
      top.appendChild(mark);

      const meta = el("div", "levelbtn__meta");
      const chip = el("span", `chip ${mode === "done" ? "chip--done" : "chip--todo"}`.trim());
      chip.textContent = mode === "done" ? "Completed" : "Remaining";
      meta.appendChild(chip);
      const hint = el("span", "");
      hint.textContent = "Tap to open";
      meta.appendChild(hint);

      btn.appendChild(top);
      btn.appendChild(meta);
      list.appendChild(btn);
    });

    box.appendChild(head);
    box.appendChild(list);
    root.appendChild(box);
  }

  group("Completed", "Levels 5–6", completed, "done");
  group("Remaining", "Levels 7–10", remaining, "todo");
}

function renderConnectors() {
  const root = document.getElementById("connectors");
  if (!root) return;
  root.innerHTML = "";
  (data.connectors || []).forEach((c) => {
    const li = el("li", "listitem");
    li.dataset.name = c.name;

    const top = el("div", "listitem__top");
    const title = el("h3", "listitem__title");
    title.textContent = c.name;
    const badge = el("div", "kpill");
    badge.textContent = c.status;
    top.appendChild(title);
    top.appendChild(badge);

    const meta = el("div", "listitem__meta");
    meta.textContent = c.scope;

    li.appendChild(top);
    li.appendChild(meta);
    root.appendChild(li);
  });
}

function renderSkills() {
  const root = document.getElementById("skills");
  if (!root) return;
  root.innerHTML = "";

  const items = data.skills || [];
  if (!items.length) {
    const li = el("li", "listitem");
    const top = el("div", "listitem__top");
    const title = el("h3", "listitem__title");
    title.textContent = "No skills yet";
    const badge = el("div", "kpill");
    badge.textContent = "Awaiting";
    top.appendChild(title);
    top.appendChild(badge);
    const meta = el("div", "listitem__meta");
    meta.textContent = "Send a skill link/screenshot; I’ll add it here as New.";
    li.appendChild(top);
    li.appendChild(meta);
    root.appendChild(li);
    return;
  }

  items.forEach((s) => {
    const li = el("li", "listitem");
    li.dataset.id = s.id;

    const top = el("div", "listitem__top");
    const title = el("h3", "listitem__title");
    title.textContent = s.name;
    const badge = el("div", "kpill");
    badge.textContent = s.status;
    badge.dataset.status = s.status;
    top.appendChild(title);
    top.appendChild(badge);

    const meta = el("div", "listitem__meta");
    meta.textContent = `${s.purpose} • ${s.source || ""} • ${s.id}`.trim();

    li.appendChild(top);
    li.appendChild(meta);
    root.appendChild(li);
  });
}

function renderXIntake() {
  const root = document.getElementById("xintake");
  if (!root) return;
  root.innerHTML = "";
  (data.x_intake || []).forEach((x) => {
    const li = el("li", "listitem");
    li.dataset.id = x.id;

    const top = el("div", "listitem__top");
    const title = el("h3", "listitem__title");
    title.textContent = x.title;
    const badge = el("div", "kpill");
    badge.textContent = x.status;
    badge.dataset.status = x.status;
    top.appendChild(title);
    top.appendChild(badge);

    const meta = el("div", "listitem__meta");
    meta.textContent = `X • ${x.source} • ${x.id}`;

    li.appendChild(top);
    li.appendChild(meta);
    root.appendChild(li);
  });
}

function renderFeed() {
  const root = document.getElementById("feed");
  root.innerHTML = "";
  data.feed.forEach((e) => {
    const li = el("li", "event");
    li.dataset.title = e.title;

    const top = el("div", "event__top");
    const title = el("h3", "event__title");
    title.textContent = e.title;
    const time = el("div", "event__time");
    time.textContent = e.time;
    top.appendChild(title);
    top.appendChild(time);

    const meta = el("div", "event__meta");
    meta.textContent = e.meta;

    li.appendChild(top);
    li.appendChild(meta);
    root.appendChild(li);
  });
}

function openModal(header, titleText, sections) {
  const modal = document.getElementById("levelModal");
  const eyebrow = document.getElementById("modalEyebrow");
  const title = document.getElementById("modalTitle");
  const body = document.getElementById("modalBody");

  eyebrow.textContent = header;
  title.textContent = titleText;
  body.innerHTML = "";

  (sections || []).forEach((s) => {
    const wrap = el("div", "modal__section");
    const hh = el("h4", "");
    hh.textContent = s.heading;
    wrap.appendChild(hh);

    if (s.kind === "lines") {
      (s.lines || []).forEach((ln) => {
        const p = el("div", "modal__line");
        p.innerHTML = `<strong>${ln.label}</strong> ${ln.value}`;
        wrap.appendChild(p);
      });
    } else {
      const ul = el("ul", "");
      (s.bullets || []).forEach((b) => {
        const li = el("li", "");
        li.textContent = b;
        ul.appendChild(li);
      });
      wrap.appendChild(ul);
    }

    body.appendChild(wrap);
  });

  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const modal = document.getElementById("levelModal");
  modal.setAttribute("aria-hidden", "true");

function openCommand() {
  const modal = document.getElementById("commandModal");
  modal.setAttribute("aria-hidden", "false");
  const input = document.getElementById("commandInput");
  input.value = "";
  input.focus();
  renderCommandResults("");
}

function closeCommand() {
  const modal = document.getElementById("commandModal");
  modal.setAttribute("aria-hidden", "true");
}

function buildSearchIndex() {
  const items = [];

  data.kanban.forEach((col) => {
    col.items.forEach((it) => items.push({ type: "KANBAN", title: it.title, meta: col.name, col: col.name }));
  });

  data.workingOn.forEach((w) => {
    items.push({ type: "WORK", title: w.title, meta: w.pill, workTitle: w.title });
  });

  data.levels.forEach((l) => {
    items.push({ type: "LEVEL", title: l.title, meta: l.subtitle, level: l.level });
  });

  data.feed.forEach((e) => {
    items.push({ type: "ACTIVITY", title: e.meta, meta: e.time, actTitle: e.title, actMeta: e.meta });
  });

  return items;
}

const SEARCH_INDEX = buildSearchIndex();

function renderCommandResults(query) {
  const root = document.getElementById("commandResults");
  root.innerHTML = "";

  const q = (query || "").trim().toLowerCase();
  const matches = SEARCH_INDEX.filter((it) => {
    if (!q) return true;
    return (it.title + " " + it.meta).toLowerCase().includes(q);
  }).slice(0, 12);

  matches.forEach((it, i) => {
    const li = el("li", "cmd__item");
    li.tabIndex = 0;
    li.dataset.idx = String(i);

    const title = el("div", "");
    title.textContent = it.title;

    const meta = el("div", "cmd__meta");
    meta.textContent = `${it.type} • ${it.meta}`;

    li.appendChild(title);
    li.appendChild(meta);

    li.addEventListener("click", () => openFromSearch(it));
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter") openFromSearch(it);
    });

    root.appendChild(li);
  });
}

function openFromSearch(it) {
  closeCommand();
  if (it.type === "KANBAN") return openKanbanCard(it.col, it.title);
  if (it.type === "WORK") return openWorkItem(it.workTitle);
  if (it.type === "LEVEL") {
    const obj = data.levels.find((l) => l.level === it.level);
    if (obj) return openLevel(obj);
  }
  if (it.type === "ACTIVITY") return openActivityEvent(it.actTitle, it.actMeta);
}
}

function openLevel(levelObj) {
  if (levelObj.state === "COMPLETED") {
    openModal(
      `Level ${levelObj.level} • Completed`,
      levelObj.subtitle || levelObj.title,
      [{ heading: "What this achieved for Dolores", kind: "bullets", bullets: levelObj.achieved }]
    );
  } else {
    openModal(
      `Level ${levelObj.level} • Remaining`,
      levelObj.subtitle || levelObj.title,
      [
        { heading: "What we’re trying to achieve", kind: "bullets", bullets: levelObj.trying },
        { heading: "Success looks like", kind: "bullets", bullets: levelObj.success },
      ]
    );
  }
}

function openKanbanCard(colName, titleText) {
  const col = data.kanban.find((c) => c.name === colName);
  const item = col ? col.items.find((it) => it.title === titleText) : null;
  const d = (item && item.detail) || { truth: "Not specified.", blocker: "Not specified.", decision: "Not specified.", artifacts: [] };

  openModal(
    `Kanban • ${colName}`,
    titleText,
    [
      {
        heading: "Card Detail",
        kind: "lines",
        lines: [
          { label: "What’s true right now:", value: d.truth || "Not specified." },
          { label: "What’s in the way:", value: d.blocker || "Not specified." },
          { label: "What decision unlocks movement:", value: d.decision || "Not specified." },
        ],
      },
      {
        heading: "Artifacts",
        kind: "bullets",
        bullets: d.artifacts && d.artifacts.length ? d.artifacts : ["Not specified."],
      },
    ]
  );
}

function openWorkItem(titleText) {
  const w = data.workingOn.find((x) => x.title === titleText);
  const d = (w && w.detail) || { doing: "Not specified.", notDoing: "Not specified.", doneMeans: [] };

  openModal(
    "Working On",
    titleText,
    [
      {
        heading: "Contract",
        kind: "lines",
        lines: [
          { label: "What we’re doing:", value: d.doing || "Not specified." },
          { label: "What we’re not doing:", value: d.notDoing || "Not specified." },
        ],
      },
      {
        heading: "Done means",
        kind: "bullets",
        bullets: d.doneMeans && d.doneMeans.length ? d.doneMeans : ["Not specified."],
      },
    ]
  );
}

function openActivityEvent(titleText, metaText) {
  const ev = data.feed.find((x) => x.title === titleText && x.meta === metaText);
  const d = (ev && ev.detail) || { changed: "Not specified.", safe: "Not specified.", ref: "" };

  openModal(
    "Activity",
    titleText,
    [
      {
        heading: "Evidence",
        kind: "lines",
        lines: [
          { label: "What changed:", value: d.changed || "Not specified." },
          { label: "Why it’s safe:", value: d.safe || "Not specified." },
          { label: "Reference:", value: d.ref && d.ref.trim().length ? d.ref : "Not specified." },
        ],
      },
      { heading: "Summary", kind: "bullets", bullets: [metaText] },
    ]
  );
}

function toggleFocus() {
  document.body.classList.toggle("focus");
  const btn = document.getElementById("btnFocus");
  btn.textContent = document.body.classList.contains("focus") ? "Unfocus" : "Focus";
}

// Mark JS as alive for on-page diagnostics.
document.documentElement.classList.add("jsok");

function init() {
  const on = (id, evt, fn) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener(evt, fn);
  };

  const onSel = (sel, evt, fn) => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.addEventListener(evt, fn);
  };

  const fatal = (err) => {
    try {
      console.error("Dashboard error:", err);
      const main = document.getElementById("main");
      if (!main) return;
      const box = document.createElement("section");
      box.className = "panel";
      box.innerHTML = `
        <div class="panel__head">
          <div class="panel__title">
            <h2>Dashboard Error</h2>
            <span class="panel__sub">Safe fallback</span>
          </div>
        </div>
        <div class="panel__body">
          <p class="muted">The UI failed to initialize. Try a refresh. If it persists, paste the console error.</p>
          <pre class="code">${String(err && (err.stack || err.message || err))}</pre>
        </div>
      `;
      main.prepend(box);
    } catch (_) {}
  };

  try {
    renderStats();
    renderDecisions();
    renderKanban();
    renderWorklist();
    renderLevels();
    if (typeof renderConnectors === "function") renderConnectors();
    if (typeof renderSkills === "function") renderSkills();
    if (typeof renderXIntake === "function") renderXIntake();
    renderFeed();

    on("btnFocus", "click", toggleFocus);

    on("btnSearch", "click", openCommand);
    on("commandClose", "click", closeCommand);
    onSel("#commandModal .modal__backdrop", "click", closeCommand);
    on("commandInput", "input", (e) => renderCommandResults(e.target.value));

    on("levels", "click", (e) => {
      const btn = e.target.closest(".levelbtn");
      if (!btn) return;
      const lvl = Number(btn.dataset.level);
      const obj = data.levels.find((l) => l.level === lvl);
      if (!obj) return;
      openLevel(obj);
    });

    on("kanban", "click", (e) => {
      const btn = e.target.closest(".cardbtn");
      if (!btn) return;
      const col = btn.dataset.col || "";
      const title = btn.dataset.title || "";
      if (!col || !title) return;
      openKanbanCard(col, title);
    });

    on("worklist", "click", (e) => {
      const li = e.target.closest(".workitem");
      if (!li) return;
      const title = li.dataset.title;
      if (!title) return;
      openWorkItem(title);
    });

    on("connectors", "click", (e) => {
      const li = e.target.closest(".listitem");
      if (!li) return;
      const name = li.dataset.name;
      const obj = (data.connectors || []).find((c) => c.name === name);
      if (!obj) return;
      openModal("Connector", obj.name, [
        { heading: "Scope", kind: "bullets", bullets: [obj.scope] },
        { heading: "Status", kind: "bullets", bullets: [obj.status] },
      ]);
    });

    on("skills", "click", (e) => {
      const li = e.target.closest(".listitem");
      if (!li) return;
      const id = li.dataset.id;
      const obj = (data.skills || []).find((s) => s.id === id);
      if (!obj) return;
      openModal("Skill", obj.id, [
        { heading: "Name", kind: "bullets", bullets: [obj.name] },
        { heading: "Status", kind: "bullets", bullets: [obj.status] },
        { heading: "Purpose", kind: "bullets", bullets: [obj.purpose] },
        { heading: "Source", kind: "bullets", bullets: [obj.source || ""] },
      ].filter((s) => s.bullets[0] !== ""));
    });

    on("xintake", "click", (e) => {
      const li = e.target.closest(".listitem");
      if (!li) return;
      const id = li.dataset.id;
      const obj = (data.x_intake || []).find((x) => x.id === id);
      if (!obj) return;
      openModal("X Intake", obj.id, [
        { heading: "Item", kind: "bullets", bullets: [obj.title] },
        { heading: "Status", kind: "bullets", bullets: [obj.status] },
        { heading: "Source", kind: "bullets", bullets: [obj.source] },
      ]);
    });

    on("feed", "click", (e) => {
      const li = e.target.closest(".event");
      if (!li) return;
      const title = li.dataset.title;
      const metaEl = li.querySelector(".event__meta");
      const meta = (metaEl && metaEl.textContent) ? metaEl.textContent : "";
      if (!title || !meta) return;
      openActivityEvent(title, meta);
    });

    on("modalClose", "click", closeModal);
    onSel("#levelModal .modal__backdrop", "click", closeModal);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModal();
        closeCommand();
      }
    });

    window.addEventListener("error", (e) => fatal(e.error || e.message));
    window.addEventListener("unhandledrejection", (e) => fatal(e.reason));
  } catch (e) {
    fatal(e);
  }
}

init();
