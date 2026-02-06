import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogPostCard = () => {
  return (
    <div className=''>
<div className="relative w-full h-[200px] ">
  <Image
    src="/section1.webp"
    alt="blog one"
    fill
    className="object-cover"
    priority
  />
</div>
        <p>3/11/19</p>
        <h2 className='text-xl'>Blog Post One</h2>
        <Link href='/blog/blog-one' className='underline' >Read More</Link>

    </div>
  )
}

export default BlogPostCard
