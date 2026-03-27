import Head from "next/head";
import Layout from "../../components/layout/Layout";
import ProjectHero from "../../components/project/ProjectHero";
import ProjectMetadata from "../../components/project/ProjectMetadata";
import ProjectContext from "../../components/project/ProjectContext";
import ProjectProcess from "../../components/project/ProjectProcess";
import ProjectInsights from "../../components/project/ProjectInsights";
import ProjectShowcase from "../../components/project/ProjectShowcase";
import ProjectImpact from "../../components/project/ProjectImpact";

export default function WarehouseInternalFreight() {
  const projectData = {
    hero: {
      tag: "CASE_STUDY_02",
      title: "WAREHOUSE INTERNAL<br className='hidden md:block'/> FREIGHT",
      description: "Optimizing the logistics loop for central warehouse shipping. Eliminating paper nightmares and phantom goods through digital transformation."
    },
    metadata: [
      { label: "Role", value: "UI/UX Designer" },
      { label: "Timeline", value: "4 Weeks" },
      { label: "Collaboration", value: "Steven (PM)" },
      { label: "Platform", value: "Internal Web App" }
    ],
    context: {
      overview: "The central warehouse acts as the heart of operations, shipping goods to various branches. The process involves identifying needs, packing, and dispatching. However, tracking items once they left the shelf was a major blind spot in the logistics loop.",
      challenges: [
        "Inefficient paper-heavy process slowed down dispatch.",
        `<span class="font-bold border-b-2 border-red-200">Missing goods</span> were common due to lack of digital tracking.`,
        "Manual handwriting led to legibility issues and shipping errors."
      ]
    },
    process: [
      { number: "01", title: "Observation", description: "Shadowing warehouse staff during pack & ship." },
      { number: "02", title: "Interviews", description: "Understanding pain points of floor managers." },
      { number: "03", title: "Ideation", description: "Wireframing the digital item log flow." },
      { number: "04", title: "Validation", description: "Testing the scan-to-input prototype." }
    ],
    insights: {
      legacyIssues: [
        { title: "Manual Labeling Hell", description: "Staff manually wrote labels for every box, leading to inconsistency and lost time." },
        { title: "The Phantom Goods", description: "Items would disappear from inventory records without a trace once they left the packing station." },
        { title: "Slow Input", description: "Typing product codes or writing them by hand was the biggest bottleneck in the shipping queue." }
      ],
      systemUpgrades: [
        { title: "Auto-Generate 'Create Box'", description: "A one-click feature to generate a digital box ID and print a standardized label instantly." },
        { title: "Granular 'Item Log'", description: "Every item scanned into a box is logged digitally, creating a permanent audit trail." },
        { title: "Scan-to-Input", description: "Replaced manual entry with barcode scanning, reducing input time by seconds per item." }
      ]
    },
    showcase: {
      mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT0xtEqOjkPaPlKMoSqd8BVg25vvnm0IyEyjpqEO25Q47zlFja7YbUVBGDu9xW-VZPkoTSZTHXzxbdrX1sSn2D72FS8UOgXIyh7QpccvVYYDXb4XcHE4Bjfp1v3Sb3Zen9whxtVFYeGrUDzLUKOKbX3GEE3NFn5zQMnvp1vS2nl9JK290NEFfPerYALDiWI3Ee71TN-VULuakejrJg_3ZQ-fZcpbYU3g_wNGdMXICYOv3GRxzyQV-T9GZy7WXSQjcJ-pZEa1Zlw2j9",
      mainTag: "BOX_STICKER_DESIGN_&_ITEM_LOG_UI",
      mobileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDse3ks44zE1sdbfVe-NB1UVPJ6CU6kzvhDcdeu0b6qTrPoqS9R9UO0XE_SoDuqmHRG3bJ55hu0lie9tcypCVLVWxKWFxYPd_zAK-fD0U-3-SbXCDhpe_3t_kJ2n-p8ia0wIYY5Nlq1ZrlJ2XUnvoTTl645XOcz9ZD0XejLJPiR9mAsq9pEC2RbXMZSluQNo18s5AMaCE-iXqlbuYJtOqD036jSP4HjabLsxpeu-uu3I2O-ATPJQwFBFPT20dpms1cktsH_Ef6E5c3m",
      detailImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6hz92JhgWBkJVVIeUHysLgVBhqSc1jJfX-Q_pxqIT1LF6tactG_JsrBuQfewPf8ZVaYofGy3e_MXRgrCvoC0JIZHEi7BgCoqVuOH-DaePa-71V39KOUrSbC2DTjCLbCjvppCOPoW64b3fQo1I52l42Xs3XQc5pbUSK98SHGkgEyDePy3IxzNE9oi9F-RoZMdBUeyCKc3nmpE8iGfP1zOXAyPgi4c2FFwuRj7xutQZCNl704XTcCTtZdBbMy217YzRso9cNNjFBmae"
    },
    impact: {
      stat1Icon: "inventory_2",
      stat1Label: "ACCURACY",
      stat1Value: "ZERO",
      stat1Subtitle: "Missing items reported post-implementation.",
      stat2Icon: "bolt",
      stat2Label: "EFFICIENCY",
      stat2Value: "Paper Reduced",
      stat2Subtitle: "Scan vs Type workflow drastically increased throughput.",
      feedbackQuote: "Highly Beneficial",
      feedbackAuthor: "Amen, Head of Warehouse",
      feedbackSentiment: "POSITIVE SENTIMENT"
    }
  };

  return (
    <>
      <Head>
        <title>Warehouse Internal Freight - Panji Saputro Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout backLink="/" nextLink="#" nextProjectName="MDS CASH">
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
          mainImage={projectData.showcase.mainImage}
          mainTag={projectData.showcase.mainTag}
          mobileImage={projectData.showcase.mobileImage}
          detailImage={projectData.showcase.detailImage}
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
