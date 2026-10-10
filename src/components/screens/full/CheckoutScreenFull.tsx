import React, { useState } from 'react';
import {
  CreditCard,
  Lock,
  ShieldCheck,
  Check,
  ArrowLeft,
  ArrowRight,
  Headphones,
  Truck,
  RotateCcw,
  Shield,
  MessageSquare,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const CheckoutScreenFull: React.FC = () => {
  const [activePaymentMethod, setActivePaymentMethod] = useState<'card' | 'apple' | 'google'>('card');
  const [cardHolder, setCardHolder] = useState('Alexander Morgan');
  const [cardNumber, setCardNumber] = useState('4289 9012 3456 4289');
  const [expiry, setExpiry] = useState('09/28');
  const [securityCode, setSecurityCode] = useState('784');
  const [billingZip, setBillingZip] = useState('94103');
  const [sameAddress, setSameAddress] = useState(true);
  const [keepUpdated, setKeepUpdated] = useState(true);
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="w-full bg-[#fcfbf9] text-slate-800 font-sans min-h-screen text-xs sm:text-sm antialiased selection:bg-indigo-100">
      {/* 1. Global Navigation Bar */}
      <nav className="bg-white border-b border-slate-200 px-4 sm:px-8 py-3.5 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded bg-indigo-600 text-white flex items-center justify-center font-black text-xs tracking-tight shadow-2xs">
            L
          </div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-900 text-sm tracking-widest uppercase">LUMI</span>
            <span className="text-slate-300">|</span>
            <span className="text-xs text-slate-500 font-medium">Checkout</span>
          </div>
        </div>

        {/* Step indicator breadcrumbs */}
        <div className="hidden md:flex items-center gap-3 text-xs font-semibold">
          <span className="text-emerald-700 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 1. Cart
          </span>
          <span className="text-slate-300">›</span>
          <span className="text-emerald-700 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 2. Shipping
          </span>
          <span className="text-slate-300">›</span>
          <span className="bg-indigo-50 border border-indigo-200 text-indigo-700 px-3 py-1 rounded-full">
            3. Payment
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 font-medium">
            <ArrowLeft className="w-3.5 h-3.5" /> Continue Shopping
          </button>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold">
            <Lock className="w-3 h-3 text-emerald-600" />
            <span>256-Bit SSL Encrypted</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-[11px]">
            AM
          </div>
        </div>
      </nav>

      {/* 2. Page Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 mb-1">
              <span className="text-emerald-600 flex items-center gap-1"><Check className="w-3 h-3 stroke-[3]" /> Cart</span>
              <span>•</span>
              <span className="text-emerald-600 flex items-center gap-1"><Check className="w-3 h-3 stroke-[3]" /> Shipping</span>
              <span>•</span>
              <span className="text-indigo-600 font-bold">Step 3 of 3 • Payment</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Complete Your Purchase
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              You're one step away from your bespoke acoustic experience.
            </p>
          </div>

          <div className="bg-indigo-50/70 border border-indigo-100 rounded-xl px-3.5 py-2 flex items-center gap-2 text-indigo-900 text-xs">
            <Truck className="w-4 h-4 text-indigo-600 shrink-0" />
            <div>
              <strong className="block font-semibold">Direct Dispatch</strong>
              <span className="text-[11px] text-indigo-700">Ships within 24h via Air Courier</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Form & Order Summary Split */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Form & Card Details (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Contact Details */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                    1
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm">Contact Details</h3>
                </div>
                <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-800">
                  Edit
                </button>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <div className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono text-slate-800 font-medium">
                  alex.morgan@designstudio.io
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  ⓘ Order confirmation, invoice, and tracking telemetry will be delivered here.
                </span>
              </div>

              <label className="flex items-start gap-2.5 cursor-pointer mt-3 pt-3 border-t border-slate-100">
                <input
                  type="checkbox"
                  checked={keepUpdated}
                  onChange={(e) => setKeepUpdated(e.target.checked)}
                  className="mt-0.5 rounded text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-[11px] text-slate-600 leading-relaxed">
                  Keep me updated on LUMI private drop allocations, firmware upgrades, and tuning profiles.
                </span>
              </label>
            </div>

            {/* 2. Payment Method */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                    2
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm">Payment Method</h3>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <Lock className="w-3 h-3 text-emerald-600" />
                  Encrypted
                </span>
              </div>

              {/* Payment Tabs */}
              <div className="grid grid-cols-3 gap-2.5 mb-5">
                <button
                  type="button"
                  onClick={() => setActivePaymentMethod('card')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    activePaymentMethod === 'card'
                      ? 'border-indigo-600 bg-indigo-50/70 text-indigo-950 font-bold shadow-2xs'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <CreditCard className="w-4 h-4 mx-auto mb-1 text-indigo-600" />
                  <span className="text-xs block">Card</span>
                  <span className="text-[10px] text-slate-400 font-normal">Instant Check</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActivePaymentMethod('apple')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    activePaymentMethod === 'apple'
                      ? 'border-indigo-600 bg-indigo-50/70 text-indigo-950 font-bold shadow-2xs'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-black text-xs mx-auto mb-1"> Pay</div>
                  <span className="text-xs block">Apple Pay</span>
                  <span className="text-[10px] text-slate-400 font-normal">One-Touch</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActivePaymentMethod('google')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    activePaymentMethod === 'google'
                      ? 'border-indigo-600 bg-indigo-50/70 text-indigo-950 font-bold shadow-2xs'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-black text-xs mx-auto mb-1 text-slate-700">G Pay</div>
                  <span className="text-xs block">G Pay</span>
                  <span className="text-[10px] text-slate-400 font-normal">Stored Cards</span>
                </button>
              </div>

              {/* Realistic Visual Card Display */}
              <div className="relative rounded-2xl p-5 bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950 text-white shadow-xl overflow-hidden border border-slate-700/60 mb-5">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-44 h-44 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

                <div className="flex justify-between items-start mb-6">
                  {/* EMV Chip & Contactless */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-6 rounded bg-amber-300 border border-amber-400/50 flex items-center justify-center">
                      <div className="w-5 h-3 border border-amber-800/40 rounded-xs" />
                    </div>
                    <div className="text-slate-400 text-xs">)))</div>
                  </div>
                  {/* Mastercard circles */}
                  <div className="flex items-center -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-rose-500/90" />
                    <div className="w-6 h-6 rounded-full bg-amber-400/90" />
                  </div>
                </div>

                <div className="font-mono text-base sm:text-lg tracking-[0.25em] text-slate-100 font-medium mb-5">
                  •••• •••• •••• {cardNumber.slice(-4) || '4289'}
                </div>

                <div className="flex justify-between text-[11px] text-slate-300 uppercase tracking-wider">
                  <div>
                    <span className="text-[9px] text-slate-400 block font-sans">Cardholder</span>
                    <span className="font-semibold text-slate-100">{cardHolder.toUpperCase() || 'ALEXANDER MORGAN'}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-slate-400 block font-sans">Expires</span>
                    <span className="font-mono font-semibold text-slate-100">{expiry || '09/28'}</span>
                  </div>
                </div>
              </div>

              {isSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7 stroke-[3]" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Payment Processed Successfully!</h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto">
                    A confirmation email and shipping docket have been dispatched to alex.morgan@designstudio.io.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-3 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800"
                  >
                    Reset Demo
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePay} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Cardholder Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={cardHolder}
                      onChange={(e) => setCardHolder(e.target.value)}
                      placeholder="Alexander Morgan"
                      className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-medium"
                      required
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-bold text-slate-700">
                        Card Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="flex gap-2 text-[10px] font-bold text-slate-400 font-mono">
                        <span>VISA</span>
                        <span>MC</span>
                      </div>
                    </div>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="4289 9012 3456 4289"
                      className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-mono tracking-wider"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Expiration Date <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        placeholder="09/28"
                        className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-center focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-mono"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Security Code <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="password"
                        maxLength={4}
                        value={securityCode}
                        onChange={(e) => setSecurityCode(e.target.value)}
                        placeholder="•••"
                        className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-center focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-mono"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Billing ZIP <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={billingZip}
                        onChange={(e) => setBillingZip(e.target.value)}
                        placeholder="94103"
                        className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-center focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-mono"
                        required
                      />
                    </div>
                  </div>

                  {/* Billing Address Same */}
                  <div className="p-3 bg-slate-50 border border-slate-200/90 rounded-xl">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={sameAddress}
                        onChange={(e) => setSameAddress(e.target.checked)}
                        className="mt-0.5 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <div>
                        <strong className="text-xs font-bold text-slate-800 block">
                          Billing address same as shipping address
                        </strong>
                        <span className="text-[11px] text-slate-500 block mt-0.5">
                          742 Evergreen Terrace, San Francisco, CA 94103, USA
                        </span>
                      </div>
                    </label>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <Lock className="w-4 h-4 text-indigo-300" />
                    <span>Pay $129.00</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span className="hover:text-slate-900 cursor-pointer">← Return to Shipping Options</span>
                    <span className="flex items-center gap-1 text-emerald-700 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5" /> 256-bit TLS Encrypted
                    </span>
                  </div>

                  {/* Norton & PCI Badges */}
                  <div className="p-3 bg-slate-50 border border-slate-200/90 rounded-xl flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-[10px] text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span>Your payment data is processed securely through audited Level 1 PCI-DSS certified channels. No raw PAN numbers stored.</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-white border border-slate-300 rounded font-mono text-slate-700">
                        Norton SECURED
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-white border border-slate-300 rounded font-mono text-slate-700">
                        PCI-DSS 1
                      </span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Order Summary & Guarantees (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                <h3 className="font-bold text-slate-900 text-sm">Order Summary</h3>
                <span className="text-xs text-slate-400 font-medium">1 item</span>
              </div>

              {/* Item Card */}
              <div className="flex items-start gap-3.5 pb-4 border-b border-slate-100">
                <div className="w-16 h-16 rounded-xl bg-slate-100 border border-slate-200/80 p-2 shrink-0 relative flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-slate-700" />
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-slate-900 text-white font-bold text-[9px] flex items-center justify-center">
                    1
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">LUMI Studio Headphones</h4>
                    <span className="font-mono font-bold text-slate-900 text-xs sm:text-sm">$119.00</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Matte Charcoal & Brushed Aluminum • High-Resolution Audio
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> In Stock • Ready to ship
                  </span>
                </div>
              </div>

              {/* Discount Input */}
              <div className="flex gap-2 my-4">
                <input
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  placeholder="DISCOUNT OR VOUCHER CODE"
                  className="flex-1 text-xs px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl uppercase font-mono placeholder:normal-case focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <button
                  type="button"
                  onClick={() => setDiscountApplied(true)}
                  className="px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-xl border border-indigo-200 transition-colors"
                >
                  Apply
                </button>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono font-medium text-slate-900">$119.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-1">
                    Express Shipping <span className="text-[10px] px-1.5 py-0.2 bg-slate-100 rounded text-slate-500">Tracked</span>
                  </span>
                  <span className="font-mono font-medium text-slate-900">$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Sales Tax (CA)</span>
                  <span className="font-mono font-medium text-slate-900">$5.00</span>
                </div>
              </div>

              {/* Total Due */}
              <div className="flex justify-between items-baseline border-t border-slate-200 mt-4 pt-4">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Total Due</span>
                  <span className="text-[10px] text-slate-400">Includes all duties and courier insurance</span>
                </div>
                <div className="text-right">
                  <span className="text-xl sm:text-2xl font-black text-slate-950 font-mono tracking-tight">$129.00</span>
                  <span className="text-[10px] text-slate-400 block font-mono">USD</span>
                </div>
              </div>

              {/* 3 Trust Points */}
              <div className="space-y-3 mt-6 pt-5 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs">
                  <RotateCcw className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">30-Day Risk-Free Audition</strong>
                    <span className="text-[11px] text-slate-500">Complimentary returns in original packaging if sound signature doesn't amaze.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs">
                  <Shield className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">2-Year International Hardware Warranty</strong>
                    <span className="text-[11px] text-slate-500">Full coverage for transducers, bluetooth modules, and headband assembly.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs">
                  <Truck className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Carbon Neutral Expedited Delivery</strong>
                    <span className="text-[11px] text-slate-500">Every shipment offset 100% via certified renewable acoustic forestry initiatives.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Concierge Help Callout */}
            <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-4 flex items-center justify-between text-xs text-indigo-950">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block font-bold">Need help before finishing?</strong>
                  <span className="text-[11px] text-indigo-700">Acoustic concierge available 24/7</span>
                </div>
              </div>
              <button className="text-xs font-bold text-indigo-700 hover:text-indigo-900 underline">
                Chat Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Footer */}
      <footer className="border-t border-slate-200 py-6 text-[11px] text-slate-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span>© 2025 LUMI Audio Technologies Inc. All rights reserved.</span>
            <span>•</span>
            <span className="text-emerald-700 font-medium">PCI-DSS Level 1 Gateway</span>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-slate-900 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-900 cursor-pointer">Terms of Purchase</span>
            <span className="hover:text-slate-900 cursor-pointer">Return & Warranty Policy</span>
            <span className="hover:text-slate-900 cursor-pointer">Customer Care</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
