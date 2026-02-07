'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { blogs } from '../data/blogs';

const BlogSlider = () => {
  const { slug } = useParams();
  const router = useRouter();

  const currentIndex = blogs.findIndex(b => b.slug === slug);
  if (currentIndex === -1) return <p className="p-8 text-center">Blog not found</p>;

  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    setIndex(currentIndex);
  }, [slug, currentIndex]);

  const navigateToBlog = (i) => {
    router.push(`/blog/${blogs[i].slug}`);
  };

  const currentBlog = blogs[index];
  const prevIndex = (index - 1 + blogs.length) % blogs.length;
  const nextIndex = (index + 1) % blogs.length;

  return (
    <main className="min-h-screen flex flex-col items-center bg-[#F5F7F6] py-8">
    
      <div className="max-w-3xl text-center">
     
        <p className="text-[#2C3E44] text-sm mb-2">{currentBlog.date}</p>

        
        <h1 className="text-4xl font-bold text-[#3E5C59] mb-6">{currentBlog.title}</h1>

    
        <div className="text-[#2C3E44] text-lg leading-relaxed flex flex-col gap-4 mb-12">
          {currentBlog.content.split('\n').map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        
        <div className="flex justify-between w-full mt-8">
        
          <button
            onClick={() => navigateToBlog(prevIndex)}
            className="flex items-center gap-2 text-[#3E5C59] font-semibold hover:text-[#7FA3A0] transition-colors"
          >
            <span className="text-2xl">&lt;</span>
            <span>{blogs[prevIndex].title}</span>
          </button>

      
          <button
            onClick={() => navigateToBlog(nextIndex)}
            className="flex items-center gap-2 text-[#3E5C59] font-semibold hover:text-[#7FA3A0] transition-colors"
          >
            <span>{blogs[nextIndex].title}</span>
            <span className="text-2xl">&gt;</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default BlogSlider;
