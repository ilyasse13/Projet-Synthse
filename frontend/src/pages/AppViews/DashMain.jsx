import React from 'react'

const Main = ({ title, description, image, posterName, postedTime }) => {
  return (
    <div>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Posts</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
         


 
    <div className="max-w-lg rounded overflow-hidden ml-36 shadow-lg bg-white">
      <img className="w-full" src='person1.jpg' alt="about logo"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">about logo</div>
        <p className="text-gray-700 text-base">description</p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Posted by posterName on postedTime
        </div>
      </div>
    </div>
  

          </div>
        </main>
    </div>
  )
}

export default Main