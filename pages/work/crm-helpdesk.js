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

export default function CRMHelpdeskOptimization() {
  const projectData = {
    hero: {
      tag: "CASE_STUDY_01",
      title: "CRM HELPDESK<br className='hidden md:block'/> OPTIMIZATION",
      description: "Streamlining and integrating the internal CRM helpdesk workflow for MDS Cooperative."
    },
    metadata: [
      { label: "ROLE", value: "Fullstack" },
      { label: "TIMELINE", value: "1 Month" },
      { label: "INDUSTRY", value: "Software as a Service" },
      { label: "PLATFORM", value: "Website" }
    ],
    context: {
      overview: "MDS Coop’s internal Helpdesk team handles membership complaints nationwide. The process relies heavily on managing incoming chats and coordinating resolution tickets across cross-functional divisions.",
      challenges: [
        `Helpdesk staff had to <span class="font-bold border-b-2 border-red-200 text-black">manually draft</span> a ticket every time`,
        `The other division didn't have a context about the problem`,
        `Urgent issues were <span class="font-bold border-b-2 border-red-200 text-black">lost in</span> generic chats.`
      ]
    },
    process: [
      { number: "01", title: "DEEP INTERVIEWS", description: "Conducted field interviews with Helpdesk staff to pinpoint core operational pain points and map out existing email-based workflows." },
      { number: "02", title: "PROTOTYPING", description: "Formulated interactive mockups introducing integrated ticketing modules directly inside the chat panel." },
      { number: "03", title: "MODERATED UT", description: "Evaluated the design system with 3 real Helpdesk end-users across 3 distinct real-world task scenarios." },
      { number: "04", title: "SYNTHESIS & REPORT", description: "Aggregated qualitative feedback and task completion matrices to define immediate engineering next steps." }
    ],
    insights: {
      legacyIssues: [
        { title: "HIGH-FRICTION CROSS-DIVISION HANDOFFS", description: "Staff were forced to manually copy and paste problem details, leading to ambiguous task statuses and untracked resolution progress." },
        { title: "SPAM & URGENCY BLINDNESS", description: "Urgent issues were frequently lost in generic chats, forcing staff to manually search through a high volume of incoming messages one by one to locate critical requests." },
        { title: "VISIBILITY BLIND SPOTS ON ACTION BUTTONS", description: "During testing, usability stalled on the \"Share Ticket Link\" function. Due to low color contrast, users mistook the interactive action button for a disabled UI element." }
      ],
      systemUpgrades: [
        { title: "'Integrated' CRM Ticketing Module", description: "Replaced manual copy-pasting with a highly adaptable ticketing system, ensuring complete visibility over task progress and current issue statuses." },
        { title: "Priority-Based Ticket Management", description: "The ticketing system enables all incoming issues to be converted into priority-sorted tickets, making it effortless to track and identify users with unresolved problems." },
        { title: "Accessible Action Buttons", description: "Re-designed the interactive link-sharing node to enforce strict high-contrast visibility boundaries, ensuring clear interactive click affordance." }
      ]
    },
    showcase: {
      mainTag: "/dir/mds/crm",
      crmImage: "/asset-mds-crm.webp",
      crm2Image: "/asset-mds-crm1.webp",
    },
    impact: {
      stat1Icon: "check_circle",
      stat1Label: "TESTING METRIC DEFINITION",
      stat1Value: "100%",
      stat1Subtitle: "Completion rate for core discovery pathways.",
      stat2Icon: "workspaces",
      stat2Label: "OPERATIONAL IMPACT",
      stat2Value: "Unified Workspace",
      stat2Subtitle: "Eliminated separate email tools, providing a single-source workflow.",
      constraintsText: "Currently, the website is still under further development due to the limitations of implementing the existing API within the current application."
    },
    nextProject: {
      tag: "CASE_STUDY_02",
      title: "MDS Cash:<br className='hidden md:block'/> Online Loan Automation",
      link: "/work/mds-cash"
    }
  };

  return (
    <>
      <Head>
        <title>CRM Helpdesk Optimization - Panji Saputro Portfolio</title>
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
          crmImage={projectData.showcase.crmImage}
          crm2Image={projectData.showcase.crm2Image}
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
          constraintsText={projectData.impact.constraintsText}
        />
        <ProjectNavigation nextProject={projectData.nextProject} />
      </Layout>
    </>
  );
}
