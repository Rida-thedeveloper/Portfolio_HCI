import React, { useState } from 'react';
import { CreditCard, Lock, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface CheckoutScreenProps {
  interactive?: boolean;
}

export const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ interactive = false }) => {
  const [cardNumber, setCardNumber] = useState('4242 8821 9031 5542');
  const [cardHolder, setCardHolder] = useState('RIDA FATIMA');
  const [expiry, setExpiry] = useState('08/28');
  const [cvv, setCvv] = useState('784');
  const [isPaid, setIsPaid] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPaid(true);
  };

  return (
    <div className="w-full h-full bg-[#faf9f8] text-slate-800 rounded-xl overflow-hidden border border-slate-200/90 shadow-sm flex flex-col font-sans select-none">
      {/* Top Header */}
      <div className="bg-white border-b border-slate-200 px-4 py-2.5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 font-bold tracking-tight text-slate-900">
          <div className="w-5 h-5 rounded bg-indigo-600 text-white flex items-center justify-center font-black text-[10px]">
            L
          </div>
          <span>LUMI</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
          <Lock className="w-3 h-3 text-emerald-600" />
          <span>256-Bit SSL Checkout</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        {isPaid ? (
          <div className="my-auto py-8 text-center animate-in fade-in duration-300">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <h4 className="text-base font-bold text-slate-900">Payment Authorized</h4>
            <p className="text-xs text-slate-600 max-w-xs mx-auto mt-1">
              $129.00 billed to card ending in <span className="font-mono font-semibold">{cardNumber.slice(-4)}</span>. Receipt sent to your email.
            </p>
            {interactive && (
              <button
                onClick={() => setIsPaid(false)}
                className="mt-4 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                Simulate Another Transaction
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">Secure Checkout</span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">Complete Your Purchase</h3>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block">Total Due</span>
                <span className="text-sm font-bold text-slate-900 font-mono">$129.00</span>
              </div>
            </div>

            {/* Visual Credit Card Preview */}
            <div className="relative rounded-xl p-4 bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-800 text-white shadow-md overflow-hidden border border-slate-700/40">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-28 h-28 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-5 rounded bg-amber-400/80 border border-amber-300/40 flex items-center justify-center">
                    <div className="w-4 h-2.5 border border-amber-900/40 rounded-sm" />
                  </div>
                  <CreditCard className="w-4 h-4 text-indigo-300" />
                </div>
                <span className="text-[11px] font-bold tracking-widest text-indigo-200 uppercase">LUMI PREMIUM</span>
              </div>

              <div className="font-mono text-sm sm:text-base tracking-widest text-slate-100 font-medium mb-3">
                {cardNumber || '•••• •••• •••• ••••'}
              </div>

              <div className="flex justify-between text-[10px] text-slate-300 uppercase tracking-wider">
                <div>
                  <span className="text-[8px] text-slate-400 block font-sans">Cardholder</span>
                  <span className="font-semibold text-slate-100 truncate max-w-[140px] block">
                    {cardHolder || 'CARDHOLDER NAME'}
                  </span>
                </div>
                <div>
                  <span className="text-[8px] text-slate-400 block font-sans">Expires</span>
                  <span className="font-mono font-semibold text-slate-100">{expiry || 'MM/YY'}</span>
                </div>
              </div>
            </div>

            {/* Inputs */}
            <form onSubmit={handlePay} className="space-y-2.5">
              <div>
                <label className="block text-[10px] font-semibold text-slate-600 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  disabled={!interactive}
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="4242 8821 9031 5542"
                  className="w-full text-xs px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-900 font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-semibold text-slate-600 mb-1">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    disabled={!interactive}
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
                    placeholder="RIDA FATIMA"
                    className="w-full text-xs px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-900 uppercase focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                  />
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-600 mb-1">
                      Expiry
                    </label>
                    <input
                      type="text"
                      disabled={!interactive}
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      placeholder="08/28"
                      className="w-full text-xs px-2 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-900 font-mono text-center focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-600 mb-1">
                      CVV
                    </label>
                    <input
                      type="password"
                      disabled={!interactive}
                      value={cvv}
                      maxLength={4}
                      onChange={(e) => setCvv(e.target.value)}
                      placeholder="784"
                      className="w-full text-xs px-2 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-900 font-mono text-center focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                    />
                  </div>
                </div>
              </div>

              {/* Order breakdown mini pill */}
              <div className="bg-slate-100/80 rounded-lg p-2 text-[11px] flex justify-between items-center text-slate-600">
                <span>Subtotal: $120.00 + Shipping: $9.00</span>
                <span className="font-semibold text-slate-900">Total: $129.00</span>
              </div>

              <button
                type="submit"
                disabled={!interactive}
                className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-all"
              >
                <Lock className="w-3.5 h-3.5 text-indigo-300" />
                <span>Pay $129.00 USD</span>
              </button>
            </form>
          </div>
        )}

        <div className="mt-3 pt-2 border-t border-slate-200/80 flex items-center justify-between text-[10px] text-slate-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            PCI-DSS Level 1 Encryption
          </span>
          <span className="font-mono text-[9px] text-slate-400">#002 CHECKOUT UX</span>
        </div>
      </div>
    </div>
  );
};
