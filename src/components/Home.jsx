import React from 'react'
import { useSelector } from 'react-redux'
import authService from '../AppWrite/Authentication'

function Home() {

  const data = useSelector((state) => state.cardDetails )
  const isAuth = useSelector(state =>  state.isAuthenticated)
  console.log(isAuth)
  console.log(data)
  const auth = authService;

  return (
    <div>
      Home
      {console.log(auth)}
    </div>
  )
}

export default Home
