const project = {
  slug: "warehouse-fulfillment",
  docCode: "CS-02",
  year: "2023",
  domain: "Warehouse ops",
  stamp: { label: "Shipped / Jun 2023", tone: "ink" },
  card: {
    name: "Warehouse Fulfillment",
    oneLiner:
      "Killing the blocking hand-off in a four-floor, 24/7 warehouse, one scan at a time.",
    metric: "-90%",
    metricLabel: "paper use",
    thumbnail: "/asset-fulfillment-thumbnail.webp",
    alt: "Warehouse fulfillment app screens",
  },
  hero: {
    title: "Warehouse Fulfillment",
    description:
      "Jakmall's fulfillment warehouse runs 24/7 across four floors, with around 100 staff processing roughly 5,000 invoices a day. This is the internal app that took its picking and collecting workflow off paper.",
  },
  meta: [
    { label: "Role", value: "UI/UX Designer" },
    { label: "Timeline", value: "4 weeks" },
    { label: "Go-live", value: "June 2023" },
    { label: "Team", value: "With PM Alfi" },
    { label: "Type", value: "Internal app" },
  ],
  tldr: {
    problem:
      "Collectors walked to picking zones and stood idle waiting for unconfirmed work, while every hand-off ran on printed paper.",
    role:
      "UI/UX Designer with PM Alfi: staff interviews on the floor, requirement filtering, and all lo-fi and hi-fi design.",
    outcome:
      "Shipped June 2023 with a phased rollout. Paper use fell about 90%, and supervisors got per-invoice visibility for the first time.",
    metrics: ["-90% paper use", "~5,000 invoices/day", "Phased to 100% rollout"],
  },
  sections: [
    {
      type: "context",
      paragraphs: [
        "Two roles drive the warehouse. Pickers collect items from shelves; collectors consolidate picked items for packing. Every hand-off between them ran on printed documents, and the piece-rate fees staff earn were tallied by hand from those same papers.",
        "The operation is not small, and it never stops. Any redesign had to survive contact with a floor that ships around the clock.",
      ],
      facts: [
        { value: "4", label: "floors" },
        { value: "24/7", label: "operations" },
        { value: "~100", label: "staff" },
        { value: "~5,000", label: "invoices per day" },
      ],
      problems: [
        "Collectors walked to the picking zone and waited idle until pickers finished. Nobody knew when an invoice was actually ready.",
        "Every hand-off ran on paper, and piece-rate fees were tallied by hand from those papers.",
        "SKU stickers were small and easy to misread, so pickers grabbed the wrong variant at speed.",
        "Supervisors could not see the status of any single invoice anywhere in the process.",
      ],
    },
    {
      type: "starting",
      paragraphs: [
        "The brief arrived with the PM's requirements, persona, and process flows already drafted. My scope was the design itself, but I treated the inputs as claims to verify, not specs to execute.",
        "Two things I did that shaped everything after: I interviewed the staff myself, and I filtered the PM's field list, cutting everything non-essential. The screens would be used at speed on a crowded floor; every extra field was cognitive load someone pays for 5,000 times a day.",
      ],
      note: "The persona and formal flow documents were the PM's work, so they are not shown here. Mine: the staff interviews, the input filtering, and all lo-fi and hi-fi design.",
    },
    {
      type: "discovery",
      paragraphs: [
        "We ran a contextual inquiry together on the warehouse floor: observation plus interviews with pickers, collectors, and supervisors, across shifts.",
        "The method that mattered was mapping how staff actually work against how the documented process said they work. The two did not match, and the gap is where the real problem lived.",
      ],
    },
    {
      type: "turn",
      statement: "The bottleneck never appeared in the process docs.",
      paragraphs: [
        "On paper, the picker-to-collector hand-off was a clean arrow between two boxes. On the floor, that arrow was a collector standing in the picking zone, waiting, because walking over was the only way to find out if anything was ready.",
        "Idle waiting was invisible to the documentation precisely because it happened between documented steps. That single observation reframed the project: this was not a paperwork-reduction app, it was a hand-off redesign.",
      ],
    },
    {
      type: "insights",
      source: "Contextual inquiry on the warehouse floor: observation and staff interviews across both roles.",
      items: [
        {
          title: "Idle waiting is the real bottleneck",
          body: "Collectors lost time not by moving, but by standing in the picking zone waiting for unconfirmed work.",
        },
        {
          title: "Paper survives because it is proof",
          body: "The paper trail persisted because it was the only evidence of hand-over between roles, not because anyone liked it.",
        },
        {
          title: "Small stickers cause wrong picks",
          body: "Wrong-variant errors traced back to tiny SKU stickers being misread under time pressure.",
        },
      ],
    },
    {
      type: "decisions",
      items: [
        {
          title: "App-driven hand-off",
          respondsTo: "Insight 01",
          body: "Pickers mark an invoice ready; collectors pull only confirmed invoices. Idle waiting stops, and every invoice becomes visible for the first time.",
        },
        {
          title: "Mandatory SKU scan",
          respondsTo: "Insight 03",
          body: "Every pick requires scanning the SKU, blocking wrong-variant errors at the source.",
        },
        {
          title: "Dynamic cross-floor reallocation",
          respondsTo: "Insight 01",
          body: "When floor 3 goes idle while floor 4 is slammed, the system says so and floor 3 pickers move to help. Labor follows demand across floors.",
        },
        {
          title: "Digital hand-over verification",
          respondsTo: "Insight 02",
          body: "In-app confirmation replaces paper signatures as the proof of hand-over, which is what let the paper die.",
        },
        {
          title: "Data reduction",
          body: "Only essential fields made it to the screens. This was my call, argued from cognitive load on a busy floor, and it meant pushing back on the original requirements.",
        },
      ],
    },
    {
      type: "showcase",
      intro:
        "The shipped app is really two apps in conversation: the picker side confirms work, the collector side consumes it. The markers point at the decisions above, live in the UI.",
      images: [
        {
          src: "/asset-jakmall-fulfillmentv1.webp",
          width: 1363,
          height: 1000,
          alt: "Picking app screens: dashboard with zone assignment, task progress with SKU counts, SKU list, completion state",
          caption: "Picking side, showcase v1.0. Assignment, progress, and scan-verified completion.",
          tone: "cobalt",
          annotations: [
            {
              x: 13,
              y: 33.5,
              label: "Work is assigned by floor and zone, which is what makes cross-floor reallocation possible.",
            },
            {
              x: 37.5,
              y: 45,
              label: "SKU and piece counts update as the picker works. Progress is data, not a supervisor's guess.",
            },
            {
              x: 62,
              y: 65.5,
              label: "A task only closes through the scan flow. The wrong-variant fix is structural, not a reminder.",
            },
          ],
        },
        {
          src: "/asset-jakmall-fulfillmentv2.webp",
          width: 1363,
          height: 1000,
          alt: "Collecting app screens: dashboard with per-zone ready status, task checklist, invoice detail, scan hand-over",
          caption: "Collecting side, showcase v1.0. Ready status ends the idle wait.",
          tone: "cobalt",
          annotations: [
            {
              x: 13,
              y: 56,
              label: "Siap Ambil status per zone. Collectors see what is ready before walking anywhere, so the idle wait dies here.",
            },
            {
              x: 37.5,
              y: 68.5,
              label: "Collecting closes with a scan against the picked list, the digital proof that replaced paper signatures.",
            },
            {
              x: 88,
              y: 59,
              label: "Grouping is verified by scan too, so the fee tally comes from data instead of hand-counted paper.",
            },
          ],
        },
      ],
    },
    {
      type: "impact",
      stats: [
        {
          value: 90,
          prefix: "-",
          suffix: "%",
          label: "paper use after rollout. Internal estimate from the print points the app removed.",
        },
      ],
      qualitative: [
        "Wrong-pick errors dropped once SKU scanning became mandatory. Tracked qualitatively by the ops team.",
        "Per-invoice visibility existed for the first time in the warehouse's history.",
        "Staff could be reallocated across floors based on real demand instead of complaints.",
      ],
    },
    {
      type: "reflection",
      paragraphs: [
        "Rollout was deliberately phased to protect a 24/7 operation: onboarding and socialization first, then 10% on the app with 90% still manual while we watched errors and habits, then 25%, and so on up to 100%.",
      ],
      limitations: [
        "Post-launch metrics beyond paper use were never instrumented, so the hand-off improvement is observed, not measured.",
      ],
      nextSteps: [
        "Instrument idle-time and throughput tracking to put numbers on the hand-off change.",
      ],
    },
  ],
};

export default project;
