import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
//bank&cash
const AccountBalances = React.lazy(() => import('./components/bankAndCash/accountBalances'));
const AllAccounts = React.lazy(() => import( './components/bankAndCash/allAccounts'));
//orders
const AllOrders = React.lazy(() => import('./components/orders/allOrders'));
const NewOrder = React.lazy(() => import('./components/orders/newOrder'));
//customers
const AllCustomers = React.lazy(() => import('./components/customers/AllCustomers/index'))
const AddCustomer = React.lazy(() => import('./components/customers/AddCustomer/index'))
const Companies = React.lazy(() => import('./components/customers/Companies/index'))
const Groups = React.lazy(() => import('./components/customers/Groups/index'))
const Files = React.lazy(() => import('./components/customers/Files/index'))
const newDeposit = React.lazy(() => import('./components/accounting/newDeposit/index'))
const NewExpense = React.lazy(() => import('./components/accounting/newExpense/index'))
const Transfer = React.lazy(() => import('./components/accounting/transfer/index'))
const Bills = React.lazy(() => import('./components/accounting/bills/index'))
const ViewsTransactions = React.lazy(() =>
  import('./components/accounting/viewTransactions/index'),
)
const UnclearedTransactions = React.lazy(() =>
  import('./components/accounting/unclearedTransactions/index'),
)
const Accounts = React.lazy(() => import('./components/accounting/accounts/index'))
const NewAccount = React.lazy(() => import('./components/accounting/newAccount/index'))
const Assets = React.lazy(() => import('./components/accounting/assets/index'))
//sales
const Invoices = React.lazy(() => import('./components/sales/invoices/index'))
const NewInvoice = React.lazy(() => import('./components/sales/newInvoice/index'))
const ReccuringInvoices = React.lazy(() => import('./components/sales/reccurringinvoices/index'))
const NewreccurringInvoice = React.lazy(() =>
  import('./components/sales/newReccurringInvoice/index'),
)
const Quotes = React.lazy(() => import('./components/sales/quotes/index'))
const NewQuote = React.lazy(() => import('./components/sales/newQuote/index'))
const Payments = React.lazy(() => import('./components/sales/payments/index'))
//products&services
const AllProducts = React.lazy(() => import('./components/ProductsAndServices/products/index'))
const NewProduct = React.lazy(() => import('./components/ProductsAndServices/newProduct/index'))
const AllServices = React.lazy(() => import('./components/ProductsAndServices/services/index'))
const NewService = React.lazy(() => import('./components/ProductsAndServices/newService/index'))
//suppliers
const AddSupplier = React.lazy(() => import('./components/suppliers/addSupplier/index'))
const AllSuppliers = React.lazy(() => import('./components/suppliers/allSuppliers/index'))
//purchase
const PurchaseOrders = React.lazy(() => import('./components/purchase/purchaseOrders/index'))
const NewPurchaseOrder = React.lazy(() => import('./components/purchase/newPurchaseOrder/index'))
//sms
const SMS = React.lazy(() => import('./components/sms/index'))
//documents
const Documents = React.lazy(() => import('./components/documents/index'))
//reports
const TransactionsReport = React.lazy(() => import('./components/reports/transactions/index'))
const InvoicesReport = React.lazy(() => import('./components/reports/invoices/index'))
const PurchasesReport = React.lazy(() => import('./components/reports/purchases/index'))
const AccountStatement = React.lazy(() => import('./components/reports/accountStament/index'))
const IncomeReports = React.lazy(() => import('./components/reports/incomeReports/index'))
const ExpenseReports = React.lazy(() => import('./components/reports/expenseReports/index'))
const IncomeExpense = React.lazy(() => import('./components/reports/incomeVsExpense/index'))
const ReportsdByDate = React.lazy(() => import('./components/reports/reportsByDate/index'))
const AllIncome = React.lazy(() => import('./components/reports/AllIncome/index'))
const AllExpense = React.lazy(() => import('./components/reports/AllExpense/index'))
const Sales = React.lazy(() => import('./components/reports/sales/index'))
const InvoicesExpense = React.lazy(() => import('./components/reports/invoicesVsExpense/index'))
const Export = React.lazy(() => import('./components/reports/export/index'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
   //customers
   { path: '/customers', name: 'Customers', component: AllCustomers, exact: true },
   { path: '/customers/add-customer', name: 'Add Customer', component: AddCustomer },
   { path: '/customers/all-customers', name: 'All Customers', component: AllCustomers },
   { path: '/customers/all-companies', name: 'All Companies', component: Companies },
   { path: '/customers/groups', name: 'Groups', component: Groups },
   { path: '/customers/files', name: 'Files', component: Files },
   //accounting
   { path: '/accounting', name: 'Accounting', component: AllAccounts, exact: true },
   { path: '/accounting/new-deposit', name: 'New deposit', component: newDeposit },
   { path: '/accounting/new-expense', name: 'New expense', component: NewExpense },
   { path: '/accounting/transfer', name: 'transfer', component: Transfer },
   { path: '/accounting/bills', name: 'Bills', component: Bills },
   {
     path: '/accounting/view-transactions',
     name: 'View Transactions',
     component: ViewsTransactions,
   },
   {
     path: '/accounting/uncleared-transactions',
     name: 'Uncleareared transactions',
     component: UnclearedTransactions,
   },
   { path: '/accounting/accounts', name: 'accounts', component: Accounts },
   { path: '/accounting/new-account', name: 'new accounting', component: NewAccount },
   { path: '/accounting/assets', name: 'assets', component: Assets },
   //sales
   { path: '/sales', name: 'sales', component: Invoices, exact: true },
   { path: '/sales/invoices', name: 'Invoices', component: Invoices },
   { path: '/sales/new-invoice', name: 'New invoice', component: NewInvoice },
   { path: '/sales/reccurring-invoices', name: 'recurring invoices', component: ReccuringInvoices },
   {
     path: '/sales/new-reccurring-invoice',
     name: 'new Reccuring Invoice',
     component: NewreccurringInvoice,
   },
   { path: '/sales/new-quote', name: 'new Quote', component: NewQuote },
   { path: '/sales/payments', name: 'Payments', component: Payments },
   { path: '/sales/quotes', name: 'quotes', component: Quotes },
   //suppliers
   { path: '/suppliers', name: 'suppliers', component: AllSuppliers, exact: true },
   { path: '/suppliers/new-supplier', name: 'Add supplier', component: AddSupplier },
   { path: '/suppliers/all-suppliers', name: ' all suppliers', component: AllSuppliers },
   //purchase
   { path: '/purchase', name: 'Purchase', component: PurchaseOrders, exact: true },
   { path: '/purchase/purchase-orders', name: 'purchase orders', component: PurchaseOrders },
   {
     path: '/purchase/add-new-purchase-order',
     name: 'new purchase order',
     component: NewPurchaseOrder,
   },
   //sms
   { path: '/sms', name: 'SMS', component: SMS },

   //orders
   { path: '/orders', name: 'orders', component: AllOrders, exact: true },
   { path: '/orders/all-orders', name: 'assets', component: AllOrders },
   { path: '/orders/add-order', name: 'assets', component: NewOrder },
   //documents
   { path: '/documents', name: 'documents', component: Documents },
   //product&services
   { path: '/ps', name: 'Products&Services', component: AllProducts, exact: true },
   { path: '/ps/products', name: 'list Products', component: AllProducts },
   { path: '/ps/new-product', name: 'New product', component: NewProduct },
   { path: '/ps/services', name: 'list  services', component: AllServices },
   { path: '/ps/new-service', name: 'New Service', component: NewService },
   //Bank&cash
   { path: '/bc', name: 'All accounts', component: AllAccounts, exact: true },
   { path: '/bc/add-account', name: 'New Account', component: NewAccount },
   { path: '/bc/all-accounts', name: 'All accounts', component: AllAccounts },
   { path: '/bc/account-balances', name: 'Account Balances', component: AccountBalances },
   //Reports
   { path: '/reports', name: 'All Income', component: AllIncome, exact: true },
   { path: '/reports/transactions', name: 'Transactions', component: TransactionsReport },
   { path: '/reports/invoices', name: 'Invoices', component: InvoicesReport },
   { path: '/reports/purchases', name: 'Purchase', component: PurchasesReport },
   { path: '/reports/account-statement', name: 'Account Statement', component: AccountStatement },
   { path: '/reports/income-reports', name: 'Income Reports', component: IncomeReports },
   { path: '/reports/expense-reports', name: 'expense Reports', component: ExpenseReports },
   { path: '/reports/income-expense', name: 'Income Vs Expense', component: IncomeReports },
   { path: '/reports/reports-date', name: 'Reports By Date', component: ReportsdByDate },
   { path: '/reports/all-income', name: 'All Income', component: AllIncome },
   { path: '/reports/all-expense', name: 'All expense', component: AllExpense },
   { path: '/reports/sales', name: 'Sales', component: Sales },
   { path: '/reports/invoice-expense', name: 'Invoice Vs Expense', component: InvoicesExpense },
   { path: '/reports/export', name: 'Export', component: Export },
];

export default routes;
