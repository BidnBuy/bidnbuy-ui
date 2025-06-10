import { Route, Routes } from 'react-router-dom'
import './App.css'

import Layout from './components/layout/Layout'

import Home from './pages/home/Home'
import CustomerSignUp from './pages/customer-sign-up/CustomerSignUp'
import AccountTypeSelection from './pages/account-type-selection/AccountTypeSelection'
import VendorSignUp from './pages/vendor-sign-up/VendorSignUp'
import CustomerLogin from './pages/customer-login/CustomerLogin'
import VendorLogin from './pages/vendor-login/VendorLogin'
// import OnboardingScreen from './pages/home/Onboarding'
function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="account-type" element={<AccountTypeSelection />} />
        <Route path="signup/customer" element={<CustomerSignUp />} />
        <Route path="login/customer" element={<CustomerLogin />} />
        <Route path="signup/vendor" element={<VendorSignUp />} />
        <Route path="login/vendor" element={<VendorLogin />} />
      </Route>
    </Routes>
  )
}

export default App
