import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))

const Register = React.lazy(() => import('./views/pages/register/Register'))
const VerifyEmail = React.lazy(() => import('./views/pages/verifyEmail/VerifyEmail'))
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Owner = React.lazy(() => import('./views/pages/businessComponents/owner/Owner'))
const BusinessForm = React.lazy(() =>
  import('./views/pages/businessComponents/businessform/businessForm'),
)
const Formvalid = React.lazy(() => import('./views/pages/formvald/Formvalid'))
const Personalbss = React.lazy(() =>
  import('./views/pages/businessComponents/personalbss/Personalbss'),
)
// import React from 'react'

//   return (
//     <div>App</div>
//   )
function App() {
  return (
    <>
      <Router>
        <React.Suspense fallback={loading}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/api/v1/confirmEmail" element={<VerifyEmail />} />
            <Route path="/owner" element={<Owner />} />
            <Route path="/personalbss" element={<Personalbss />} />
            <Route path="/formvald" element={<Formvalid />} />
            <Route path="/businessForm" element={<BusinessForm />} />
            {/* <Route exact path="/404" element={<Page404 />} /> */}

            {/* <Route exact path="/500" name="Page 500" element={<Page500 />} /> */}
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </React.Suspense>
      </Router>
    </>
  )
}

export default App
