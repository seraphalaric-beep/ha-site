export type NavNode = {
  name: string;
  href?: string;
  children?: NavNode[];
};

// Housing Agency main navigation information architecture.
export const housingAgencyNav: NavNode[] = [
  {
    name: "About",
    children: [
      { name: "What we do" },
      { name: "Governance" },
      { name: "Access to Information" }
    ]
  },
  {
    name: "Insights",
    children: [
      { name: "Data Hub" },
      { name: "Our Publications" },
      { name: "Research Support Programme" },
      { name: "Podcasts" },
      { name: "Webinars on YouTube" },
      { name: "Evaluation" }
    ]
  },
  {
    name: "Supply and Affordability",
    children: [
      {
        name: "Supporting and enabling social housing",
        children: [
          { name: "CALF" },
          { name: "Mortgage to Rent" },
          { name: "Land Management and Development" },
          { name: "Part V" },
          { name: "Rental Accommodation Scheme" }
        ]
      },
      {
        name: "Supporting affordable rental and home ownership",
        children: [
          { name: "Cost Rental" },
          { name: "STAR (Secure Tenancy Affordable Rental investment scheme)" },
          { name: "Croí Cónaithe (Cities)" },
          { name: "Underwriting service for Local Authority Home Loans" },
          { name: "Affordable Housing Fund" },
          { name: "Affordable Purchase Scheme" }
        ]
      },
      {
        name: "Technical supports for AHBs and local authorities to deliver housing",
        children: [{ name: "Built Environment and Construction Support" }]
      },
      { name: "Vacancy" }
    ]
  },
  {
    name: "Inclusion & Remediation",
    children: [
      {
        name: "Homelessness",
        children: [
          { name: "Housing First" },
          { name: "Assertive Street Outreach" },
          { name: "Supports Guide for Young People" },
          { name: "National Homeless Prevention Services Directory" }
        ]
      },
      {
        name: "Social inclusion",
        children: [
          { name: "National Housing Strategy for Disabled People" },
          { name: "Housing for Older People" }
        ]
      },
      {
        name: "Housing networks",
        children: [
          { name: "Multi-Unit Developments / Managed Estates" },
          { name: "Education – Apprenticeship – Housing Bursary" }
        ]
      },
      {
        name: "Remediation",
        children: [
          { name: "Apartments" },
          { name: "Defective Concrete Blocks" },
          { name: "Pyrite Remediation Scheme" }
        ]
      }
    ]
  },
  {
    name: "Careers",
    children: []
  }
];
