
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="py-24 px-6 bg-black min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-7xl font-black mb-12">LET'S<br /><span className="text-[#FFD700]">TALK.</span></h1>
            <p className="text-zinc-400 text-lg mb-16 leading-relaxed max-w-md">
              당신의 성장을 위한 첫걸음, 저희와 함께 시작하세요. 
              궁금한 점이 있다면 언제든 편하게 문의 주시기 바랍니다.
            </p>

            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-zinc-900 rounded-2xl text-[#FFD700]"><Phone size={24} /></div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-500 mb-2">Phone</h4>
                  <p className="text-xl font-medium">02-1234-5678</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-zinc-900 rounded-2xl text-[#FFD700]"><Mail size={24} /></div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-500 mb-2">Email</h4>
                  <p className="text-xl font-medium">info@announcer-academy.co.kr</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-zinc-900 rounded-2xl text-[#FFD700]"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-500 mb-2">Location</h4>
                  <p className="text-xl font-medium">서울특별시 강남구 테헤란로 123, 45층</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-[#0A0A0A] p-12 rounded-3xl border border-zinc-900">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">Your Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:border-[#FFD700] outline-none transition-colors" placeholder="성함" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">Phone Number</label>
                  <input type="text" className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:border-[#FFD700] outline-none transition-colors" placeholder="연락처" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">Interest Service</label>
                <select className="w-full bg-transparent border-b border-zinc-800 py-3 text-zinc-400 focus:border-[#FFD700] outline-none transition-colors appearance-none">
                  <option className="bg-black">관심 있는 프로그램 선택</option>
                  <option className="bg-black">보이스 정규 과정</option>
                  <option className="bg-black">1:1 면접 집중 코칭</option>
                  <option className="bg-black">기업 및 단체 출강</option>
                  <option className="bg-black">기타 문의</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">Your Message</label>
                <textarea className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:border-[#FFD700] outline-none transition-colors h-32 resize-none" placeholder="상담 희망 내용 혹은 문의사항"></textarea>
              </div>
              <button className="w-full py-5 bg-[#FFD700] text-black font-black tracking-[0.3em] uppercase hover:bg-[#FFEB3B] transition-all flex items-center justify-center gap-3">
                Send Inquiry <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
