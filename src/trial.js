
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