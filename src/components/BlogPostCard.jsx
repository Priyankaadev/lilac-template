'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const BlogPostCard = ({ title, date, slug, img }) => {
 const router= useRouter()
  return (
    <div className="bg-transparent flex flex-col gap-3">
      <div className="relative w-full h-[300px]">
        <Image
        onClick={()=>router.push(`/blog/${slug}`)}
          src={img || '/section1.webp'}
          alt={title}
          fill
          className="object-cover grayscale-25 cursor-pointer"
          priority
        />
      </div>
      <p className="text-[#2C3E44] text-sm">{date}</p>
      <h2 className="text-2xl font-bold cursor-pointer text-[#3E5C59]"    onClick={()=>router.push(`/blog/${slug}`)}>{title}</h2>
      <Link href={`/blog/${slug}`} className="underline text-[#3E5C59]">
        Read More
      </Link>
    </div>
  );
};

export default BlogPostCard;
