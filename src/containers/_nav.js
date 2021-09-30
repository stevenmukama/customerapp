import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
//customers
  {
    _tag: "CSidebarNavDropdown",
    name: "Customers",
    route: "/customers",
    icon: "cil-cursor",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Add customer",
        to: "/customers/add-customer",
      },
      {
        _tag: "CSidebarNavItem",
        name: "List customers",
        to: "/customers/all-customers",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Companies",
        to: "/customers/all-companies",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Groups",
        to: "/customers/groups",
      },
      {
        _tag: "CSidebarNavItem",
        name: "files",
        to: "/customers/files",
      },
    ],
  },
//accounting
  {
    _tag: "CSidebarNavDropdown",
    name: "Accounting",
    route: "/accounting",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "New deposit",
        to: "/accounting/new-deposit",
        badge: {
          color: "success",
          text: "NEW",
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "New expense",
        to: "/accounting/new-expense",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Bills",
        to: "/accounting/bills",
      },
      {
        _tag: "CSidebarNavItem",
        name: "View Transactions",
        to: "/accounting/view-transactions",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Uncleared Transactions",
        to: "/accounting/uncleared-transactions",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Accounts",
        to: "/accounting/accounts",
      },
      {
        _tag: "CSidebarNavItem",
        name: "New Account",
        to: "/accounting/new-account",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Assets",
        to: "/accounting/assets",
      },
    ],
  },
  //sales
  {
    _tag: "CSidebarNavDropdown",
    name: "Sales",
    route: "/sales",
    icon: "cil-bell",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Invoices",
        to: "/sales/invoices",
      },
      {
        _tag: "CSidebarNavItem",
        name: "New invoice",
        to: "/sales/new-invoice",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Reccurring invoices",
        to: "/sales/reccurring-invoices",
      },
      {
        _tag: "CSidebarNavItem",
        name: "New Reccurring invoice",
        to: "/sales/new-reccurring-invoice",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Quotes",
        to: "/sales/quotes",
      },
      {
        _tag: "CSidebarNavItem",
        name: "New quote",
        to: "/sales/new-quote",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Payments",
        to: "/sales/payments",
      },
    ],
  },
  //suppliers
  {
    _tag: "CSidebarNavDropdown",
    name: "Suppliers",
    route: "/suppliers",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Add supplier",
        to: "/suppliers/new-supplier",
      },
      {
        _tag: "CSidebarNavItem",
        name: "List suppliers",
        to: "/suppliers/all-suppliers",
      },
    ],
  },
   //purchases
   {
    _tag: "CSidebarNavDropdown",
    name: "Purchase",
    route: "/purchase",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Purchase orders",
        to: "/purchase/add-new-purchase-order",
      },
      {
        _tag: "CSidebarNavItem",
        name: "New purchase order",
        to: "/purchase/purchase-orders",
      },
    ],
  },
  //sms
  {
    _tag: "CSidebarNavItem",
    name: "SMS",
    icon: "cil-phone",
    route: "/sms",
    badge: {
      color: "secondary",
      text: "NEW",
    },
  },
  //orders
  {
    _tag: "CSidebarNavDropdown",
    name: "Orders",
    route: "/orders",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "List orders",
        to: "/orders/add-order",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Add New order",
        to: "/orders/all-orders",
      },
    ],
  },
  //documents
  {
    _tag: "CSidebarNavItem",
    name: "Document",
    icon: "cil-star",
  },
  //products&services
  {
    _tag: "CSidebarNavDropdown",
    name: "Products&Services",
    route: "/ps",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Products",
        to: "/ps/products",
      },
      {
        _tag: "CSidebarNavItem",
        name: "New product",
        to: "/ps/new-product",
      },
      {
        _tag: "CSidebarNavItem",
        name: " Services",
        to: "/ps/services",
      },
      {
        _tag: "CSidebarNavItem",
        name: "New service",
        to: "/ps/new-service",
      },
    ],
  },
  //bank&cash
  {
    _tag: "CSidebarNavDropdown",
    name: "Bank&Cash",
    route: "/bc",
    icon: "cil-bank",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "new Account",
        to: "/bc/add-account",
      },
      {
        _tag: "CSidebarNavItem",
        name: "List accounts",
        to: "/bc/all-accounts",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Account Balances",
        to: "/bc/account-balances",
      },
    ],
  },
 //reports

 {
  _tag: "CSidebarNavDropdown",
  name: "Reports",
  route: "/reports",
  icon: "cil-bell",
  _children: [
    {
      _tag: "CSidebarNavItem",
      name: "Transactions",
      to: "/reports/transactions",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Invoices",
      to: "/reports/invoices",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Purchases",
      to: "/reports/purchases",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Account statement",
      to: "/reports/account-statement",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Income reports",
      to: "/reports/income-reports",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Expense Reports",
      to: "/reports/expense-reports",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Income Vs expense",
      to: "/reports/income-expense",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Reports by Date",
      to: "/reports/reports-date",
    },
    {
      _tag: "CSidebarNavItem",
      name: "All income",
      to: "/reports/all-income",
    },
    {
      _tag: "CSidebarNavItem",
      name: "All expense",
      to: "/reports/all-expense",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Sales",
      to: "/reports/sales",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Invoices Vs Expense",
      to: "/reports/invoices-expense",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Export",
      to: "/reports/export",
    },
  ],
},
];

export default _nav;
