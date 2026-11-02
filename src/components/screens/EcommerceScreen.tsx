import React, { useState } from 'react';
import { ShoppingBag, Eye, Heart, ArrowRight, Check } from 'lucide-react';

interface EcommerceScreenProps {
  interactive?: boolean;
}

export const EcommerceScreen: React.FC<EcommerceScreenProps> = ({ interactive = true }) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [inCart, setInCart] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setInCart(true);
    setTimeout(() => setInCart(false), 2000);
  };

  return (
    <div className="w-full h-full bg-[#fcf9f4] text-[#1c1c19] font-sans flex flex-col justify-between p-4 sm:p-5 select-none overflow-hidden relative border border-[#e8e2d9]">
      {/* Top Editorial Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-[#e8e2d9] z-10">
        <div className="flex items-center gap-2">
          <span className="font-serif text-sm tracking-widest font-semibold uppercase text-[#191919]">
            ÉLAN
          </span>
          <span className="text-[10px] tracking-wider uppercase text-[#9e836a] font-mono">
            Collection N°08
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              if (interactive) {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }
            }}
            className="w-7 h-7 flex items-center justify-center border border-[#e8e2d9] hover:border-[#191919] transition-colors bg-white/60"
          >
            <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-[#191919] text-[#191919]' : 'text-[#747878]'}`} />
          </button>
          <div className="flex items-center gap-1 text-[11px] font-mono font-medium border border-[#e8e2d9] px-2 py-0.5 bg-white/60">
            <ShoppingBag className="w-3 h-3 text-[#9e836a]" />
            <span>{inCart ? '1' : '0'}</span>
          </div>
        </div>
      </div>

      {/* Main Product Showcase Card */}
      <div className="my-auto py-2 grid grid-cols-12 gap-3 items-center z-10">
        {/* Left: Product Visual Thumbnail */}
        <div className="col-span-5 relative aspect-[3/4] bg-[#f5f0ea] border border-[#e8e2d9] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80"
            alt="Double-Faced Wool Trench"
            className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-700"
          />
          <span className="absolute top-1.5 left-1.5 text-[8px] font-mono tracking-widest uppercase bg-[#191919] text-white px-1.5 py-0.5">
            Look 04
          </span>
        </div>

        {/* Right: Architectural Product Info */}
        <div className="col-span-7 flex flex-col justify-between space-y-2">
          <div>
            <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#9e836a] block">
              Atelier Tailoring
            </span>
            <h4 className="font-serif text-sm sm:text-base font-normal tracking-tight text-[#191919] leading-tight mt-0.5">
              Double-Faced Wool Coat
            </h4>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xs sm:text-sm font-mono font-bold text-[#191919]">
                $1,480
              </span>
              <span className="text-[10px] font-mono text-[#9e836a] uppercase">
                USD · Tax incl.
              </span>
            </div>
          </div>

          {/* Size Selectors (Zero radius) */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[9px] font-mono uppercase text-[#747878]">
              <span>Select Size</span>
              <span className="underline decoration-dotted cursor-pointer">Guide</span>
            </div>
            <div className="flex gap-1">
              {['XS', 'S', 'M', 'L'].map((sz) => (
                <button
                  key={sz}
                  onClick={(e) => {
                    if (interactive) {
                      e.stopPropagation();
                      setSelectedSize(sz);
                    }
                  }}
                  className={`w-7 h-6 text-[10px] font-mono font-semibold transition-all border ${
                    selectedSize === sz
                      ? 'bg-[#191919] text-white border-[#191919]'
                      : 'bg-white/80 text-[#191919] border-[#e8e2d9] hover:border-[#191919]'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Bag Button */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-2 px-3 text-[10px] font-mono tracking-[0.15em] uppercase font-bold flex items-center justify-center gap-1.5 transition-all ${
              inCart
                ? 'bg-[#725a43] text-white border border-[#725a43]'
                : 'bg-[#191919] hover:bg-[#2d2d2d] text-white border border-[#191919]'
            }`}
          >
            {inCart ? (
              <>
                <Check className="w-3 h-3" />
                <span>Added to Atelier Bag</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3 h-3" />
                <span>Acquire Garment</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Bottom Editorial Strip */}
      <div className="pt-2 border-t border-[#e8e2d9] flex items-center justify-between text-[9px] font-mono text-[#747878] z-10">
        <span className="tracking-widest uppercase">Pure Merino & Raw Silk</span>
        <span className="text-[#9e836a] uppercase">Complimentary Global Freight</span>
      </div>
    </div>
  );
};
