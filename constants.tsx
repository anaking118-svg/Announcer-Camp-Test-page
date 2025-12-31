
import { BlogPost, PortfolioItem } from './types';

export const COLORS = {
  primary: '#000000',
  accent: '#FFD700',
  accentLight: '#FFEB3B',
  gray: '#1A1A1A',
  textGray: '#A1A1AA',
};

export const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '성공적인 면접을 위한 스피치 비법',
    excerpt: '첫 인상을 결정짓는 3초의 마법, 당신의 목소리에 신뢰를 담는 방법을 공개합니다.',
    content: '면접관의 마음을 사로잡는 것은 화려한 단어가 아닙니다. 안정적인 복식호흡과 정확한 발음, 그리고 진정성 있는 태도가 스피치의 본질입니다...',
    date: '2024-05-20',
    author: '김선생',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: '뉴스 브리핑의 정석: 리딩 기술',
    excerpt: '아나운서 지망생이라면 반드시 알아야 할 뉴스 대본 분석법과 리딩 템포 조절법.',
    content: '뉴스는 정보 전달이 목적입니다. 감정을 배제하되, 중요한 키워드에 힘을 싣는 리딩 연습이 필요합니다...',
    date: '2024-05-18',
    author: '이지혜 아나운서',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
  }
];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: '공중파 아나운서 최종 합격 케이스',
    category: '합격 사례',
    description: 'KBS 신입 아나운서 공채 최종 합격생 배출',
    imageUrl: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?auto=format&fit=crop&q=80&w=800',
    date: '2024-04-10',
  },
  {
    id: '2',
    title: '대기업 임원 스피치 컨설팅',
    category: '기업 출강',
    description: 'S사 주요 경영진 미디어 트레이닝 진행',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800',
    date: '2024-03-15',
  }
];
