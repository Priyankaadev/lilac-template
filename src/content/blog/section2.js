'use client';

import BlogPostCard from '../../components/BlogPostCard';
import { blogs } from '../../data/blogs';

const Section2 = () => {
  return (
    <div className="p-6 mt-4 bg-[#E3ECE9] flex flex-col md:grid md:grid-cols-2 md:gap-8 gap-6">
      {blogs.map((blog) => (
        <BlogPostCard
          key={blog.slug}
          title={blog.title}
          date={blog.date}
          slug={blog.slug}
          img={blog.img}
        />
      ))}
    </div>
  );
};

export default Section2;
