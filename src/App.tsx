import { Route, Routes } from 'react-router-dom'
import './App.css'

import Layout from './components/layout/Layout'

import Home from './pages/home/Home'
import SignIn from './pages/sign-in/SignIn'
import CustomerSignUp from './pages/customer-sign-up/CustomerSignUp'
import AccountTypeSelection from './pages/account-type-selection/AccountTypeSelection'
import VendorSignUp from './pages/vendor-sign-up/VendorSignUp'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="account-type" element={<AccountTypeSelection />} />
        <Route path="signup/customer" element={<CustomerSignUp />} />
        <Route path="signup/vendor" element={<VendorSignUp />} />
      </Route>
    </Routes>
  )
}

export default App
