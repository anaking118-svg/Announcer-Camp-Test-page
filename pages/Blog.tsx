
import React, { useState, useEffect } from 'react';
import { getAppState } from '../store';
import { BlogPost } from '../types';
import { Calendar, User, ChevronRight } from 'lucide-react';

export const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setPosts(getAppState().posts);
  }, []);

  return (
    <div className="py-24 px-6 bg-black min-h-screen">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black mb-6">NEWS & INSIGHTS</h1>
          <p className="text-zinc-500 uppercase tracking-widest text-sm">아나운서 훈련소의 최신 소식과 스피치 팁을 만나보세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="overflow-hidden mb-6 h-80 relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="flex items-center gap-6 text-[10px] text-[#FFD700] font-bold tracking-widest mb-4">
                <span className="flex items-center gap-1 uppercase"><Calendar size={12} /> {post.date}</span>
                <span className="flex items-center gap-1 uppercase"><User size={12} /> {post.author}</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-[#FFD700] transition-colors">{post.title}</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              <button className="flex items-center gap-2 text-[#FFD700] font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all">
                Read More <ChevronRight size={16} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
