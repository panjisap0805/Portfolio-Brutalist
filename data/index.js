import mdsCash from "./projects/mds-cash";
import warehouseFulfillment from "./projects/warehouse-fulfillment";
import crmHelpdesk from "./projects/crm-helpdesk";
import warehouseInternalFreight from "./projects/warehouse-internal-freight";

/** Ordered by story strength (IMPLEMENTATION_PLAN.md §2.2), not by calendar. */
export const projects = [
  mdsCash,
  warehouseFulfillment,
  crmHelpdesk,
  warehouseInternalFreight,
];

export const projectSlugs = projects.map((p) => p.slug);

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}

export function getPrevNext(slug) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? projects[i - 1] : null,
    next: i < projects.length - 1 ? projects[i + 1] : null,
  };
}
