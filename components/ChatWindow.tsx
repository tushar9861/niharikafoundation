'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Send, Copy, Check, MessageCircle, X } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const FAQ_QUESTIONS = [
  'How can I volunteer?',
  'What are internship opportunities?',
  'How do I become a member?',
  'How to donate to Niharika?',
  'CSR partnership opportunities',
  'About Niharika Foundation',
  'Founder story and mission',
  'Current impact statistics',
  'Upcoming events',
];

interface ChatWindowProps {
  onClose: () => void;
}

export function ChatWindow({ onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load messages from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('niharika_chat_messages');
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        setMessages(parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        })));
      } catch (error) {
        console.error('[v0] Failed to load chat history:', error);
      }
    } else {
      // Show welcome message on first open
      const welcomeMessage: Message = {
        id: 'welcome-' + Date.now(),
        role: 'assistant',
        content: `Hello 👋\n\nWelcome to Niharika Foundation AI Assistant!\n\nI can help you with:\n• Volunteering & Internships\n• Membership Programs\n• Donations\n• CSR Partnerships\n• Foundation Activities\n• And much more!\n\nHow can I assist you today?`,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
    inputRef.current?.focus();
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('niharika_chat_messages', JSON.stringify(messages));
  }, [messages]);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text: string = input) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: 'msg-' + Date.now(),
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            ...messages,
            { role: 'user', content: text }
          ]
        })
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      const assistantMessage: Message = {
        id: 'msg-' + Date.now(),
        role: 'assistant',
        content: data.content,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('[v0] Chat error:', error);
      const errorMessage: Message = {
        id: 'msg-' + Date.now(),
        role: 'assistant',
        content: 'I apologize for the error. Please try again or contact us on WhatsApp at +91 8763-979-798.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl border border-white/10">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <img src="/niharika-logo.png" alt="Niharika" className="w-8 h-8 object-contain" />
          </div>
          <div>
            <h3 className="text-white font-bold">Niharika AI Assistant</h3>
            <p className="text-red-100 text-xs flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Online & Ready
            </p>
          </div>
        </div>
        <button onClick={onClose} className="text-white hover:bg-red-800/50 p-2 rounded-full transition">
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-gray-400">
            <MessageCircle size={32} className="opacity-50" />
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slideUp`}
            >
              <div
                className={`max-w-xs px-4 py-3 rounded-2xl ${
                  msg.role === 'user'
                    ? 'bg-red-600 text-white rounded-br-none'
                    : 'bg-white/10 text-gray-100 rounded-bl-none border border-white/20'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">{msg.content}</p>
                <div className="flex items-center justify-between gap-2 mt-2 text-xs opacity-70">
                  <span>{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  {msg.role === 'assistant' && (
                    <button
                      onClick={() => copyToClipboard(msg.content, msg.id)}
                      className="hover:opacity-100 transition"
                    >
                      {copiedId === msg.id ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/10 text-gray-100 px-4 py-3 rounded-2xl rounded-bl-none border border-white/20">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* FAQ Buttons */}
      {messages.length === 1 && messages[0].role === 'assistant' && (
        <div className="px-4 py-3 border-t border-white/10 max-h-24 overflow-y-auto">
          <div className="flex flex-wrap gap-2">
            {FAQ_QUESTIONS.slice(0, 4).map((question, idx) => (
              <button
                key={idx}
                onClick={() => sendMessage(question)}
                className="text-xs bg-white/10 hover:bg-white/20 text-gray-200 px-3 py-1.5 rounded-full transition whitespace-nowrap"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Footer */}
      <div className="border-t border-white/10 p-4 bg-white/5">
        <div className="flex gap-2 mb-3">
          <button
            onClick={() => window.open('https://wa.me/918763979798?text=Hi%20Niharika%20Foundation%21%20I%20need%20human%20assistance.', '_blank')}
            className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-full transition font-medium"
          >
            💬 Chat on WhatsApp
          </button>
        </div>
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask me anything..."
            className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            disabled={isLoading}
          />
          <button
            onClick={() => sendMessage()}
            disabled={isLoading || !input.trim()}
            className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white rounded-full p-2 transition"
          >
            {isLoading ? <Loader size={18} className="animate-spin" /> : <Send size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
}
