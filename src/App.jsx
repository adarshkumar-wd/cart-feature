import { useState , useEffect} from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import AuthenticationPage from './components/AuthenticationPage'
import { useSelector , useDispatch} from 'react-redux'
import authService from './AppWrite/Authentication'
import { login, logout } from './components/store/Slice'

function App() {
  
  const [isAuthenticated , setIsAuthenticated] = useState(useSelector(state => state.isAuthenticated))
  const [isLoading , setIsLoading] = useState(true)

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData){
        useDispatch(login(userData))
      } else {
        useDispatch(logout())
      }
    })
    .catch(error => console.log("App.jsx :: getCurrentUser :: error " , error))
    setIsLoading(false)
    console.log(isLoading)
  } , [])

  return(
    isAuthenticated ? 
      <div className='w-full h-screen bg-gray-400'>
      <Navbar />
      <Outlet />
    </div> : <AuthenticationPage />
  )
}

export default App