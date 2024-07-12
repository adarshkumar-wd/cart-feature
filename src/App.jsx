import { useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import AuthenticationPage from './components/AuthenticationPage'

function App() {
  const [isLogin, setIslogin] = useState(true)
  
  return(
    isLogin ? 
      <div className='w-full h-screen bg-gray-400'>
      <Navbar />
      <Outlet />
    </div> : <AuthenticationPage />
  )
}

export default App
