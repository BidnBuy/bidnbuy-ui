import { Route, Routes } from 'react-router-dom'
import './App.css'

import Layout from './components/layout/Layout'

import Home from './pages/home/Home'
import SignIn from './pages/sign-in/SignIn'
import AccountTypeSelection from './pages/account-type-selection/AccountTypeSelection'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="account-type" element={<AccountTypeSelection />} />
      </Route>
    </Routes>
  )
}

export default App
