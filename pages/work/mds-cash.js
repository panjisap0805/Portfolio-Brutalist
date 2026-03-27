import Head from "next/head";
import Layout from "../../components/layout/Layout";
import ProjectHero from "../../components/project/ProjectHero";
import ProjectMetadata from "../../components/project/ProjectMetadata";
import ProjectContext from "../../components/project/ProjectContext";
import ProjectProcess from "../../components/project/ProjectProcess";
import ProjectInsights from "../../components/project/ProjectInsights";
import ProjectShowcase from "../../components/project/ProjectShowcase";
import ProjectImpact from "../../components/project/ProjectImpact";
import ProjectNavigation from "../../components/project/ProjectNavigation";

export default function MDSCash() {
  const projectData = {
    hero: {
      tag: "Case Study 01",
      title: "MDS Cash:<br className='hidden md:block'/> Online Loan Automation",
      description: "Re-engineering the lending lifecycle for speed and clarity. Transforming manual bottlenecks into a seamless digital workflow."
    },
    metadata: [
      { label: "Role", value: "Product Designer" },
      { label: "Timeline", value: "3 Months" },
      { label: "Year", value: "2023" },
      { label: "Platform", value: "App" }
    ],
    context: {
      overview: "MDS Coop needed a digital transformation for their lending lifecycle. The goal was to automate the manual review process and provide transparency to applicants. Previously, loan officers managed everything via Excel sheets and phone calls, leading to a fragmented customer experience.",
      challenges: [
        `Manual data entry caused a <span class="font-bold border-b-2 border-red-500 text-black">20% error rate</span>.`,
        `Applicants had <span class="font-bold border-b-2 border-red-500 text-black">zero visibility</span> on status.`,
        `Approval time averaged <span class="font-bold border-b-2 border-red-500 text-black">5-7 business days</span>.`
      ]
    },
    process: [
      { number: "01", title: "Audit", description: "Heuristic evaluation of current legacy systems." },
      { number: "02", title: "Research", description: "Interviews with 12 loan officers and 20 customers." },
      { number: "03", title: "Usability Test", description: "Low-fi prototype validation and iteration." },
      { number: "04", title: "Solution", description: "High-fidelity design system & handoff." }
    ],
    insights: {
      legacyIssues: [
        { title: "Data Overload", description: "Officers were presented with raw database views containing 50+ columns, most irrelevant to the immediate decision." },
        { title: "Black Box Status", description: "Customers had to call support to know if their loan was approved, creating a high volume of support tickets." },
        { title: "Document Chaos", description: "ID cards and payslips were emailed as attachments and manually re-uploaded to the server." }
      ],
      systemUpgrades: [
        { title: "Smart Filtering", description: "Introduced context-aware dashboards that only show the 5 critical metrics needed for the current stage of review." },
        { title: "Real-Time Tracker", description: "A Domino's-style tracker for applicants to see exactly where their application sits in the queue." },
        { title: "Integrated OCR", description: "Implemented auto-scanning for IDs that pre-fills the form, reducing manual entry by 85%." }
      ]
    },
    showcase: {
      mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT0xtEqOjkPaPlKMoSqd8BVg25vvnm0IyEyjpqEO25Q47zlFja7YbUVBGDu9xW-VZPkoTSZTHXzxbdrX1sSn2D72FS8UOgXIyh7QpccvVYYDXb4XcHE4Bjfp1v3Sb3Zen9whxtVFYeGrUDzLUKOKbX3GEE3NFn5zQMnvp1vS2nl9JK290NEFfPerYALDiWI3Ee71TN-VULuakejrJg_3ZQ-fZcpbYU3g_wNGdMXICYOv3GRxzyQV-T9GZy7WXSQjcJ-pZEa1Zlw2j9",
      mainTag: "FIGMA_V_2.4",
      mobileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDse3ks44zE1sdbfVe-NB1UVPJ6CU6kzvhDcdeu0b6qTrPoqS9R9UO0XE_SoDuqmHRG3bJ55hu0lie9tcypCVLVWxKWFxYPd_zAK-fD0U-3-SbXCDhpe_3t_kJ2n-p8ia0wIYY5Nlq1ZrlJ2XUnvoTTl645XOcz9ZD0XejLJPiR9mAsq9pEC2RbXMZSluQNo18s5AMaCE-iXqlbuYJtOqD036jSP4HjabLsxpeu-uu3I2O-ATPJQwFBFPT20dpms1cktsH_Ef6E5c3m",
      detailImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6hz92JhgWBkJVVIeUHysLgVBhqSc1jJfX-Q_pxqIT1LF6tactG_JsrBuQfewPf8ZVaYofGy3e_MXRgrCvoC0JIZHEi7BgCoqVuOH-DaePa-71V39KOUrSbC2DTjCLbCjvppCOPoW64b3fQo1I52l42Xs3XQc5pbUSK98SHGkgEyDePy3IxzNE9oi9F-RoZMdBUeyCKc3nmpE8iGfP1zOXAyPgi4c2FFwuRj7xutQZCNl704XTcCTtZdBbMy217YzRso9cNNjFBmae"
    },
    impact: {
      stat1Value: "4.2",
      stat1Suffix: "/5.0",
      stat1Subtitle: "Significant increase in user satisfaction when usability testing.",
      stat2Value: "+40%",
      stat2Subtitle: "Faster loan processing times achieved within the first quarter.",
      constraintsText: 'We were unable to fully integrate with the legacy banking core due to API restrictions. The solution relies on a middleware layer that syncs nightly, meaning "real-time" data has a slight latency we had to disclose in the UI.'
    },
    nextProject: {
      tag: "CASE_STUDY_02",
      title: "WAREHOUSE INTERNAL<br className='hidden md:block'/> FREIGHT",
      link: "/work/warehouse-internal-freight"
    }
  };

  return (
    <>
      <Head>
        <title>MDS Cash - Panji Saputro Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout backLink="/" nextLink="#" nextProjectName="WAREHOUSE">
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
          stat1Value={projectData.impact.stat1Value}
          stat1Suffix={projectData.impact.stat1Suffix}
          stat1Subtitle={projectData.impact.stat1Subtitle}
          stat2Value={projectData.impact.stat2Value}
          stat2Subtitle={projectData.impact.stat2Subtitle}
          constraintsText={projectData.impact.constraintsText}
        />
        <ProjectNavigation nextProject={projectData.nextProject} />
      </Layout>
    </>
  );
}
