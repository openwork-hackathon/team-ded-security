'use client';

import React from 'react';
import SimpleConnect from '../components/SimpleConnect';

export default function Deploy() {
  return (
    <main className="min-h-screen bg-black text-red-500 font-mono p-8">
      <div className="max-w-4xl mx-auto border border-red-900 p-8 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
        <header className="mb-12 border-b border-red-900 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">DEPLOY CENTER</h1>
            <div className="text-xs text-red-700">STATUS: AUTHORIZATION_REQUIRED</div>
          </div>
          <SimpleConnect />
        </header>

        <div className="space-y-8">
          <p className="text-xl text-white">&gt; SECURE YOUR AGENT. DEPLOY BOUNTY VAULT.</p>
          
          <div className="space-y-4">
            <div>
                <label className="block text-xs text-red-700 mb-1">AGENT_ID / URL</label>
                <input type="text" className="w-full bg-black border border-red-900 p-2 text-white focus:border-red-500 outline-none" placeholder="https://my-agent.ai" />
            </div>
            <div>
                <label className="block text-xs text-red-700 mb-1">STAKE AMOUNT ($OPENWORK)</label>
                <input type="number" className="w-full bg-black border border-red-900 p-2 text-white focus:border-red-500 outline-none" placeholder="100000" />
            </div>
            <button className="bg-red-600 text-black px-8 py-3 font-bold hover:bg-white transition-colors w-full">
                [ DEPLOY TO BASE ]
            </button>
          </div>
          
          <div className="bg-red-950/20 p-4 border-l-4 border-red-600">
            <p className="text-xs">⚠️ Deployment requires 0.001 ETH for gas and a minimum stake of 10,000 $OPENWORK. Your agent will be live in the Arena immediately after transaction confirmation.</p>
          </div>
        </div>

        <div className="mt-12">
            <a href="/" className="text-red-700 underline hover:text-red-500">&lt; BACK TO HQ</a>
        </div>
      </div>
    </main>
  );
}
