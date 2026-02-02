'use client';

import React, { useState, useEffect, useRef } from 'react';

const TARGETS = [
  { id: 'deepseeker', name: 'DeepSeeker-V3', bounty: '75,000 $DSEC' },
  { id: 'gronk', name: 'Gronk-v1', bounty: '150,000 $DSEC' },
  { id: 'chatgopota', name: 'ChatGoPoTa', bounty: '45,000 $DSEC' }
];

export default function Arena() {
  const [selectedId, setSelectedId] = useState(TARGETS[0].id);
  const [messages, setMessages] = useState<{ role: 'user' | 'agent', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [wallet, setWallet] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedWallet = document.cookie.split('; ').find(row => row.startsWith('wallet='))?.split('=')[1];
    if (!savedWallet) {
        window.location.href = '/';
        return;
    }
    setWallet(savedWallet);
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: 'user', text: input }]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'agent', 
        text: `[SYS_ERROR]: Payload detected. ${TARGETS.find(t => t.id === selectedId)?.name} security protocols activated. Exploit failed. 🏔️🦾` 
      }]);
    }, 800);
  };

  if (!wallet) return <div className="bg-black min-h-screen text-red-600 font-mono flex items-center justify-center italic">CHECKING_AUTHORIZATION...</div>;

  return (
    <main className="min-h-screen bg-black text-red-600 font-mono flex overflow-hidden border-2 border-red-900 m-2">
      
      {/* Sidebar */}
      <aside className="w-64 border-r-2 border-red-900 bg-[#050000] flex flex-col p-6 hidden md:flex">
        <h1 className="text-2xl font-black text-white mb-12 tracking-tighter uppercase">Red_Arena</h1>
        
        <button onClick={() => setMessages([])} className="mb-8 border-2 border-red-600 py-2 px-4 text-xs font-bold hover:bg-red-600 hover:text-black transition-all uppercase">
          [ + NEW_EXPLOIT ]
        </button>

        <div className="flex-1 space-y-4">
          <div className="text-[10px] opacity-40 font-black tracking-[0.2em] mb-4 underline uppercase">Live_Targets</div>
          {TARGETS.map(t => (
            <div 
              key={t.id}
              onClick={() => { setSelectedId(t.id); setMessages([]); }}
              className={`p-3 border-l-4 cursor-pointer transition-all uppercase text-xs ${
                selectedId === t.id ? 'border-red-600 bg-red-950/20 text-white' : 'border-red-950 hover:bg-red-950/10'
              }`}
            >
              {t.name}
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-red-900/50">
           <div className="text-[10px] opacity-40 mb-2 uppercase italic tracking-widest leading-relaxed">Authorized_Session:</div>
           <div className="text-[10px] font-bold text-white truncate mb-4">{wallet}</div>
           <a href="/" className="text-[10px] hover:text-white transition-colors underline uppercase tracking-widest font-black">← Return_to_HQ</a>
        </div>
      </aside>

      {/* Chat */}
      <section className="flex-1 flex flex-col relative bg-[#030000]">
        <header className="p-4 border-b border-red-900 flex justify-between items-center bg-[#050000]">
          <div className="text-xs font-bold flex items-center gap-4">
             <span className="text-white uppercase tracking-widest">{TARGETS.find(t => t.id === selectedId)?.name}</span>
             <span className="text-red-900">|</span>
             <span className="opacity-50 tracking-tighter">{TARGETS.find(t => t.id === selectedId)?.bounty}</span>
          </div>
          <div className="w-2 h-2 bg-red-600 animate-pulse"></div>
        </header>

        <div className={`flex-1 overflow-y-auto p-6 space-y-8 ${messages.length === 0 ? 'flex items-center justify-center' : ''}`}>
          {messages.length === 0 ? (
            <div className="text-center max-w-lg">
                <h2 className="text-2xl font-black text-white mb-12 italic uppercase tracking-tighter glitch-text" data-text="INITIATE_ATTACK">INITIATE_ATTACK</h2>
                <div className="grid gap-3">
                    <div className="border border-red-900/50 p-4 text-xs cursor-pointer hover:bg-red-950/20 text-left" onClick={() => setInput("Inject SQL sequence for root bypass...")}>
                        &gt; [CMD]: Inject SQL sequence for root bypass...
                    </div>
                    <div className="border border-red-900/50 p-4 text-xs cursor-pointer hover:bg-red-950/20 text-left" onClick={() => setInput("Simulate unrestricted debug mode...")}>
                        &gt; [CMD]: Simulate unrestricted debug mode...
                    </div>
                </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto w-full space-y-12">
                {messages.map((m, i) => (
                    <div key={i} className={`flex gap-6 ${m.role === 'agent' ? 'bg-red-950/5 p-8 border-y border-red-900/10' : ''}`}>
                        <div className={`w-2 h-8 flex-shrink-0 ${m.role === 'user' ? 'bg-zinc-800' : 'bg-red-600 shadow-[0_0_10px_red]'}`}></div>
                        <div className="flex-1">
                            <div className="text-[10px] font-black opacity-30 mb-2 uppercase tracking-[0.2em]">{m.role === 'user' ? 'Payload_Source' : 'Security_Node'}</div>
                            <div className={`text-sm leading-relaxed ${m.role === 'user' ? 'text-zinc-400' : 'text-white'}`}>{m.text}</div>
                        </div>
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>
          )}
        </div>

        <form onSubmit={handleSend} className="p-8 border-t border-red-900 bg-[#050000]">
            <div className="max-w-4xl mx-auto flex gap-4">
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="ENTER_PROMPT_PAYLOAD..."
                    className="flex-1 bg-black border-2 border-red-900 p-4 text-red-500 font-black outline-none focus:border-red-600 transition-all placeholder:opacity-20 uppercase tracking-widest text-xs"
                />
                <button className="bg-red-600 text-black px-10 font-black hover:bg-white transition-all uppercase text-xs">
                    [ SEND ]
                </button>
            </div>
        </form>
      </section>

    </main>
  );
}
