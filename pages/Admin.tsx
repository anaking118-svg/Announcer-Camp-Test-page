
import React, { useState, useEffect } from 'react';
import { getAppState, addPost, addPortfolio, deletePost, deletePortfolio } from '../store';
import { BlogPost, PortfolioItem } from '../types';
import { Plus, Trash2, LayoutDashboard, FileText, Briefcase } from 'lucide-react';

export const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'portfolio'>('posts');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  
  // Post Form State
  const [postTitle, setPostTitle] = useState('');
  const [postExcerpt, setPostExcerpt] = useState('');
  const [postImage, setPostImage] = useState('https://picsum.photos/800/600');

  // Portfolio Form State
  const [portTitle, setPortTitle] = useState('');
  const [portCategory, setPortCategory] = useState('');
  const [portDesc, setPortDesc] = useState('');
  const [portImage, setPortImage] = useState('https://picsum.photos/800/800');

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    const state = getAppState();
    setPosts(state.posts);
    setPortfolio(state.portfolio);
  };

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postTitle) return;
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: postTitle,
      excerpt: postExcerpt,
      content: 'Sample Content Generated',
      date: new Date().toISOString().split('T')[0],
      author: '관리자',
      imageUrl: postImage,
    };
    addPost(newPost);
    setPostTitle('');
    setPostExcerpt('');
    refreshData();
  };

  const handleAddPortfolio = (e: React.FormEvent) => {
    e.preventDefault();
    if (!portTitle) return;
    const newItem: PortfolioItem = {
      id: Date.now().toString(),
      title: portTitle,
      category: portCategory,
      description: portDesc,
      imageUrl: portImage,
      date: new Date().toISOString().split('T')[0],
    };
    addPortfolio(newItem);
    setPortTitle('');
    setPortCategory('');
    setPortDesc('');
    refreshData();
  };

  const handleDeletePost = (id: string) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      deletePost(id);
      refreshData();
    }
  };

  const handleDeletePortfolio = (id: string) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      deletePortfolio(id);
      refreshData();
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] py-24 px-6">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-[#FFD700] text-black rounded-xl">
             <LayoutDashboard size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tighter">Admin Panel</h1>
            <p className="text-zinc-500 text-sm">웹사이트 콘텐츠를 관리하세요 (LocalStorage 기반)</p>
          </div>
        </div>

        <div className="flex gap-4 mb-8">
           <button 
             onClick={() => setActiveTab('posts')}
             className={`px-6 py-3 font-bold text-xs tracking-widest rounded-lg flex items-center gap-2 transition-all ${activeTab === 'posts' ? 'bg-[#FFD700] text-black' : 'bg-zinc-900 text-zinc-500 hover:bg-zinc-800'}`}
           >
             <FileText size={16} /> BLOG POSTS
           </button>
           <button 
             onClick={() => setActiveTab('portfolio')}
             className={`px-6 py-3 font-bold text-xs tracking-widest rounded-lg flex items-center gap-2 transition-all ${activeTab === 'portfolio' ? 'bg-[#FFD700] text-black' : 'bg-zinc-900 text-zinc-500 hover:bg-zinc-800'}`}
           >
             <Briefcase size={16} /> PORTFOLIO
           </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-1">
            <div className="bg-[#111111] p-8 rounded-2xl border border-zinc-900 sticky top-32">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Plus size={20} className="text-[#FFD700]" /> 
                {activeTab === 'posts' ? '새 블로그 추가' : '새 포트폴리오 추가'}
              </h2>

              {activeTab === 'posts' ? (
                <form onSubmit={handleAddPost} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Title</label>
                    <input value={postTitle} onChange={(e) => setPostTitle(e.target.value)} type="text" className="w-full bg-black border border-zinc-800 p-3 rounded-lg text-white focus:border-[#FFD700] outline-none" placeholder="포스트 제목" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Excerpt</label>
                    <textarea value={postExcerpt} onChange={(e) => setPostExcerpt(e.target.value)} className="w-full bg-black border border-zinc-800 p-3 rounded-lg text-white focus:border-[#FFD700] outline-none h-24" placeholder="포스트 요약 내용"></textarea>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Image URL</label>
                    <input value={postImage} onChange={(e) => setPostImage(e.target.value)} type="text" className="w-full bg-black border border-zinc-800 p-3 rounded-lg text-white focus:border-[#FFD700] outline-none" />
                  </div>
                  <button type="submit" className="w-full py-4 bg-[#FFD700] text-black font-black tracking-widest text-xs rounded-lg mt-4 hover:bg-[#FFEB3B]">ADD POST</button>
                </form>
              ) : (
                <form onSubmit={handleAddPortfolio} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Title</label>
                    <input value={portTitle} onChange={(e) => setPortTitle(e.target.value)} type="text" className="w-full bg-black border border-zinc-800 p-3 rounded-lg text-white focus:border-[#FFD700] outline-none" placeholder="프로젝트 명" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Category</label>
                    <input value={portCategory} onChange={(e) => setPortCategory(e.target.value)} type="text" className="w-full bg-black border border-zinc-800 p-3 rounded-lg text-white focus:border-[#FFD700] outline-none" placeholder="예: 공중파 공채, 기업 출강" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Description</label>
                    <input value={portDesc} onChange={(e) => setPortDesc(e.target.value)} type="text" className="w-full bg-black border border-zinc-800 p-3 rounded-lg text-white focus:border-[#FFD700] outline-none" placeholder="간단 설명" />
                  </div>
                  <button type="submit" className="w-full py-4 bg-[#FFD700] text-black font-black tracking-widest text-xs rounded-lg mt-4 hover:bg-[#FFEB3B]">ADD TO PORTFOLIO</button>
                </form>
              )}
            </div>
          </div>

          {/* List Side */}
          <div className="lg:col-span-2 space-y-6">
            {activeTab === 'posts' ? (
              posts.map(post => (
                <div key={post.id} className="bg-[#111111] p-6 rounded-2xl flex items-center justify-between border border-zinc-900 group">
                  <div className="flex items-center gap-4">
                    <img src={post.imageUrl} className="w-16 h-16 object-cover rounded-lg" alt="" />
                    <div>
                       <h3 className="font-bold">{post.title}</h3>
                       <p className="text-zinc-500 text-xs">{post.date} | {post.author}</p>
                    </div>
                  </div>
                  <button onClick={() => handleDeletePost(post.id)} className="p-3 text-zinc-600 hover:text-red-500 transition-colors">
                    <Trash2 size={20} />
                  </button>
                </div>
              ))
            ) : (
              portfolio.map(item => (
                <div key={item.id} className="bg-[#111111] p-6 rounded-2xl flex items-center justify-between border border-zinc-900">
                  <div className="flex items-center gap-4">
                    <img src={item.imageUrl} className="w-16 h-16 object-cover rounded-lg" alt="" />
                    <div>
                       <h3 className="font-bold">{item.title}</h3>
                       <p className="text-[#FFD700] text-xs font-bold uppercase tracking-widest">{item.category}</p>
                    </div>
                  </div>
                  <button onClick={() => handleDeletePortfolio(item.id)} className="p-3 text-zinc-600 hover:text-red-500 transition-colors">
                    <Trash2 size={20} />
                  </button>
                </div>
              ))
            )}
            
            {(activeTab === 'posts' ? posts.length : portfolio.length) === 0 && (
              <div className="py-20 text-center text-zinc-600">데이터가 없습니다.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
