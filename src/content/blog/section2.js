'use client';

import BlogPostCard from '../../components/BlogPostCard';
import { blogs } from '../../data/blogs';
import { motion } from 'framer-motion';

const Section2 = () => {
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <div className="p-6 bg-[var(--midBeige-bg)] grid md:grid-cols-2 gap-6">
      {blogs.map((blog) => (
        <motion.div
          key={blog.slug}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={item}
        >
          <BlogPostCard
            title={blog.title}
            date={blog.date}
            slug={blog.slug}
            img={blog.img}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Section2;
