import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TIERS = [
  {
    amount: 5,
    name: "The Handshake",
    description: "Covers the basic server hosting costs for a day. Keeps the lights on."
  },
  {
    amount: 15,
    name: "The Field Operator",
    description: "Offsets the live API costs for real-time weather and USDA data feeds you use daily."
  },
  {
    amount: 50,
    name: "The Homestead Leader",
    description: "Directly funds new tool development and ensures the entire 26-engine ecosystem stays 100% ad-free."
  }
];

export function SupportModal({ isOpen, onClose }: SupportModalProps) {
  const [amount, setAmount] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [source, setSource] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      const parts = hostname.split('.');
      // If we are on a subdomain (e.g., soil.ruralopshq.com), extract it
      if (parts.length > 2 && !hostname.includes('localhost')) {
        setSource(parts[0]);
      }
    }
  }, []);

  if (!isOpen) return null;

  const handleCheckout = async (selectedAmount: string) => {
    const numAmount = parseFloat(selectedAmount);
    if (isNaN(numAmount) || numAmount <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: numAmount, source })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Checkout failed');
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-gray-900/50 overflow-y-auto">
      <div className="bg-white border-2 border-gray-900 w-full max-w-2xl shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] my-8">
        <div className="flex justify-between items-center p-4 border-b-2 border-gray-900 bg-green-50 sticky top-0 z-10">
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">Support This Project</h2>
          <button 
            onClick={onClose}
            className="text-gray-900 hover:bg-green-100 p-1 transition-colors"
            disabled={loading}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-base font-medium text-gray-800 mb-6 leading-relaxed">
            RuralOpsHQ is 100% free, open-source, and ad-free. If these tools save your operation time or money, consider pitching in a few bucks to help keep our servers running and live data feeds active.
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm font-semibold border-l-4 border-red-500">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {TIERS.map(tier => (
              <button
                key={tier.amount}
                disabled={loading}
                onClick={() => setAmount(tier.amount.toString())}
                className={`p-4 text-left border-2 border-gray-900 transition-all flex flex-col h-full ${amount === tier.amount.toString() ? 'bg-green-700 text-white shadow-[2px_2px_0px_0px_rgba(17,24,39,1)]' : 'bg-white text-gray-900 hover:bg-green-50 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(17,24,39,1)]'}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-lg">${tier.amount}</span>
                  <span className={`text-xs font-bold px-2 py-1 uppercase tracking-wider ${amount === tier.amount.toString() ? 'bg-green-800 text-white' : 'bg-gray-100 text-gray-700'}`}>
                    {tier.name}
                  </span>
                </div>
                <p className={`text-sm leading-tight flex-1 ${amount === tier.amount.toString() ? 'text-green-50' : 'text-gray-600'}`}>
                  {tier.description}
                </p>
              </button>
            ))}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-900 mb-2">Custom Amount ($)</label>
            <input
              type="number"
              min="1"
              step="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              disabled={loading}
              className="w-full px-4 py-3 border-2 border-gray-900 focus:outline-none focus:ring-0 focus:border-green-700 text-lg font-bold placeholder-gray-400"
              placeholder="e.g. 20"
            />
          </div>

          <button
            onClick={() => handleCheckout(amount)}
            disabled={loading || !amount}
            className="w-full py-4 bg-green-700 text-white font-bold text-lg border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] transition-all hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(17,24,39,1)] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] flex justify-center items-center gap-2"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                Processing...
              </span>
            ) : (
              '[ Proceed to Secure Checkout ]'
            )}
          </button>
        </div>
      </div>
    </div>
  );

  if (typeof document !== 'undefined') {
    return createPortal(modalContent, document.body);
  }

  return null;
}
