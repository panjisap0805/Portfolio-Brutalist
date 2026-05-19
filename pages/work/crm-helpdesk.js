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
      overview: "MDS Coop’s internal Helpdesk team handles membership complaints nationwide. The process relies heavily on managing incoming WhatsApp chats and coordinating resolution tickets across cross-functional divisions like Finance and IT. The Goal: Maximize administrative efficiency, reduce cross-divisional miscommunication, and validate the usability of newly introduced Chat State and Sidebar Notification features.",
      challenges: [
        `<span class="font-bold border-b-2 border-red-200 text-black">Auto-Resolve Timeouts:</span> The existing chat system automatically closed active user sessions within 24 hours, making weekend follow-ups virtually impossible and dropping critical member inquiries.`,
        `Helpdesk staff had to <span class="font-bold border-b-2 border-red-200 text-black">manually draft</span> and copy-paste problem logs into separate emails.`,
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
        { title: "THE 24-HOUR AUTO-CLOSED CHAT TRAP", description: "Staff felt overwhelmed by automatic session timeouts. Unresolved complex issues over weekends forced agents to re-initiate manual chat sequences or switch to alternative contact channels." },
        { title: "HIGH-FRICTION CROSS-DIVISION HANDOFFS", description: "Shifting away from manual email drafting. Agents demanded instant internal notes and a unified dashboard to minimize cross-divisional miscommunication with Finance." },
        { title: "VISIBILITY BLIND SPOTS ON ACTION BUTTONS", description: "During testing, usability stalled on the \"Share Ticket Link\" function. Due to low color contrast, users mistook the interactive action button for a disabled UI element." }
      ],
      systemUpgrades: [
        { title: "Chat State Categories", description: "Engineered an organized message directory (Unassigned, Assigned, Resolved) backed by persistent session tracking and distinct urgent visual badges (Red Color coding)." },
        { title: "Integrated CRM Ticketing Module", description: "Embedded an instant ticket generation form right into the chat sidebar, auto-populating member records and adding drop-downs for Priority Level and Target Division." },
        { title: "Accessible Action Buttons", description: "Re-designed the interactive link-sharing node to enforce strict high-contrast visibility boundaries, ensuring clear interactive click affordance." }
      ]
    },
    showcase: {
      protoImage: "/asset-crm-blueprint.webp",
      mainImage: "/asset-crm-final.webp",
      mainTag: "/dir/mds/crm-helpdesk"
    },
    impact: {
      stat1Icon: "check_circle",
      stat1Label: "TESTING METRIC DEFINITION",
      stat1Value: "100%",
      stat1Subtitle: "Completion rate for core discovery pathways. Workflow Acceleration: Automated data inheritance inside the ticket generator eliminated redundant copy-pasting.",
      stat2Icon: "workspaces",
      stat2Label: "OPERATIONAL IMPACT",
      stat2Value: "Unified Workspace",
      stat2Subtitle: "Eliminated separate email tools, providing a single-source workflow for internal issue escalation.",
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
      <Layout backLink="/" nextLink="/" nextProjectName="BACK_TO_HOME_DASHBOARD">
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
          protoImage={projectData.showcase.protoImage}
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
