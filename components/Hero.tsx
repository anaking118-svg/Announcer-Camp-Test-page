
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-black">
      {/* Background with abstract overlay */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1478737270239-2fccd27ee10f?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Studio" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-[#FFD700] font-bold tracking-[0.3em] text-sm md:text-base mb-4 uppercase">
            Premium Speech Training Agency
          </h2>
          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8">
            당신의 목소리가<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFEB3B]">가장 강력한 브랜드</span>가<br />
            되는 순간
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            아나운서의 기품, 전문가의 신뢰, 리더의 카리스마.<br />
            대한민국 0.1%를 위한 맞춤형 스피치 컨설팅을 경험하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="px-10 py-5 bg-[#FFD700] text-black font-bold text-sm tracking-widest hover:bg-[#FFEB3B] transition-all flex items-center justify-center gap-2"
            >
              무료 상담 신청 <ArrowRight size={18} />
            </Link>
            <Link 
              to="/services" 
              className="px-10 py-5 border border-zinc-700 text-white font-bold text-sm tracking-widest hover:border-[#FFD700] transition-all text-center"
            >
              프로그램 보기
            </Link>
          </div>
        </div>
      </div>

      {/* Vertical text indicator */}
      <div className="absolute right-10 bottom-10 hidden md:block">
        <div className="flex flex-col items-center gap-6">
          <span className="[writing-mode:vertical-lr] text-zinc-500 uppercase tracking-[0.5em] text-[10px] font-bold">Scroll for More</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#FFD700] to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
