import { client } from '@/sanity/lib/client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
interface BlogCardProps {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ category, title, description, imageUrl, slug }) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-[#185519] border-opacity-60 rounded-lg overflow-hidden bg-white">
      <Image
      className="lg:h-48 md:h-36 w-full object-cover object-center"
      src={imageUrl}
      alt="blog"
      width={400} // You might want to set appropriate width
      height={300} // And height for your image
    />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-[#185519] mb-1">
            {category}
          </h2>
          <h1 className="title-font text-lg font-medium text-[#185519] mb-3">{title}</h1>
          <p className="leading-relaxed mb-3 text-[#185519]">{description}</p>
          <div className="flex items-center flex-wrap">
            <Link href={`/Blogs/${slug}`} className="text-[#185519] inline-flex items-center md:mb-2 lg:mb-0">
              Read More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

async function getdata() {
  const fetchData = await client.fetch(`*[_type == "blog"]{
    title,
    category,
    description,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }`);
  return fetchData;
}

const BlogSection: React.FC = async () => {
  const blogs = await getdata();
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {blogs.map((blog: any |string , index:string | any) => (
            <BlogCard
              key={index}
              category={blog.category}
              title={blog.title}
              description={blog.description}
              imageUrl={blog.imageUrl}
              slug={blog.slug} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
