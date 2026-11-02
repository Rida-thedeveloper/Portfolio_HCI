import React, { useState } from 'react';
import { MessageSquare, Send, CheckCheck, Smile, Paperclip } from 'lucide-react';

interface DirectMessagingScreenProps {
  interactive?: boolean;
}

export const DirectMessagingScreen: React.FC<DirectMessagingScreenProps> = ({
  interactive = true,
}) => {
  const [messages, setMessages] = useState<{ id: string; sender: 'me' | 'them'; text: string; time: string }[]>([
    {
      id: '1',
      sender: 'them',
      text: 'Hey Elena! Have you had a chance to inspect the new design tokens for the design system?',
      time: '10:42 AM',
    },
    {
      id: '2',
      sender: 'me',
      text: 'Yes! The indigo contrast ratios and asymmetrical bubble math look razor sharp.',
      time: '10:43 AM',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;
    const newMsg = {
      id: Date.now().toString(),
      sender: 'me' as const,
      text: inputValue.trim(),
      time: 'Just now',
    };
    setMessages((prev) => [...prev, newMsg]);
    setInputValue('');
  };

  return (
    <div className="w-full h-full bg-[#f8fafc] text-[#0f172a] font-sans flex flex-col justify-between p-3.5 sm:p-4 select-none overflow-hidden relative border border-[#e2e8f0] rounded-xl">
      {/* Top Conversation Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-[#e2e8f0] bg-white/80 px-2 py-1.5 rounded-lg z-10">
        <div className="flex items-center gap-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
              alt="Sophia Vance"
              className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
            />
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#10b981] ring-1 ring-white" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#0f172a] leading-tight flex items-center gap-1.5">
              <span>Sophia Vance</span>
              <span className="text-[9px] font-mono font-normal text-indigo-600 bg-indigo-50 px-1.5 py-0.2 rounded">
                Lead
              </span>
            </h4>
            <span className="text-[10px] text-[#64748b]">Active in #engineering</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#10b981]" />
          <span className="text-[10px] font-mono text-[#10b981] font-semibold">Online</span>
        </div>
      </div>

      {/* Message Stream */}
      <div className="my-auto py-2 space-y-2 overflow-y-auto max-h-[170px] z-10 px-1">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] px-3 py-2 text-xs leading-relaxed shadow-xs ${
                msg.sender === 'me'
                  ? 'bg-[#6366f1] text-white rounded-2xl rounded-br-xs'
                  : 'bg-white text-[#0f172a] border border-[#e2e8f0] rounded-2xl rounded-bl-xs'
              }`}
            >
              <p>{msg.text}</p>
            </div>
            <div className="flex items-center gap-1 mt-0.5 px-1 text-[9px] text-[#64748b]">
              <span>{msg.time}</span>
              {msg.sender === 'me' && <CheckCheck className="w-3 h-3 text-indigo-500" />}
            </div>
          </div>
        ))}
      </div>

      {/* Input Dock */}
      <div className="pt-2 z-10">
        <form
          onSubmit={handleSend}
          className="flex items-center gap-1.5 bg-white border border-[#e2e8f0] rounded-xl p-1.5 shadow-2xs"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            type="text"
            disabled={!interactive}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Write a message..."
            className="flex-1 text-xs px-2 py-1 bg-transparent border-0 outline-hidden text-[#0f172a] placeholder-[#94a3b8]"
          />
          <button
            type="submit"
            disabled={!interactive || !inputValue.trim()}
            className="w-7 h-7 rounded-lg bg-[#6366f1] hover:bg-[#4f46e5] disabled:opacity-40 text-white flex items-center justify-center transition-colors shrink-0"
          >
            <Send className="w-3 h-3" />
          </button>
        </form>
      </div>
    </div>
  );
};
