"use client"

import { useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';

export default function SignupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [logo, setLogo] = useState(null);
  const { data: session } = useSession();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-center text-gray-800 text-xl font-bold mb-6">Set Up Your Office</h2>
        
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Logo here</p>
            </div>
            <div className="absolute bottom-0 right-0 bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-white">+</span>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Enter Your Name *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="First & Last Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Enter Your Email *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email Here"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
              Your Company Name *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="companyName"
              type="text"
              placeholder="Name Here"
              {...register("companyName", { required: "Company name is required" })}
            />
            {errors.companyName && <p className="text-red-500 text-xs italic">{errors.companyName.message}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyWebsite">
              Your Company Website *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="companyWebsite"
              type="url"
              placeholder="Website Here"
              {...register("companyWebsite", { required: "Company website is required" })}
            />
            {errors.companyWebsite && <p className="text-red-500 text-xs italic">{errors.companyWebsite.message}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companySize">
              Company Size *
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="companySize"
              {...register("companySize", { required: "Company size is required" })}
            >
              <option value="">Choose Your Company Size</option>
              <option value="small">Small (1-10 employees)</option>
              <option value="medium">Medium (11-50 employees)</option>
              <option value="large">Large (51+ employees)</option>
            </select>
            {errors.companySize && <p className="text-red-500 text-xs italic">{errors.companySize.message}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Create Password *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Type Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", { 
                required: "Confirm password is required",
                validate: (value) => value === getValues("password") || "Passwords don't match"
              })}
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>}
          </div>
          
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Continue
            </button>
          </div>
          
          <div className="text-center text-gray-500 text-xs mt-4">
            By proceeding you are agreeing to the Terms & Conditions and Privacy Policy
          </div>
        </form>
      </div>
    </div>
  );
}