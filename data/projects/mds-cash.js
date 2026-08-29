const project = {
  slug: "mds-cash",
  docCode: "CS-01",
  year: "2023",
  domain: "Fintech",
  stamp: { label: "Shipped / 2023", tone: "ink" },
  card: {
    name: "MDS Cash: Online Loan",
    oneLiner:
      "A cooperative's lending flow, re-engineered after a wave of “where is my loan?” tickets.",
    metric: "-70%",
    metricLabel: "helpdesk queries & complaints",
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
      "Shipped in 2023. Deployed redesign deflected and reduced helpdesk queries and customer complaints by 70%, with tested flows achieving a 4.2/5 task success score.",
    metrics: ["-70% helpdesk queries", "4.2/5 task success", "Shipped in 2023"],
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
          value: 70,
          prefix: "-",
          suffix: "%",
          label:
            "reduction in helpdesk queries and customer complaints after deployment.",
        },
      ],
      qualitative: [
        "Deflected 'where is my loan?' inquiries by making loan application status visible directly inside the app.",
        "Transparent fee itemization eliminated underpayment confusion during balance top-up.",
        "Qualitative feedback across tested lending tasks reached 4.2/5 average task success before engineering hand-off.",
      ],
    },
    {
      type: "reflection",
      limitations: [
        "Technical constraints at the cooperative postponed full OCR integration and automated verification pipelines, so data verification still relies partially on manual backend review.",
        "The 70% query deflection was measured from support ticket volume; full in-app drop-off analytics across every sub-step remain to be instrumented.",
      ],
      nextSteps: [
        "Integrate OCR document scanning once backend infrastructure and third-party vendor services are aligned.",
        "Instrument granular funnel analytics for activation and loan disbursement drop-offs.",
      ],
    },
  ],
};

export default project;
