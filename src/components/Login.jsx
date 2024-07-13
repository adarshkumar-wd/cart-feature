import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='w-full h-screen bg-gray-300 flex items-center justify-center'>
      <div className='w-[65%] h-[75%] bg-gray-200 border-[1px] border-black rounded-3xl p-5'>
        <form action="" className='w-full h-full'>

          <h1>
            Don't have an Account <a href="/sign-up">Sign Up</a>
           </h1>

          <div>
            <input type="email" />
          </div>

          <div>
            <input type="password" />
          </div>

          <button type='submit'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Login