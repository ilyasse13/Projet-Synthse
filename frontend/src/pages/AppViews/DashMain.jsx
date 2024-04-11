import React, { useState } from 'react'
const DashMain = () => {
  const [showModal,setshowModal]=useState(false)
    return (
      <>
      <div className="bg-slate-200 text-slate-700 py-4 px-6 flex h-16 w-full justify-between items-center">
  <h1 className="text-2xl font-bold">Posts</h1>
  <button onClick={() => { setshowModal(true) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    + New Post
  </button>
</div>
{showModal && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setshowModal(false)}></div>
    <div className="bg-white p-8 rounded-md shadow-md transform transition-all duration-300 z-10">
      <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            placeholder="Enter content"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
            type="button"
            onClick={() => { setshowModal(false) }}
          >
            Create
          </button>
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
            type="button"
            onClick={() => { setshowModal(false) }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}
      </>
    );
  }
  
  export default DashMain;
  