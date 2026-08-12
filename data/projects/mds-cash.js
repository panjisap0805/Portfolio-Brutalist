const project = {
  slug: "mds-cash",
  docCode: "CS-01",
  year: "2023",
  domain: "Fintech",
  stamp: { label: "Validated / Not shipped", tone: "cobalt" },
  card: {
    name: "MDS Cash: Online Loan",
    oneLiner:
      "A cooperative's lending flow, re-engineered after a wave of “where is my loan?” tickets.",
    metric: "4.2/5",
    metricLabel: "task success",
    thumbnail: "/asset-mdscash-thumbnail.webp",
    alt: "MDS Cash mobile app screens",
  },
  hero: {
    title: "MDS Cash: Online Loan",
    description:
      "MDS Coop is a community-based digital cooperative serving five communities. MDS Cash is its lending feature: apply for a loan, complete verification, track disbursement. I audited it, tested it with real members, and redesigned it end to end.",
  },
  meta: [
    { label: "Role", value: "Product Designer" },
    { label: "Timeline", value: "6 weeks" },
    { label: "Year", value: "2023" },
    { label: "Platform", value: "Android & iOS" },
    { label: "Domain", value: "Fintech" },
  ],
  tldr: {
    problem:
      "Members could not see where their loan application stood, and applying took long enough that they flooded the helpdesk asking.",
    role:
      "Product Designer: design audit, moderated usability testing with 5 members, full redesign recommendation.",
    outcome:
      "The redesigned flow scored 4.2/5 task success in testing. Fixes made along the way cut status complaints, though the app itself has not shipped yet.",
    metrics: ["4.2/5 task success", "5-user moderated UT", "6-week engagement"],
  },
  sections: [
    {
      type: "context",
      paragraphs: [
        "MDS Coop serves five member communities; MDS Cash lends to three of them: Employee, Digital Entrepreneur, and Farmer. The flow covers activation, data verification, application, and disbursement, and nearly every step leaned on manual checks when I arrived.",
        "The engagement had a hard trigger. The helpdesk was drowning in one question, asked again and again by members mid-application.",
      ],
      problems: [
        "Members kept contacting support to ask where their loan application stood. The app gave them no reliable answer.",
        "Applying and getting funds disbursed took long enough that members escalated, retried, or gave up mid-process.",
      ],
    },
    {
      type: "starting",
      paragraphs: [
        "The original plan was straightforward qualitative research: sit with real members, watch them borrow, write down where it hurts.",
        "Before putting the app in front of anyone, I audited it myself against UX laws and a heuristic checklist. The reasoning: if the interface breaks in obvious, documentable ways, testing sessions should not be spent rediscovering them. The audit would tell me what the research actually needed to answer.",
      ],
    },
    {
      type: "discovery",
      paragraphs: [
        "The audit surfaced structural problems, not cosmetic ones. Each finding below is something the interface did to a member trying to borrow money.",
      ],
      findings: {
        heading: "What the audit flagged",
        tone: "redline",
        items: [
          "Application status was unclear while a loan was in progress.",
          "The tab structure confused members about where they were.",
          "A promotional banner looked clickable but did nothing.",
          "The loan simulation section was mistaken for real member data.",
        ],
      },
      prioritization: {
        high: ["Activation and completing member data", "Loan status visibility", "Disbursement"],
        medium: ["Payment", "Loan application", "OCR and automatic verification"],
      },
      persona: {
        name: "Rina, 30",
        label: "The cautious borrower",
        columns: [
          {
            heading: "Goals",
            items: ["Borrow from a source she can trust", "Low interest", "Flexible tenor"],
          },
          {
            heading: "Challenges",
            items: ["Afraid her personal data will be misused", "Low trust in digital lending"],
          },
          {
            heading: "Expectations",
            items: ["Data protection", "Transparent policies", "A simple process"],
          },
        ],
      },
    },
    {
      type: "turn",
      statement: "The audit turned a complaint pile into a research brief.",
      paragraphs: [
        "Going in, the status complaints looked like a communication problem: members just needed better notifications. The audit said otherwise. The app structurally could not answer “where is my loan?”, and that opacity sat on top of a verification flow that was heavy by design.",
        "So the usability testing narrowed to the three flows the audit ranked highest: activation and member data, status visibility, and disbursement. Five members who matched the real borrower criteria, moderated sessions, tasks scored on a 1 to 5 scale.",
      ],
    },
    {
      type: "insights",
      source: "Moderated usability testing, 5 participants, tasks scored 1 to 5.",
      items: [
        {
          title: "Verification asks too much of the member",
          body: "Members were frustrated by how much data verification demanded, including manually cross-checking their own document images.",
        },
        {
          title: "Manual checks break down between divisions",
          body: "Manual verification caused miscommunication between internal divisions, which slowed approvals and stretched disbursement.",
        },
        {
          title: "Underpayment confusion on top-up",
          body: "Members were confused by balances that came up short. The missing amount turned out to be an admin fee charged during top-up.",
        },
      ],
    },
    {
      type: "decisions",
      items: [
        {
          title: "OCR data verification",
          respondsTo: "Insight 01",
          body: "The system reads documents instead of asking members to re-type and cross-check their own data.",
        },
        {
          title: "One linear verification path",
          respondsTo: "Insight 01",
          body: "Verification became a single straight flow with visible step progress, replacing the branching structure members got lost in.",
        },
        {
          title: "Loan status tracking",
          respondsTo: "The trigger",
          body: "A visible status trail for every application, aimed directly at the helpdesk complaint pattern.",
        },
        {
          title: "Minimum top-up that absorbs the fee",
          respondsTo: "Insight 03",
          body: "A minimum top-up amount covers the admin fee, so balances stop coming up mysteriously short.",
        },
        {
          title: "Verified data is stored and reused",
          respondsTo: "Insight 02",
          body: "Returning borrowers skip re-verification entirely, removing a whole round of manual cross-division checking.",
        },
      ],
    },
    {
      type: "showcase",
      intro:
        "Two artifacts: the end-to-end workflow blueprint, then the redesigned screens. The markers point at specific decisions.",
      images: [
        {
          src: "/asset-mdscash-blueprint.webp",
          width: 1360,
          height: 1000,
          alt: "Blueprint-style map of the MDS Cash end-to-end lending workflow across five screens",
          caption: "Workflow blueprint, v1.2. The full lending flow mapped before any UI was drawn.",
          tone: "cobalt",
          annotations: [
            {
              x: 49.5,
              y: 40,
              label: "Status became a first-class screen, not a helpdesk question.",
            },
            {
              x: 72,
              y: 11.5,
              label: "Every hand-off is mapped with the state and API behind it, so engineering inherits decisions, not guesses.",
            },
          ],
        },
        {
          src: "/asset-mdscash-final.webp",
          width: 1360,
          height: 999,
          alt: "High-fidelity MDS Cash screens: welcome, activation with stepper, loan status, application detail, payment history",
          caption: "Redesigned UI, v1.0. The screens delivered to the internal team.",
          tone: "cobalt",
          annotations: [
            {
              x: 33,
              y: 31,
              label: "Verification is one linear path with a visible step counter. No more guessing what comes next.",
            },
            {
              x: 52,
              y: 33,
              label: "Loan status sits front and center, answering the question that flooded the helpdesk.",
            },
            {
              x: 71,
              y: 55,
              label: "Fees are itemized before confirmation, killing the underpayment surprise from testing.",
            },
            {
              x: 90.5,
              y: 47,
              label: "Every installment and due date is listed, so repayment is as legible as borrowing.",
            },
          ],
        },
      ],
    },
    {
      type: "impact",
      stats: [
        {
          value: 4.2,
          decimals: 1,
          suffix: "/5",
          label: "average task success. Moderated UT, 5 participants, 1 to 5 scale.",
        },
      ],
      qualitative: [
        "Qualitative feedback across the tested lending tasks was positive, and the design was iterated once more from that feedback.",
        "Reducing manual verification cut the cross-division miscommunication that had been stretching approval times.",
        "Helpdesk contacts about loan status dropped significantly after internal fixes. Observed qualitatively, not instrumented.",
      ],
    },
    {
      type: "reflection",
      limitations: [
        "The redesigned app has not been published: the cooperative hit technical constraints before engineering could pick it up.",
        "The helpdesk improvement is qualitative. There was no instrumentation in place to put a number on it, and I will not invent one.",
      ],
      nextSteps: [
        "The recommendations are documented and validated, ready to build when engineering capacity opens.",
      ],
    },
  ],
};

export default project;
