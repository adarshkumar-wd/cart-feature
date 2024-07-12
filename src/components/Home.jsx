import React from 'react'
import { useSelector } from 'react-redux'

function Home() {

  const data = useSelector((state) => state.cardDetails )
  const isAuth = useSelector(state =>  state.isAuthenticated)
  console.log(isAuth)
  console.log(data)

  return (
    <div>
      Home
    </div>
  )
}

export default Home
