export type NavNode = {
  name: string;
  href?: string;
  children?: NavNode[];
};

// Housing Agency main navigation information architecture.
export const housingAgencyNav: NavNode[] = [
  {
    name: "About",
    children: [{ name: "Corporate Publications" }]
  },
  {
    name: "Insights",
    children: [
      { name: "Publications" },
      { name: "Data Hub" },
      { name: "Research Support Programme" },
      { name: "Podcasts" },
      { name: "Webinars" }
    ]
  },
  {
    name: "Supply & Affordability",
    children: [
      {
        name: "Supporting social housing delivery",
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
          { name: "Local Authority Home Loans" },
          { name: "Affordable Housing Fund" },
          { name: "Affordable Purchase Scheme" }
        ]
      },
      {
        name: "Technical supports for AHBs and local authorities",
        children: [{ name: "Built Environment and Construction Support" }]
      },
      { name: "Addressing vacancy" }
    ]
  },
  {
    name: "Inclusion",
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
          {
            name: "Education",
            children: [
              { name: "Apprenticeship" },
              { name: "Housing Bursary" }
            ]
          }
        ]
      },
      {
        name: "Remediation",
        children: [
          { name: "Apartments and Duplexes" },
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
