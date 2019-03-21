import React from "react";

export const Title = "Invoices";

export const HeaderNames = [
  "#",
  "Subject",
  "Client",
  "VAT #",
  "Created",
  "Status",
  "Price"
  //""
];
export const HeaderNamesAction = [
  "#",
  "Subject",
  "Client",
  "VAT #",
  "Created",
  "Status",
  "Price",
  ""
];

export const Data = [
  [
    "001401",
    "Design Works",
    "Carlson Limited",
    "87956621",
    "15 Dec 2017",
    "Paid",
    "$887"
  ],
  [
    "001402",
    "UX Wireframes",
    "Adobe",
    "87956421",
    "12 Apr 2017",
    "Pending",
    "$1200"
  ],
  [
    "001403",
    "New Dashboard",
    "Bluewolf",
    "87956421",
    "23 Oct 2017",
    "Pending",
    "$534"
  ],
  [
    "001404",
    "Landing Page",
    "Salesforce",
    "87956421",
    "2 Sep 2017",
    "Due in 2 Weeks",
    "$1500"
  ],
  [
    "001405",
    "Marketting Templates",
    "Printic",
    "87956421",
    "29 Jan 2018",
    "Paid Today",
    "$648"
  ]
];

export const Elements = [
  [
    <span className="text-muted">001401</span>,
    <a href="/component/simpletable" className="text-inherit">
      Design Works
    </a>,
    "Carlson Limited",
    "87956621",
    "15 Dec 2017",
    <span>
      <span className="status-icon bg-success" />
      Paid
    </span>,
    "$887"
  ],
  [
    <span className="text-muted">001402</span>,
    <a href="/component/simpletable" className="text-inherit">
      UX Wireframes
    </a>,
    "Adobe",
    "87956421",
    "12 Apr 2017",
    <span>
      <span className="status-icon bg-danger" />
      Pending
    </span>,
    "$1200"
  ],
  [
    <span className="text-muted">001403</span>,
    <a href="/component/simpletable" className="text-inherit">
      New Dashboard
    </a>,
    "Bluewolf",
    "87956421",
    "23 Oct 2017",
    <span>
      <span className="status-icon bg-danger" />
      Pending
    </span>,
    "$534"
  ],
  [
    <span className="text-muted">001404</span>,
    <a href="/component/simpletable" className="text-inherit">
      Landing Page
    </a>,
    "Salesforce",
    "87956421",
    "2 Sep 2017",
    <span>
      <span className="status-icon bg-warning" />
      Due in 2 Weeks
    </span>,
    "$1500"
  ],
  [
    <span className="text-muted">001405</span>,
    <a href="/component/simpletable" className="text-inherit">
      Marketting Templates
    </a>,
    "Printic",
    "87956421",
    "29 Jan 2018",
    <span>
      <span className="status-icon bg-success" />
      Paid Today
    </span>,
    "$648"
  ]
];
