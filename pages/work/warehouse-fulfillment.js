import Head from "next/head";
import Layout from "../../components/layout/Layout";
import ProjectHero from "../../components/project/ProjectHero";
import ProjectMetadata from "../../components/project/ProjectMetadata";
import ProjectContext from "../../components/project/ProjectContext";
import ProjectProcess from "../../components/project/ProjectProcess";
import ProjectInsights from "../../components/project/ProjectInsights";
import ProjectShowcase from "../../components/project/ProjectShowcase";
import ProjectImpact from "../../components/project/ProjectImpact";

export default function WarehouseFulfillment() {
  const projectData = {
    hero: {
      tag: "CASE_STUDY_04",
      title: "WAREHOUSE FULFILLMENT:<br className='hidden md:block'/> TASK DISPATCH & FLOW DIGITALIZATION",
      description: "Transforming manual, paper-driven picking and collecting workflows into an optimized mobile ecosystem."
    },
    metadata: [
      { label: "ROLE", value: "UI/UX Designer" },
      { label: "TIMELINE", value: "4 Weeks" },
      { label: "COLLABORATION", value: "Alfi (PM)" },
      { label: "INDUSTRY", value: "Fulfillment System" }
    ],
    context: {
      overview: "Warehouse operations rely on two distinct roles: picking (retrieving SKUs from shelves) and collecting (gathering picked items). However, this legacy workflow suffered from massive paper waste, inefficient cross-zone coordination, and frequent human errors.",
      challenges: [
        `Staff are unfamiliar with <span class="font-bold border-b-2 border-red-200">digital tools for work</span>, using phones mostly for social media.`,
        `Changing <span class="font-bold border-b-2 border-red-200">long-established habits</span> is hard, especially under strict existing SLAs.`
      ]
    },
    process: [
      { number: "01", title: "WORKFLOW AUDIT", description: "Shadowed operational personnel on the warehouse floor to map out the exact micro-interactions between picking and collecting loops." },
      { number: "02", title: "FRICTION IDENTIFICATION", description: "Documented systemic bottlenecks regarding idle wait-times, paper trailing, and high-frequency miscalculations." },
      { number: "03", title: "UI PROTO-SPRINT", description: "Designed high-contrast interface elements explicitly tailored for fast-paced, low-light warehouse conditions." },
      { number: "04", title: "FLOW VALIDATION", description: "Evaluated structural click pathways alongside the PM to ensure data payloads sync correctly across picking queues." }
    ],
    insights: {
      legacyIssues: [
        { title: "RESOURCE-HEAVY PAPER TRAILING", description: "Staff carry duplicate paper receipts solely to act as proof-of-transfer during physical item handovers between picking and collecting states." },
        { title: "COLLECTING IDLE WAIT BOTTLENECK", description: "Collecting PICs waste immense amounts of time standing around inside specific floors waiting passively for a picking PIC to complete manual on-shelf item discovery." },
        { title: "ERROR-PRONE MANUAL COMPENSATION TRACKING", description: "Employees receive performance-based piece-rate fees based on the specific quantity of items handled. This calculation was logged entirely on paper lists and processed manually by hand." },
        { title: "ACCIDENTAL SKU SELECTION ERRORS", description: "Physical SKU product stickers are incredibly small, leading picking staff to accidentally misread labels and grab wrong product variants under stress." }
      ],
      systemUpgrades: [
        { title: "Digital In-App Verification", description: "Replaced physical sign-offs with an instant digital confirmation system where a quick tap or scan logs the dynamic chain of custody instantly." },
        { title: "Asynchronous Automated Queuing", description: "The mobile system splits tasks automatically upon invoice entry. Picking PICs receive item dispatch alerts before the collector arrives, ensuring goods are pre-staged." },
        { title: "Automated Performance Ledger", description: "Built a real-time system counter that tracks exact items verified per employee profile, displaying instant, transparent automated fee progress charts." },
        { title: "High-Contrast Scan-to-Verify Loop", description: "Integrated mobile barcode/QR scanning modules directly into the picking interface that throw immediate, high-visibility visual validation prompts to prevent any wrong item from leaving the shelf." }
      ]
    },
    showcase: {
      mainTag: ".../jakmall/fulfillment",
      fulfillmentImage: "/asset-jakmall-fulfillmentv1.webp",
      fulfillmentImage2: "/asset-jakmall-fulfillmentv2.webp",
    },
    impact: {
      stat1Icon: "description",
      stat1Label: "PAPERLESS INITIATIVE",
      stat1Value: "90%",
      stat1Subtitle: "Significantly reduced paper usage by eliminating physical invoice printing and carbon-copy handover sheets.",
      stat2Icon: "groups",
      stat2Label: "RESOURCE ALLOCATION",
      stat2Value: "Dynamic",
      stat2Subtitle: "Enabled dynamic cross-zone staff reallocation via live dashboards to resolve bottlenecks.",
      feedbackQuote: "A massive help for our operations team! The live dashboard integration completely streamlined our workflow and fully automated our previously are manual.",
      feedbackAuthor: "Amen, Head of Warehouse",
      feedbackSentiment: "POSITIVE SENTIMENT"
    }
  };

  return (
    <>
      <Head>
        <title>Warehouse Fulfillment - Panji Saputro Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout backLink="/" nextLink="#" nextProjectName="">
        <ProjectHero
          tag={projectData.hero.tag}
          title={projectData.hero.title}
          description={projectData.hero.description}
        />
        <ProjectMetadata metadata={projectData.metadata} />
        <ProjectContext
          overview={projectData.context.overview}
          challenges={projectData.context.challenges}
        />
        <ProjectProcess steps={projectData.process} />
        <ProjectInsights
          legacyIssues={projectData.insights.legacyIssues}
          systemUpgrades={projectData.insights.systemUpgrades}
        />
        <ProjectShowcase
          fulfillmentImage={projectData.showcase.fulfillmentImage}
          fulfillmentImage2={projectData.showcase.fulfillmentImage2}
          mainTag={projectData.showcase.mainTag}
        />
        <ProjectImpact
          stat1Icon={projectData.impact.stat1Icon}
          stat1Label={projectData.impact.stat1Label}
          stat1Value={projectData.impact.stat1Value}
          stat1Subtitle={projectData.impact.stat1Subtitle}
          stat2Icon={projectData.impact.stat2Icon}
          stat2Label={projectData.impact.stat2Label}
          stat2Value={projectData.impact.stat2Value}
          stat2Subtitle={projectData.impact.stat2Subtitle}
          feedbackQuote={projectData.impact.feedbackQuote}
          feedbackAuthor={projectData.impact.feedbackAuthor}
          feedbackSentiment={projectData.impact.feedbackSentiment}
        />
      </Layout>
    </>
  );
}
