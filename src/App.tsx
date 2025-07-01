import { Route, Routes } from 'react-router-dom'
import './App.css'

import Layout from '@/components/layout/Layout'

import Home from '@/pages/home/Home'
import CustomerSignUp from '@/pages/customer-sign-up/CustomerSignUp'
import AccountTypeSelection from '@/pages/account-type-selection/AccountTypeSelection'
import CustomerLogin from '@/pages/customer-login/CustomerLogin'
import VendorLogin from '@/pages/vendor-login/VendorLoginOld'
import VendorSignup from '@/pages/vendor-sign-up/VendorSignUp'
import Dashboard from '@/pages/dashboard/Dashboard'
import CustomerAccountVerification from '@/pages/customer-account-verification/CustomerAccountVerification'
import VendorAccountVerification from '@/pages/vendor-account-verification/VendorAccountVerification'


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="account-type" element={<AccountTypeSelection />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="signup/customer" element={<CustomerSignUp />} />
        <Route path="login/customer" element={<CustomerLogin />} />
        <Route path="signup/vendor" element={<VendorSignup />} />
        <Route path="login/vendor" element={<VendorLogin />} />
        <Route path="customer-account-verify" element={<CustomerAccountVerification />} />
        <Route path="vendor-account-verify" element={<VendorAccountVerification />} />
      </Route>
    </Routes>
  )
}

export default App
