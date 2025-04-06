"use client";
import { useState } from 'react';

export default function OrderSummary() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url('/images/background.png')`, // Replace with your actual image path
      }}
    >
      <div className="backdrop-blur-sm min-h-screen">
     

        {/* Order Summary Content */}
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">
            Your Order <span className="text-yellow-500">Summary</span>
          </h1>

          {/* Order Summary Card */}
          <div className="bg-white/20 backdrop-blur-lg p-8 rounded-xl border border-white/20 shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-6">Select Plan</h2>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-8">
              <button
                className={`px-4 py-1 rounded-l ${
                  billingPeriod === 'monthly' ? 'bg-yellow-500 text-black' : 'bg-gray-700'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-1 rounded-r ${
                  billingPeriod === 'yearly' ? 'bg-yellow-500 text-black' : 'bg-gray-700'
                }`}
                onClick={() => setBillingPeriod('yearly')}
              >
                Yearly
              </button>
            </div>

            {/* Plan Cards */}
            <div className="space-y-4">
              {/* Standard Plan */}
              <div className="flex justify-between items-center p-4 rounded-lg bg-white/10">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L9 8.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Standard</h3>
                    <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
                <div className="font-bold">${billingPeriod === 'monthly' ? '1000' : '594'}/month</div>
              </div>

              {/* Premium Plan */}
              <div className="flex justify-between items-center p-4 rounded-lg bg-white/10">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L9 8.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Premium</h3>
                    <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
                <div className="font-bold">${billingPeriod === 'monthly' ? '1800' : '1794'}/month</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Continue
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/terms" className="text-gray-400 hover:text-white">Term & Conditions</a>
            <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
}