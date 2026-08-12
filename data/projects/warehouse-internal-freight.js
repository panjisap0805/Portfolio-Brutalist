const project = {
  slug: "warehouse-internal-freight",
  docCode: "CS-04",
  year: "2022",
  domain: "Logistics",
  stamp: { label: "Shipped / 2022", tone: "ink" },
  card: {
    name: "Internal Freight",
    oneLiner:
      "From four paper copies per invoice to scan-based tracking across three islands.",
    metric: "0",
    metricLabel: "items lost since release",
    thumbnail: "/asset-warehouse-thumbnail.webp",
    alt: "Internal freight tool screens",
  },
  hero: {
    title: "Internal Freight",
    description:
      "Jakartanotebook moves goods from a central warehouse to retail branches across Java and Sumatra, and pickup points in Java and Sulawesi. B2B orders can be collected at pickup points. This tool tracks every box and item in that network.",
  },
  meta: [
    { label: "Role", value: "UI/UX Designer" },
    { label: "Timeline", value: "4 weeks" },
    { label: "Year", value: "2022" },
    { label: "Team", value: "With PM Steven" },
    { label: "Type", value: "Internal tool" },
  ],
  tldr: {
    problem:
      "Every shipment needed up to four printed invoice copies, box stickers were typed by hand in MS Word, and items kept going missing with no way to trace them.",
    role:
      "UI/UX Designer with PM Steven: field visits to warehouse, branches, and pickup points, then the full design.",
    outcome:
      "Shipped in 2022. Stickers generate from a scan, paper use dropped sharply, and not a single item has gone missing since release.",
    metrics: ["0 items lost since release", "Stickers from scan, not Word", "3-island network"],
  },
  sections: [
    {
      type: "context",
      paragraphs: [
        "Freight moves in boxes. Staff group packages by destination, combine them into boxes, sticker the boxes, and ship them to branches and pickup points. All of it ran on paper and manual typing.",
        "The visible symptom was print volume: one shipping invoice could demand up to four paper copies. That is what the project was scoped around, at first.",
      ],
      problems: [
        "Up to four printed copies for every shipping invoice, every day, across the whole network.",
      ],
    },
    {
      type: "starting",
      paragraphs: [
        "The plan with PM Steven was direct: digitize the shipping paperwork. Four weeks, one designer, one PM.",
        "Instead of designing from the office, we went where the freight actually moves: the central warehouse, retail branches, and pickup points, interviewing the staff doing the work at each stop.",
      ],
    },
    {
      type: "discovery",
      paragraphs: [
        "Watching the flow end to end surfaced how the work really happens, and two findings changed the project's shape.",
      ],
      findings: {
        heading: "What the field visits surfaced",
        tone: "redline",
        items: [
          "Staff group packages by destination address, and one box can hold many invoices.",
          "Box stickers were made manually in MS Word, re-typing extensive details for every box.",
          "Items went missing regularly, and there was no trail to investigate.",
        ],
      },
    },
    {
      type: "turn",
      statement: "The real problem was never the paper. It was traceability.",
      paragraphs: [
        "Paper cost was the symptom everyone could see and price. But the recurring, expensive failure was silent: goods disappearing somewhere between warehouse and destination, with no record to even start an investigation from.",
        "That reframed the tool. Digitizing invoices was table stakes; the design had to make every item's location knowable at any moment.",
      ],
    },
    {
      type: "insights",
      source: "Field visits and on-site interviews at the warehouse, branches, and pickup points.",
      items: [
        {
          title: "Sticker creation is slow, manual work",
          body: "Making box stickers in MS Word meant re-typing many fields for every box, every day.",
        },
        {
          title: "Lost items keep happening",
          body: "Missing goods were a recurring cost with no trail to investigate, and nobody could say where in the chain they vanished.",
        },
      ],
    },
    {
      type: "decisions",
      items: [
        {
          title: "Create Box",
          respondsTo: "Insight 01",
          body: "Box details auto-generate from the invoices inside it. The sticker becomes a scan-and-print step instead of manual typing.",
        },
        {
          title: "Item Log",
          respondsTo: "Insight 02",
          body: "Every item's location and status is tracked from warehouse to branch to pickup point, so a missing item is a query, not a mystery.",
        },
      ],
    },
    {
      type: "evolution",
      intro: "The tool went from blueprint to shipped product inside the four weeks.",
      versions: [
        {
          tag: "Blueprint v1.0",
          image: "/asset-jakmall-blueprint.webp",
          width: 1363,
          height: 1000,
          alt: "Blueprint-style wireframes of the internal freight tool: box invoice list and goods delivery note",
          caption: "Wireframe blueprint of the box and delivery-note flows, states annotated.",
        },
        {
          tag: "Showcase v1.1",
          image: "/asset-jakmall-final.webp",
          width: 1363,
          height: 1000,
          alt: "High-fidelity screens of the shipped freight tool: create box list and internal delivery dashboard",
          caption: "The shipped hi-fi screens of the same flows.",
        },
      ],
    },
    {
      type: "showcase",
      images: [
        {
          src: "/asset-jakmall-final.webp",
          width: 1363,
          height: 1000,
          alt: "Shipped freight tool screens with box invoice list and delivery note tracking table",
          caption: "The shipped tool, v1.1. Boxes, delivery notes, and live status in one flow.",
          tone: "cobalt",
          annotations: [
            {
              x: 21,
              y: 46,
              label: "Box contents pull from the invoices inside, so the sticker prints from a scan instead of Word.",
            },
            {
              x: 72,
              y: 58,
              label: "Every delivery note logs status and timestamp per shipment: created, in transit, arrived, done.",
            },
          ],
        },
      ],
    },
    {
      type: "impact",
      stats: [
        {
          value: 0,
          label: "items lost since release, verified on a post-release revisit.",
        },
      ],
      qualitative: [
        "Stickers are generated by scanning, and paper use dropped significantly across the network.",
        "I went back after release and interviewed each PIC: the tool genuinely holds up in daily work.",
      ],
      quote: {
        text: "Before, the workflow was difficult due to manual processes, leading to a high rate of missing goods. Now the process is streamlined and inventory loss has been completely eliminated.",
        name: "Amen",
        role: "Head of Warehouse",
      },
    },
  ],
};

export default project;
