"use client";
import { useState } from 'react';
import Link from 'next/link';
export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url('/images/background.png')`, // Replace with your actual image path
      }}
    >
      <div className="backdrop-blur-sm bg-black/60 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-4">
            Flexible <span className="text-yellow-500">Plans</span>
          </h1>
          <p className="text-center mb-8">
            Choose a plan that works best for you & your team
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-8">
  <div className="inline-flex bg-[#1D3653] p-2 rounded-3xl">
    <button
      className={`px-6 py-2 rounded-3xl font-medium ${
        billingPeriod === 'monthly' ? 'bg-yellow-500 text-black' : 'bg-[#1D3653]'
      }`}
      onClick={() => setBillingPeriod('monthly')}
    >
      Monthly
    </button>
    <button
      className={`px-6 py-2 rounded-3xl font-medium ${
        billingPeriod === 'yearly' ? 'bg-yellow-500 text-black' : 'bg-[#1D3653]'
      }`}
      onClick={() => setBillingPeriod('yearly')}
    >
      Yearly (Save 60%)
    </button>
  </div>
</div>
          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Plan */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Standard</h2>
              <p className="text-gray-200 mb-6 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <div className="text-4xl font-bold mb-2">${billingPeriod === 'monthly' ? '99' : '594'}</div>
              <p className="text-gray-300 mb-6">Per Month</p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-200 mb-6">
                {Array(5)
                  .fill("Lorem ipsum")
                  .map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
              </ul>
              <Link href="/order-summary">
                <button className="w-full bg-[#1D3653] hover:bg-blue-700 py-2 rounded-3xl text-white font-medium">
                  Choose Plan
                </button>
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="bg-white/20 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Premium (Recommended)</h2>
              <p className="text-gray-200 mb-6 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <div className="text-4xl font-bold mb-2">${billingPeriod === 'monthly' ? '299' : '1794'}</div>
              <p className="text-gray-300 mb-6">Per Month</p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-200 mb-6">
                {Array(7)
                  .fill("Lorem ipsum")
                  .map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
              </ul>
              <Link href="/order-summary">
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 py-2 rounded-3xl text-white font-bold">
                  Choose Plan
                </button>
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
              <p className="text-gray-200 mb-6 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <div className="text-4xl font-bold mb-2">Custom Plan</div>
              <p className="text-gray-300 mb-6">Contact us for pricing</p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-200 mb-6">
                {Array(5)
                  .fill("Lorem ipsum")
                  .map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
              </ul>
              <Link href="/contactUs">
                <button className="w-full bg-[#1D3653] hover:bg-blue-700 py-2 rounded-3xl text-white font-medium">
            Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}