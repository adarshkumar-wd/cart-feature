import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import { Provider } from 'react-redux'
import  Store  from '../src/components/store/Store.js'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
Login
// import Login from './components/Login.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: ""
      },
      {
        element: <Cart />,
        path: "cart"
      },
      {
        element: <SignUp />,
        path: "signup"
      },
      {
        element: <Login />,
        path: "login"
      },
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
   </Provider>

)
