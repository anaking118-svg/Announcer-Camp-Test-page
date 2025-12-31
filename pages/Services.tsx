
import React from 'react';
import { Mic2, MessageSquare, Video, Headphones, Target, Star } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Mic2 size={40} className="text-[#FFD700]" />,
      title: "보이스 정규 과정",
      desc: "발성, 발음, 복식호흡의 기초부터 호감 가는 목소리를 완성하는 8주 완성 시그니처 프로그램입니다.",
      features: ["맞춤형 톤 분석", "뉴스 리딩 훈련", "MC 스피치 스킬"]
    },
    {
      icon: <MessageSquare size={40} className="text-[#FFD700]" />,
      title: "1:1 집중 면접 코칭",
      desc: "본인만의 차별화된 답변 구성과 돌발 질문 대처 능력을 기르는 합격 보장형 컨설팅입니다.",
      features: ["자소서 기반 압박 질문", "비언어적 요소(태도) 교정", "모의 면접 영상 분석"]
    },
    {
      icon: <Video size={40} className="text-[#FFD700]" />,
      title: "영상 포트폴리오 제작",
      desc: "카메라 앞에서의 긴장감을 해소하고 본인의 강점이 돋보이는 고퀄리티 영상을 제작합니다.",
      features: ["스튜디오 대관 및 촬영", "리딩 분석 피드백", "최종 영상 편집본 제공"]
    }
  ];

  return (
    <div className="py-24 px-6 bg-black min-h-screen">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase">Our Expertise</h1>
          <p className="text-zinc-500 uppercase tracking-widest text-sm">최고의 스피치는 철저한 훈련에서 시작됩니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-[#111111] p-10 rounded-3xl border border-zinc-900 hover:border-[#FFD700]/50 transition-all duration-500 flex flex-col items-center text-center">
              <div className="mb-8 p-6 bg-black rounded-2xl">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-6">{s.title}</h3>
              <p className="text-zinc-500 mb-8 leading-relaxed h-24">{s.desc}</p>
              <ul className="space-y-4 mb-10 text-left w-full">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-zinc-400 text-sm">
                    <Star size={14} className="text-[#FFD700]" /> {f}
                  </li>
                ))}
              </ul>
              <button className="mt-auto w-full py-4 border border-zinc-800 hover:bg-[#FFD700] hover:text-black hover:border-transparent transition-all font-bold text-xs uppercase tracking-widest">
                More Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
