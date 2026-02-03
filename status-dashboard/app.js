// Status Dashboard — static files only. Sample data only. No network calls.

const data = {
  stats: [
    { label: "Active cards", value: "14", hint: "Sample" },
    { label: "Blocked", value: "2", hint: "Sample" },
    { label: "Recent passes", value: "5", hint: "Sample" },
  ],
  decisions: [
    { id: "D-001", kind: "Decision", title: "Define what Level 8 accepts", question: "What inputs are allowed for bounded interpretation?" },
    { id: "D-002", kind: "Decision", title: "Connector pilot start criteria", question: "Which single label/calendar is in scope?" },
  ],
  decisions: [
    { id: "D-001", kind: "Decision", title: "Define what Level 8 accepts", question: "What inputs are allowed for bounded interpretation?" },
    { id: "D-002", kind: "Decision", title: "Connector pilot start criteria", question: "Which single label/calendar is in scope?" },
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
    const card = el("button", "decision");
    card.type = "button";
    card.dataset.kind = "DECISION";
    card.dataset.id = d.id;

    const k = el("div", "decision__k");
    k.textContent = d.kind;

    const t = el("div", "decision__t");
    t.textContent = d.title;

    const q = el("div", "decision__q");
    q.textContent = d.question;

    card.appendChild(k);
    card.appendChild(t);
    card.appendChild(q);

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

function init() {
  renderStats();
  renderDecisions();
  renderKanban();
  renderWorklist();
  renderLevels();
  renderFeed();

  document.getElementById("btnFocus").addEventListener("click", toggleFocus);

  document.getElementById("btnSearch").addEventListener("click", openCommand);
  document.getElementById("commandClose").addEventListener("click", closeCommand);
  document.querySelector("#commandModal .modal__backdrop").addEventListener("click", closeCommand);
  document.getElementById("commandInput").addEventListener("input", (e) => renderCommandResults(e.target.value));


  document.getElementById("levels").addEventListener("click", (e) => {
    const btn = e.target.closest(".levelbtn");
    if (!btn) return;
    const lvl = Number(btn.dataset.level);
    const obj = data.levels.find((l) => l.level === lvl);
    if (!obj) return;
    openLevel(obj);
  });

  document.getElementById("kanban").addEventListener("click", (e) => {
    const btn = e.target.closest(".cardbtn");
    if (!btn) return;
    const col = btn.dataset.col || "";
    const title = btn.dataset.title || "";
    if (!col || !title) return;
    openKanbanCard(col, title);
  });

  document.getElementById("worklist").addEventListener("click", (e) => {
    const li = e.target.closest(".workitem");
    if (!li) return;
    const title = li.dataset.title;
    if (!title) return;
    openWorkItem(title);
  });

  document.getElementById("feed").addEventListener("click", (e) => {
    const li = e.target.closest(".event");
    if (!li) return;
    const title = li.dataset.title;
    const meta = li.querySelector(".event__meta")?.textContent || "";
    if (!title || !meta) return;
    openActivityEvent(title, meta);
  });

  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.querySelector("#levelModal .modal__backdrop").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeModal(); closeCommand(); }
  });
}

init();
