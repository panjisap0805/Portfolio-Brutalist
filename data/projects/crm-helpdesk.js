const project = {
  slug: "crm-helpdesk",
  docCode: "CS-03",
  year: "2026",
  domain: "Helpdesk ops",
  stamp: { label: "Validated / Pending OTP", tone: "cobalt" },
  card: {
    name: "CRM Helpdesk",
    oneLiner:
      "A solo design-to-deploy ticketing tool, built to retire a Rp 3M/month chat system.",
    metric: "-70%",
    metricLabel: "ops cost, projected",
    thumbnail: "/asset-crm-thumbnail.webp",
    alt: "CRM helpdesk web app screens",
  },
  hero: {
    title: "CRM Helpdesk",
    description:
      "MDS runs a two-person helpdesk handling member complaints nationwide through Qontak, a chat-only channel. I designed and built the replacement CRM solo: research, design in Google Stitch, then code and deployment to a VPS I manage.",
  },
  meta: [
    { label: "Role", value: "Product Designer + Fullstack" },
    { label: "Timeline", value: "~1 month" },
    { label: "Year", value: "2026" },
    { label: "Type", value: "Internal web app" },
    { label: "Team", value: "Solo, design to deploy" },
  ],
  tldr: {
    problem:
      "A chat-only helpdesk meant escalations vanished into group chats, urgent conversations sank, and chats auto-closed after 24 hours whether or not the problem was solved.",
    role:
      "Everything: research with the team, design in Google Stitch, usability testing, code, and deployment to a VPS.",
    outcome:
      "Validated with 100% of the helpdesk team. Once migrated, tooling cost drops from Rp 3M to under Rp 1M a month. Rollout waits on one OTP dependency.",
    metrics: ["-70%+ tooling cost, projected", "2/2 agents tested", "Solo, design to deploy"],
  },
  sections: [
    {
      type: "context",
      paragraphs: [
        "Two agents answer complaints from members across the country. Their only tool was Qontak, a chat platform with no ticketing, so everything beyond a quick reply depended on memory and group chats. The subscription ran about Rp 3 million a month.",
        "This one is different from my other work in scope: there was no engineering team downstream. I was the researcher, the designer, the developer, and the person who deploys it.",
      ],
      problems: [
        "Every escalation was copy-pasted into a group chat. Status went untracked, and stakeholders simply forgot.",
        "With no ticketing, urgent conversations sank under new ones and the helpdesk lost track of them.",
        "Chats auto-resolved after 24 hours whether or not the problem was actually solved.",
      ],
    },
    {
      type: "starting",
      paragraphs: [
        "With a two-person team, research had unusual luck: I could interview the entire user base. Both agents walked me through how a complaint actually moves, from first message to whoever in which division finally owns it.",
        "I designed and iterated in Google Stitch rather than Figma, partly as a deliberate constraint: this project was also a test of how lean a solo design-to-deploy pipeline can get.",
      ],
    },
    {
      type: "insights",
      source: "Interviews with both helpdesk agents, which is the entire team.",
      items: [
        {
          title: "Group chat is not a tracker",
          body: "Escalating through chat means status lives in people's memory, and memory is exactly where it kept getting lost.",
        },
        {
          title: "Urgency has no signal",
          body: "Priority was improvised through category colors and members spamming the chat until someone answered.",
        },
        {
          title: "Tickets lived outside the conversation",
          body: "Manual ticketing through email was disconnected from the chat context it referred to, so context died in transit.",
        },
      ],
    },
    {
      type: "decisions",
      items: [
        {
          title: "Ticketing inside the chat panel",
          respondsTo: "Insights 01 + 03",
          body: "Tickets are created in the conversation itself: number and subject auto-generate, priority is picked, and status stays visible across divisions.",
        },
        {
          title: "Route tickets to the owning division",
          respondsTo: "Insight 01",
          body: "Tickets go straight to the division that owns the problem instead of into a group chat that owns nothing.",
        },
        {
          title: "Explicit urgency markers",
          respondsTo: "Insight 02",
          body: "Priority is a field on the ticket, not a color guess or a spam streak.",
        },
      ],
    },
    {
      type: "validation",
      intro:
        "Two participants, which is 100% of the helpdesk team. Three scenarios, April 24 to 29, 2026, each task scored per participant on a 1 to 3 scale. Do not compare these numbers with the 1 to 5 scale used on MDS Cash.",
      scale: "Scored 1 to 3 per participant",
      tasks: [
        {
          name: "Respond to a chat",
          scores: ["3", "3"],
          result: "Both agents completed it smoothly.",
        },
        {
          name: "Create a ticket",
          scores: ["3", "2"],
          result: "One smooth, one slight struggle.",
          note: "Putri had been raising tickets manually through email, so the new flow needed a moment.",
        },
        {
          name: "Share a ticket link",
          scores: ["3", "1"],
          result: "One smooth, one failed outright.",
          note: "The share button read as disabled because it carried no color.",
        },
      ],
    },
    {
      type: "turn",
      statement: "The button I made deliberately subtle failed exactly the way a test should catch.",
      paragraphs: [
        "The share action was styled quiet on purpose: I wanted to know whether hierarchy alone could carry it. The test answered clearly. One agent read it as disabled and never clicked, scoring the task a 1.",
        "That is the cheapest possible price for that lesson: a two-person test, one failed task, one styling pass. The final build gives the share action explicit color, and the failure became the strongest argument for testing even a team of two.",
      ],
    },
    {
      type: "showcase",
      intro:
        "The staging build, v1.1. Ticketing lives where the conversation lives, and the markers show where each research insight landed.",
      images: [
        {
          src: "/asset-mds-crm.webp",
          width: 1363,
          height: 1000,
          alt: "CRM chat panel beside a chat detail view where a ticket is created inside the conversation",
          caption: "Chat panel and chat detail. A ticket opens without leaving the conversation.",
          tone: "cobalt",
          annotations: [
            {
              x: 88.5,
              y: 43,
              label: "Ticket number and subject auto-generate from the chat, so filing costs seconds, not context.",
            },
            {
              x: 88.5,
              y: 61,
              label: "A division field routes the ticket to whoever owns the problem. The group-chat escalation dies here.",
            },
          ],
        },
        {
          src: "/asset-mds-crm1.webp",
          width: 1363,
          height: 1000,
          alt: "Ticket management list with priority chips beside a ticket detail panel with share and close actions",
          caption: "Ticket list and detail. Status and priority are fields, visible to every division.",
          tone: "cobalt",
          annotations: [
            {
              x: 27,
              y: 41,
              label: "Priority is explicit per ticket. Urgent stops sinking under new chats.",
            },
            {
              x: 88.5,
              y: 66.5,
              label: "The share action that failed UT while colorless. The final build makes it read enabled.",
            },
          ],
        },
      ],
    },
    {
      type: "impact",
      stats: [
        {
          value: 70,
          prefix: "-",
          suffix: "%+",
          label: "monthly tooling cost, projected on migration: Rp 3M down to under Rp 1M.",
        },
      ],
      qualitative: [
        "Roughly Rp 24 to 30 million saved per year once the migration completes. This is a cost cut, not a ticket-volume claim.",
        "Core tasks completed in testing with positive feedback from the whole, two-person, team.",
        "Escalation status becomes visible across divisions instead of living in group-chat memory.",
      ],
    },
    {
      type: "reflection",
      limitations: [
        "Rollout is pending because Qontak is still the delivery channel for the system's OTP messages.",
      ],
      nextSteps: [
        "Stand up WhatsApp and SMS OTP so the migration can complete. Email OTP exists, but users skip it.",
      ],
    },
  ],
};

export default project;
