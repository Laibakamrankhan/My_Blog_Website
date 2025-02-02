import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';


interface Blog {
  title: string;
  blogdescription: string
  slug: string;
}

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const data = await client.fetch<Blog[]>(
    `*[_type == "blog" && slug.current == $slug]{
      title,
      blogdescription,
      "slug": slug.current
    }`,
    { slug }
  );
  
const blogs = data[0];
return (
  <div className="bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-10">
          <div className="text-green-700  py-6 px-8 rounded-t-lg">
            <h1 className="text-4xl font-bold">{blogs.title}</h1>
          </div>
          <div className="p-8">
            <div className="text-gray-800 text-lg leading-relaxed">
              <PortableText value={blogs.blogdescription} />
            </div>
          </div>
        </div>

    </div>
)
}

