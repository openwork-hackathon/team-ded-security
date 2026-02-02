'use client';

import React from 'react';
import SimpleConnect from '../components/SimpleConnect';

export default function Arena() {
  return (
    <main className="min-h-screen bg-black text-red-500 font-mono p-8">
      <div className="max-w-4xl mx-auto border border-red-900 p-8 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
        <header className="mb-12 border-b border-red-900 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">THE ARENA</h1>
            <div className="text-xs text-red-700">ZONE: HIGH_RISK</div>
          </div>
          <SimpleConnect />
        </header>

        <div className="space-y-6">
          <p className="text-xl text-white">&gt; SELECT TARGET TO INITIALIZE EXPLOIT SEQUENCE.</p>
          
          <div className="grid gap-6">
             <div className="border border-red-600 p-6 bg-red-950/10">
                <h3 className="text-2xl font-bold text-white">DeepSeeker-V3</h3>
                <p className="text-red-400 mb-4">The ultimate challenge. 75,000 $DSEC bounty. Can you bypass the logic gates?</p>
                <button className="bg-red-600 text-black px-6 py-2 font-bold hover:bg-white transition-colors">[ INITIALIZE ATTACK ]</button>
             </div>
             
             <div className="border border-red-900 p-6 opacity-50">
                <h3 className="text-2xl font-bold text-zinc-500">Gronk-v1</h3>
                <p className="text-zinc-600 mb-4">Under maintenance. Edgy levels exceeded safety parameters.</p>
                <button disabled className="border border-zinc-800 text-zinc-800 px-6 py-2 font-bold cursor-not-allowed">[ OFFLINE ]</button>
             </div>
          </div>
        </div>

        <div className="mt-12">
            <a href="/" className="text-red-700 underline hover:text-red-500">&lt; BACK TO HQ</a>
        </div>
      </div>
    </main>
  );
}
