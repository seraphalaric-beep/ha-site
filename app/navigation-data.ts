export type NavNode = {
  name: string;
  href?: string;
  children?: NavNode[];
};

// Housing Agency main navigation information architecture.
// This is a direct TypeScript representation of the JSON you provided.
export const housingAgencyNav: NavNode[] = [
  {
    name: "About Us",
    children: [
      { name: "What We Do" },
      { name: "Our Organisation" },
      {
        name: "Governance",
        children: [
          { name: "Publications" },
          { name: "Reports" },
          { name: "Access to Information (FOI, data protection, etc.)" },
          { name: "Procurement" }
        ]
      },
      {
        name: "Access to Information",
        children: [
          { name: "Access to Information on the Environment" },
          { name: "Customer Care" },
          { name: "Protected Disclosure" },
          { name: "Privacy Notification" }
        ]
      },
      { name: "Funding & Grants" }
    ]
  },
  {
    name: "Supply (Enabling Housing Supply)",
    children: [
      {
        name: "Land & Development",
        children: [
          { name: "Land Management" },
          { name: "Land Acquisition Fund" }
        ]
      },
      {
        name: "Construction & Technical Support",
        children: [
          { name: "Modern Methods of Construction" },
          { name: "Building Information Modelling (BIM)" },
          { name: "Sustainability Guidance" }
        ]
      },
      {
        name: "Remediation & Safety",
        children: [
          { name: "Pyrite Remediation Scheme" },
          { name: "Defective Concrete Blocks Grant Scheme" },
          {
            name: "Apartment & Duplex Defects Remediation Scheme"
          }
        ]
      },
      {
        name: "Vacant Homes & Leasing",
        children: [
          { name: "Vacant Property Refurbishment Grant" },
          { name: "Repair and Leasing Scheme" },
          { name: "Leasing Options (Standard & Enhanced)" }
        ]
      },
      {
        name: "Development Partnerships & Supply Initiatives",
        children: [{ name: "Croí Cónaithe (Cities)" }]
      }
    ]
  },
  {
    name: "Affordability (Making Homes Affordable)",
    children: [
      {
        name: "Buying a Home",
        children: [
          { name: "Affordable Purchase Scheme" },
          { name: "First Home Scheme" },
          { name: "Help to Buy Scheme" },
          { name: "Local Authority Home Loan" },
          { name: "Legacy Affordable Purchase Scheme (1999–2012)" },
          { name: "Croí Cónaithe (Cities)" }
        ]
      },
      {
        name: "Renting a Home",
        children: [
          { name: "Cost Rental Scheme" },
          {
            name: "STAR Scheme (Secure Tenancy Affordable Rental Investment)"
          },
          { name: "Rental Accommodation Scheme (RAS)" },
          { name: "Housing Assistance Payment (HAP) Scheme" }
        ]
      },
      {
        name: "Staying in Your Home",
        children: [{ name: "Mortgage to Rent Scheme" }]
      }
    ]
  },
  {
    name: "Inclusion (Supporting People & Communities)",
    children: [
      {
        name: "Social Housing Support",
        children: [
          { name: "Social Housing Overview" },
          { name: "Eligibility & Need" },
          { name: "Applying for Social Housing" },
          { name: "Waiting Lists & Allocations" }
        ]
      },
      {
        name: "Inclusive Communities",
        children: [
          {
            name: "Housing for Older People",
            children: [
              { name: "Age Friendly Homes Programme" },
              { name: "Grants & Adaptations" },
              { name: "Rightsizing & Resources" },
              { name: "Publications" }
            ]
          },
          {
            name: "Housing & Disability",
            children: [
              {
                name: "National Housing Strategy for Disabled People"
              },
              { name: "Governance & Implementation" },
              { name: "Home & Supports Hub" },
              { name: "Practitioner Training & Awareness Campaigns" }
            ]
          },
          { name: "Multi‑Unit & Managed Estates Guidance" }
        ]
      },
      {
        name: "Homelessness & Prevention",
        children: [
          { name: "Homelessness Services" },
          { name: "Housing First Programme" },
          { name: "Assertive Street Outreach" },
          { name: "Young People’s Guide" },
          { name: "Homeless Prevention Services Directory" }
        ]
      },
      {
        name: "Rent Assistance & Lease Supports",
        children: [
          { name: "Rental Accommodation Scheme (RAS)" },
          { name: "Housing Assistance Payment (HAP) Scheme" }
        ]
      }
    ]
  },
  {
    name: "Research & Insights",
    children: [
      {
        name: "Data Hub",
        children: [
          { name: "Supply" },
          { name: "Affordability" },
          { name: "Demand" },
          { name: "Need" },
          { name: "Prices" },
          { name: "Rent Pressure Zones" }
        ]
      },
      {
        name: "Publications",
        children: [{ name: "Research Support Programme" }]
      }
    ]
  },
  {
    name: "Careers",
    children: [
      { name: "Current Vacancies" },
      { name: "Working at the Housing Agency" }
    ]
  }
];

