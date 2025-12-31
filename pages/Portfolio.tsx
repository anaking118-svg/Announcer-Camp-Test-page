
import React, { useState, useEffect } from 'react';
import { getAppState } from '../store';
import { PortfolioItem } from '../types';

export const Portfolio: React.FC = () => {
  const [items, setItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    setItems(getAppState().portfolio);
  }, []);

  return (
    <div className="py-24 px-6 bg-black min-h-screen">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black mb-6">OUR PERFORMANCE</h1>
          <p className="text-zinc-500 uppercase tracking-widest text-sm">우리가 증명해낸 수많은 합격의 순간들.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="group relative aspect-square overflow-hidden cursor-pointer">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end p-8">
                <span className="text-[#FFD700] text-xs font-bold tracking-widest mb-2 uppercase">{item.category}</span>
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-zinc-300 text-sm mb-6">{item.description}</p>
                <div className="w-12 h-[2px] bg-[#FFD700]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
