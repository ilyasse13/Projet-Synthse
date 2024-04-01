import React from 'react'

const Login = () => {
  return (
  
    <form  className="mt-8 w-96 gap-10">
      <h1 className='text-4xl text-slate-900 font-semibold'>Log in to your Account</h1>
    <div className="col-span-6 m-14 sm:col-span-3">
      <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
        Username
      </label>

      <input
        type="text"
        id="FirstName"
        name="first_name"
        placeholder='Username'
        className="mt-1 block w-full h-8 rounded border-gray-300 focus:border-gray-700 focus:ring-gray-700 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 shadow-sm"
      />
    </div>



    <div className="col-span-6 m-14 sm:col-span-3">
      <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

      <input
        type="password"
        id="Password"
        name="password"
        placeholder='password'
        className="mt-1 block w-full h-8 rounded border-gray-300 focus:border-gray-700 focus:ring-gray-700 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 shadow-sm"
      />
    </div>

    
   
   



    <div className="col-span-6 ml-14 sm:flex sm:items-center sm:gap-4">
      <button
        className="inline-block rounded shrink-0 border border-slate-800 bg-slate-800 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-slate-800 focus:outline-none focus:ring active:text-blue-500"
      >
        Create an account
      </button>


    </div>
  </form>
                 
  )
}

export default Login