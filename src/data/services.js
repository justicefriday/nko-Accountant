// import {
//   FaBookOpen,
//   FaFileInvoiceDollar,
//   FaUser,
//   FaBuilding,
//   FaChartLine,
// } from "react-icons/fa";

// const services = [
//   {
//     id: 1,
//     icon: FaBookOpen,
//     title: "Bookkeeping",
//     description:
//       "We keep your financial records accurate and up to date so you can focus on growing your business.",
//   },
//   {
//     id: 2,
//     icon: FaFileInvoiceDollar,
//     title: "GST/HST Filing",
//     description:
//       "Accurate GST/HST filing to help you stay compliant and avoid penalties.",
//   },
//   {
//     id: 3,
//     icon: FaUser,
//     title: "Personal Tax Returns",
//     description:
//       "Professional preparation and filing of personal income tax returns.",
//   },
//   {
//     id: 4,
//     icon: FaBuilding,
//     title: "Corporate Tax Returns",
//     description:
//       "Complete corporate tax solutions for businesses of all sizes.",
//   },
//   {
//     id: 5,
//     icon: FaChartLine,
//     title: "CAM & Tax Reconciliation",
//     description:
//       "Detailed reconciliation services to ensure financial accuracy and compliance.",
//   },
// ];

// export default services;



import {
  FaFileInvoiceDollar,
  FaReceipt,
  FaUniversity,
  FaCalculator,
  FaUsers,
  FaBuilding,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Accounts Payable and Receivable",
    icon: FaFileInvoiceDollar,
    description:
      "We manage your accounts payable and receivable to ensure accurate processing, timely payments, proper invoicing and reliable monthly reconciliation.",
    details: [
      "Review, code and process vendor invoices according to company payable policies.",
      "Process payment requests and expense reports regularly while ensuring matching principles are followed.",
      "Generate invoices for tenants when due and track incoming receivables to identify discrepancies and monitor revenue streams.",
      "Reconcile payable and receivable accounts monthly.",
    ],
  },

  {
    id: 2,
    title: "HST Returns",
    icon: FaReceipt,
    description:
      "We review, calculate and file HST returns accurately and on time to help keep your business compliant.",
    details: [
      "Review HST information and supporting records.",
      "Calculate HST returns accurately.",
      "File HST returns in a timely manner.",
    ],
  },

  {
    id: 3,
    title: "Bank Reconciliation",
    icon: FaUniversity,
    description:
      "We reconcile your bank records with your books to identify discrepancies and ensure your financial records remain accurate.",
    details: [
      "Process bank reconciliations to identify discrepancies between bank balances and book balances.",
      "Identify differences and investigate discrepancies.",
      "Process the required adjustments to correct discrepancies.",
    ],
  },

  {
    id: 4,
    title: "Tax Return (Personal & Corporate)",
    icon: FaCalculator,
    description:
      "We provide up-to-date personal and corporate tax services to help ensure accurate and timely filing.",
    details: [
      "Provide personal tax return services.",
      "Prepare and file corporate tax returns, including T2 Corporation Income Tax.",
      "Ensure filings are prepared in accordance with applicable requirements.",
      "Help ensure correct and timely filing to avoid errors and late-filing penalties.",
    ],
  },

  {
    id: 5,
    title: "Payroll Management",
    icon: FaUsers,
    description:
      "We help businesses maintain accurate and up-to-date payroll information while ensuring employee records are properly managed.",
    details: [
      "Ensure payroll expenses and information are updated correctly and promptly.",
      "Update banking information and tax identification for new employees.",
      "Update changes to banking information for existing employees.",
      "Calculate allowances and bonus payments in line with company policy.",
    ],
  },

  {
    id: 6,
    title: "Common Area Maintenance (CAM) & Realty Tax Recoveries",
    icon: FaBuilding,
    description:
      "We manage CAM and realty tax recovery calculations, tenant billing adjustments and reconciliation schedules.",
    details: [
      "Prepare annual operating cost and Realty Tax cost calculations.",
      "Prepare corresponding tenant billing adjustments.",
      "Analyze variances for CAM and tax recoveries.",
      "Update tenant reconciliation schedules.",
      "Review transactions for accuracy.",
    ],
  },

  {
    id: 7,
    title: "Budgeting",
    icon: FaChartLine,
    description:
      "We work with operations to prepare annual revenue and expense projections to support effective budgeting.",
    details: [
      "Work with Operations to prepare annual revenue projections.",
      "Prepare annual expense projections.",
      "Produce comparable budgets to support business planning.",
    ],
  },
];

export default services;