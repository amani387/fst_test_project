"use client"
import { useState } from 'react';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Flexible Plans</h1>
        <p className="text-center mb-8">Choose a plan that works best for you & your team</p>
        
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-2 rounded-l ${
              billingPeriod === 'monthly' ? 'bg-yellow-500' : 'bg-gray-700'
            }`}
            onClick={() => setBillingPeriod('monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-r ${
              billingPeriod === 'yearly' ? 'bg-yellow-500' : 'bg-gray-700'
            }`}
            onClick={() => setBillingPeriod('yearly')}
          >
            Yearly (Save 60%)
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Standard Plan */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Standard</h2>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="text-4xl font-bold mb-4">${billingPeriod === 'monthly' ? '99' : '594'}</div>
            <p className="text-gray-400 mb-8">Per Month</p>
            
            <ul className="list-disc pl-5 space-y-2 mb-8">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
            
            <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded">
              Choose Plan
            </button>
          </div>
          
          {/* Premium Plan */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Premium (Recommended)</h2>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="text-4xl font-bold mb-4">${billingPeriod === 'monthly' ? '299' : '1794'}</div>
            <p className="text-gray-400 mb-8">Per Month</p>
            
            <ul className="list-disc pl-5 space-y-2 mb-8">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
            
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 py-2 rounded">
              Choose Plan
            </button>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="text-4xl font-bold mb-4">Custom Plan</div>
            
            <ul className="list-disc pl-5 space-y-2 mb-8">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
            
            <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}