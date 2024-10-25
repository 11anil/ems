import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log("email is", email);
    console.log("password is", password);
    setEmail("");
    setPassword("");
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div>
        <form onSubmit={(e) => {
          onSubmitHandler(e)

        }} className='flex flex-col itesm-center justify-center'>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);

            }} required className='text-white outline-none border-2 border-emerald-600 rounded-full py-3 px-5 text-xl bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter Your Email' />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }} required className='text-white outline-none border-2 border-emerald-600 rounded-full mt-3 py-3 px-5 text-xl bg-transparent placeholder:text-gray-400' type="password" placeholder='Enter Your Password' />
          <button className='mt-5 text-white outline-none border-none bg-emerald-600 rounded-full py-3  text-xl placeholder:text-gray-400'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login