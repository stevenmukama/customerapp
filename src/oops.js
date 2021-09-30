import React from 'react'
import AccountBalances from './views/myPages/bankAndCash/accountBalances'
import AllAccounts from './views/myPages/bankAndCash/allAccounts'
import AllOrders from './views/myPages/orders/allOrders'
import NewOrder from './views/myPages/orders/newOrder'

// examples

const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

const Accordion = React.lazy(() => import('./views/components/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/components/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/components/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/components/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/components/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/components/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/components/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/components/base/paginations/Paginations'))
const Popovers = React.lazy(() => import('./views/components/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/components/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/components/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/components/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/components/base/tooltips/Tooltips'))

const Buttons = React.lazy(() => import('./views/components/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() =>
  import('./views/components/buttons/button-groups/ButtonGroups'),
)
const Dropdowns = React.lazy(() => import('./views/components/buttons/dropdowns/Dropdowns'))

const ChecksRadios = React.lazy(() => import('./views/components/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() =>
  import('./views/components/forms/floating-labels/FloatingLabels'),
)
const FormControl = React.lazy(() => import('./views/components/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/components/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/components/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/components/forms/range/Range'))
const Select = React.lazy(() => import('./views/components/forms/select/Select'))
const Validation = React.lazy(() => import('./views/components/forms/validation/Validation'))

const CoreUIIcons = React.lazy(() => import('./views/components/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/components/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/components/icons/brands/Brands'))

const Alerts = React.lazy(() => import('./views/components/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/components/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/components/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/components/notifications/toasts/Toasts'))

// const Login = React.lazy(() => import('./views/examples/pages/login/Login'))
// const Register = React.lazy(() => import('./views/examples/pages/register/Register'))
// const Page404 = React.lazy(() => import('./views/examples/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/examples/pages/page500/Page500'))

const Widgets = React.lazy(() => import('./views/components/widgets/Widgets'))

const Charts = React.lazy(() => import('./views/components/charts/Charts'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const AllCustomers = React.lazy(() => import('./views/myPages/customers/AllCustomers/index'))
const AddCustomer = React.lazy(() => import('./views/myPages/customers/AddCustomer/index'))
const Companies = React.lazy(() => import('./views/myPages/customers/Companies/index'))
const Groups = React.lazy(() => import('./views/myPages/customers/Groups/index'))
const Files = React.lazy(() => import('./views/myPages/customers/Files/index'))
const newDeposit = React.lazy(() => import('./views/myPages/accounting/newDeposit/index'))
const NewExpense = React.lazy(() => import('./views/myPages/accounting/newExpense/index'))
const Transfer = React.lazy(() => import('./views/myPages/accounting/transfer/index'))
const Bills = React.lazy(() => import('./views/myPages/accounting/bills/index'))
const ViewsTransactions = React.lazy(() =>
  import('./views/myPages/accounting/viewTransactions/index'),
)
const UnclearedTransactions = React.lazy(() =>
  import('./views/myPages/accounting/unclearedTransactions/index'),
)
const Accounts = React.lazy(() => import('./views/myPages/accounting/accounts/index'))
const NewAccount = React.lazy(() => import('./views/myPages/accounting/newAccount/index'))
const Assets = React.lazy(() => import('./views/myPages/accounting/assets/index'))
//sales
const Invoices = React.lazy(() => import('./views/myPages/sales/invoices/index'))
const NewInvoice = React.lazy(() => import('./views/myPages/sales/newInvoice/index'))
const ReccuringInvoices = React.lazy(() => import('./views/myPages/sales/reccurringinvoices/index'))
const NewreccurringInvoice = React.lazy(() =>
  import('./views/myPages/sales/newReccurringInvoice/index'),
)
const Quotes = React.lazy(() => import('./views/myPages/sales/quotes/index'))
const NewQuote = React.lazy(() => import('./views/myPages/sales/newQuote/index'))
const Payments = React.lazy(() => import('./views/myPages/sales/payments/index'))
//products&services
const AllProducts = React.lazy(() => import('./views/myPages/ProductsAndServices/products/index'))
const NewProduct = React.lazy(() => import('./views/myPages/ProductsAndServices/newProduct/index'))
const AllServices = React.lazy(() => import('./views/myPages/ProductsAndServices/services/index'))
const NewService = React.lazy(() => import('./views/myPages/ProductsAndServices/newService/index'))
//suppliers
const AddSupplier = React.lazy(() => import('./views/myPages/suppliers/addSupplier/index'))
const AllSuppliers = React.lazy(() => import('./views/myPages/suppliers/allSuppliers/index'))
//purchase
const PurchaseOrders = React.lazy(() => import('./views/myPages/purchase/purchaseOrders/index'))
const NewPurchaseOrder = React.lazy(() => import('./views/myPages/purchase/newPurchaseOrder/index'))
//sms
const SMS = React.lazy(() => import('./views/myPages/sms/index'))
//documents
const Documents = React.lazy(() => import('./views/myPages/documents/index'))
//reports
const TransactionsReport = React.lazy(() => import('./views/myPages/reports/transactions/index'))
const InvoicesReport = React.lazy(() => import('./views/myPages/reports/invoices/index'))
const PurchasesReport = React.lazy(() => import('./views/myPages/reports/purchases/index'))
const AccountStatement = React.lazy(() => import('./views/myPages/reports/accountStament/index'))
const IncomeReports = React.lazy(() => import('./views/myPages/reports/incomeReports/index'))
const ExpenseReports = React.lazy(() => import('./views/myPages/reports/expenseReports/index'))
const IncomeExpense = React.lazy(() => import('./views/myPages/reports/incomeVsExpense/index'))
const ReportsdByDate = React.lazy(() => import('./views/myPages/reports/reportsByDate/index'))
const AllIncome = React.lazy(() => import('./views/myPages/reports/AllIncome/index'))
const AllExpense = React.lazy(() => import('./views/myPages/reports/AllExpense/index'))
const Sales = React.lazy(() => import('./views/myPages/reports/sales/index'))
const InvoicesExpense = React.lazy(() => import('./views/myPages/reports/invoicesVsExpense/index'))
const Export = React.lazy(() => import('./views/myPages/reports/export/index'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', component: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress', name: 'Progress', component: Progress },
  { path: '/base/spinners', name: 'Spinners', component: Spinners },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/forms', name: 'Forms', component: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', component: FormControl },
  { path: '/forms/select', name: 'Select', component: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', component: ChecksRadios },
  { path: '/forms/range', name: 'Range', component: Range },
  { path: '/forms/input-group', name: 'Input Group', component: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', component: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', component: Layout },
  { path: '/forms/validation', name: 'Validation', component: Validation },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toasts', name: 'Toasts', component: Toasts },
  // { path: '/login', name: 'Login', component: Login },
  // { path: '/register', name: 'Register', component: Register },
  // { path: '/404', name: '404', component: Page404 },
  // { path: '/500', name: '500', component: Page500 },
  { path: '/widgets', name: 'Widgets', component: Widgets },
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
  { path: '/accounting/new-accounting', name: 'new accounting', component: NewAccount },
  { path: '/accounting/asssets', name: 'assets', component: Assets },
  //sales
  { path: '/sales', name: 'sales', component: Invoices, exact: true },
  { path: '/sales/invoices', name: 'Invoices', component: Invoices },
  { path: '/sales/new-invoice', name: 'New invoice', component: NewInvoice },
  { path: '/sales/recurring-invoices', name: 'recurring invoices', component: ReccuringInvoices },
  {
    path: '/sales/new-recurring-invoice',
    name: 'new Reccuring Invoice',
    component: NewreccurringInvoice,
  },
  { path: '/sales/new-quote', name: 'new Quote', component: NewQuote },
  { path: '/sales/payments', name: 'Payments', component: Payments },
  { path: '/sales/quotes', name: 'quotes', component: Quotes },
  //suppliers
  { path: '/suppliers', name: 'suppliers', component: AllSuppliers, exact: true },
  { path: '/suppliers/add-supplier', name: 'Add supplier', component: AddSupplier },
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
  { path: '/orders/new-order', name: 'assets', component: NewOrder },
  //documents
  { path: '/documents', name: 'documents', component: Documents },
  //product&services
  { path: '/ps', name: 'Products&Services', component: AllProducts, exact: true },
  { path: '/ps/all-products', name: 'list Products', component: AllProducts },
  { path: '/ps/new-product', name: 'New product', component: NewProduct },
  { path: '/ps/all-services', name: 'list  services', component: AllServices },
  { path: '/ps/new-service', name: 'New Service', component: NewService },
  //Bank&cash
  { path: '/bc', name: 'All accounts', component: AllAccounts, exact: true },
  { path: '/bc/new-account', name: 'New Account', component: NewAccount },
  { path: '/bc/all-accounts', name: 'All accounts', component: AllAccounts },
  { path: '/bc/balances', name: 'Account Balances', component: AccountBalances },
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
]

export default routes
