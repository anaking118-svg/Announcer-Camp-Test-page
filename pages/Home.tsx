
import React from 'react';
import { Hero } from '../components/Hero';
import { Link } from 'react-router-dom';
import { Mic, Video, Users, TrendingUp } from 'lucide-react';

export const Home: React.FC = () => {
  const features = [
    { icon: <Mic className="text-[#FFD700]" size={32} />, title: '보이스 트레이닝', desc: '발성, 발음, 호흡의 기초부터 아나운싱까지의 완벽한 훈련.' },
    { icon: <TrendingUp className="text-[#FFD700]" size={32} />, title: '프레젠테이션', desc: '청중을 사로잡는 설득의 기술과 무대 매너 코칭.' },
    { icon: <Video className="text-[#FFD700]" size={32} />, title: '미디어 대응', desc: '인터뷰, 카메라 테스트, 영상 포트폴리오 제작 지원.' },
    { icon: <Users className="text-[#FFD700]" size={32} />, title: '면접 컨설팅', desc: '취업부터 고위직 면접까지, 합격을 부르는 전략적 답변 구성.' },
  ];

  return (
    <div>
      <Hero />
      
      {/* Services Summary Section */}
      <section className="py-24 bg-black px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {features.map((f, i) => (
              <div key={i} className="group p-8 border border-zinc-900 hover:border-[#FFD700]/30 transition-all duration-500 bg-[#0A0A0A]">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section Preview */}
      <section className="py-32 bg-[#050505] px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
             <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-[#FFD700] z-0 opacity-50"></div>
             <img 
               src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
               alt="CEO Profile" 
               className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 relative z-10"
             />
             <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-[#FFD700] z-0 opacity-50"></div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-[#FFD700] font-bold text-sm tracking-[0.2em] mb-6">CEO MESSAGE</h2>
            <h3 className="text-4xl font-black mb-8 leading-tight">"당신의 말에는 힘이 있습니다.<br />우리는 그 힘을 깨워드립니다."</h3>
            <p className="text-zinc-400 mb-10 leading-relaxed">
              지난 15년 간 수많은 아나운서 지망생과 기업인들의 목소리를 가꾸어 왔습니다. 
              기술적인 스피치를 넘어, 사람의 마음을 움직이는 스피치는 자신감에서 시작됩니다. 
              아나운서 훈련소는 단순한 교육 기관이 아닌, 당신의 꿈을 위한 최고의 파트너가 될 것입니다.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-[#FFD700]"></div>
                <span className="font-bold text-lg">대표 이선주 아나운서</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#FFD700] text-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 italic">READY TO BECOME THE NEXT PRO?</h2>
          <p className="text-lg mb-12 font-medium opacity-80">고민은 합격만 늦출 뿐입니다. 지금 바로 프리미엄 컨설팅을 예약하세요.</p>
          <Link to="/contact" className="inline-block px-12 py-5 bg-black text-[#FFD700] font-bold text-sm tracking-widest hover:scale-105 transition-transform uppercase">
            Start Your Journey Now
          </Link>
        </div>
      </section>
    </div>
  );
};
