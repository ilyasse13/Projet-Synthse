import { useState } from 'react';
import { axiosClient } from '../../api/axios';


const SignUp = () => {
  const [formData, setFormData] = useState({
    CIN: "BB234567",
    first_name: "ilyasse",
    last_name: "loubardi",
    username: "ilyasseloubardi",
    phone:617990391,
    email: "ilyasse13@gmail.com",
    password: "ilyasse13",
    password_confirmation: "ilyasse13",
    building_number: 10,
    apartment_number: 20,
    environment_name: "rsident"
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axiosClient.post('/signup', formData);
      console.log(response.data); // Log the response from the backend
      // Do something with the response if needed
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
          First Name
        </label>

        <input
          type="text"
          id="FirstName"
          name="first_name"
          placeholder='John'
          value={formData.first_name}
          onChange={handleChange}
          className="mt-1 block w-full h-8 rounded border-gray-300 focus:border-gray-700 focus:ring-gray-700 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 shadow-sm"
        />
      </div>
     

      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
          Last Name
        </label>

        <input
          type="text"
          id="LastName"
          name="last_name"
          placeholder='Doe'
          value={formData.last_name}
          onChange={handleChange}
          className="mt-1 block w-full h-8 rounded border-gray-300 focus:border-gray-700 focus:ring-gray-700 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 shadow-sm"
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
          CIN
        </label>

        <input
          type="text"
          id="CIN"
          name="CIN"
          placeholder='AA123456'
          value={formData.CIN}
          onChange={handleChange}
          className="mt-1 block w-full h-8 rounded border-gray-300 focus:border-gray-700 focus:ring-gray-700 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
          Username
        </label>

        <input
          type="text"
          id="Username"
          name="username"
          placeholder='Username'
          value={formData.username}
          onChange={handleChange}
          className="mt-1 block w-full h-8 rounded border-gray-300 focus:border-gray-700 focus:ring-gray-700 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 shadow-sm"
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
          phone number
        </label>

        <input
          type="telephone"
          id="phone"
          name="phone"
          placeholder='06********'
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full h-8 rounded border-gray-300 focus:border-gray-700 focus:ring-gray-700 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 shadow-sm"
        />
      </div>
      <div className="col-span-6">
        <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

        <input
          type="email"
          id="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
          placeholder='John@exemple.com'
          className="mt-1 block w-full h-8 rounded border-gray-300 focus:border-gray-700 focus:ring-gray-700 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

        <input
          type="password"
          id="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder='password'
          className="mt-1 block w-full h-8 rounded border-gray-300 focus:border-gray-700 focus:ring-gray-700 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
          Password Confirmation
        </label>

        <input
          type="password"
          id="PasswordConfirmation"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleChange}
          className="mt-1 block w-full h-8 rounded border-gray-300 focus:border-gray-700 focus:ring-gray-700 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 shadow-sm"
          autoComplete="new-password"
        />

      </div>
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
        Building N°
        </label>

        <input
          type="Number"
          id="BuildingN°"
          name="building_number"
          placeholder='Building N°'
          onChange={handleChange}
          value={formData.building_number}
          className="mt-1 block w-full h-8 rounded border-gray-300 focus:border-gray-700 focus:ring-gray-700 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
          Appartement N°
        </label>

        <input
          type="number"
          id="AppartementN°"
          name="apartment_number"
          onChange={handleChange}
          value={formData.apartment_number}
          placeholder='Appartement N°'
          className="mt-1 block w-full h-8 rounded border-gray-300 focus:border-gray-700 focus:ring-gray-700 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 shadow-sm"
        />
      </div>
      <div className="col-span-6">
        <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Environement Name</label>

        <input
          type="text"
          id="envName"
          onChange={handleChange}
          value={formData.environment_name}
          name="environment_name"
          placeholder='Environement name'
          className="mt-1 block w-full h-8 rounded border-gray-300 focus:border-gray-700 focus:ring-gray-700 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button
          className="inline-block rounded shrink-0 border border-slate-800 bg-slate-800 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-slate-800 focus:outline-none focus:ring active:text-blue-500"
        >
          Create an account
        </button>


      </div>
    </form>
  )
}

export default SignUp