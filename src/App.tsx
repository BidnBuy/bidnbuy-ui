import { Route, Routes } from 'react-router-dom'
import './App.css'

import Layout from './components/layout/Layout'

import Home from './pages/home/Home'
import SignIn from './pages/sign-in/SignIn'
import AccountTypeSelection from './pages/account-type-selection/AccountTypeSelection'
import CustomerSignUp from './pages/customer-sign-up/CustomerSignUp'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="account-type" element={<AccountTypeSelection />} />
        <Route path="customer-sign-up" element={<CustomerSignUp />} />
      </Route>
    </Routes>
  )
}

export default App
