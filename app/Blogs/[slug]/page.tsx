import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  let blogs = [];

  try {
    blogs = await client.fetch(
      `*[_type == "blog" && slug.current == $slug]{
        title,
        blogdescription,
        "slug": slug.current
      }`,
      { slug }
    );

    if (!blogs || blogs.length === 0) {
      throw new Error(`No blog found for slug: ${slug}`);
    }
  } catch (error) {
    console.error("Error fetching blog data:", error);
  return notFound(); // If no blog found, show 404 page;
  } finally {
    console.log("Sanity fetch attempt complete.");
  }

  const blog = blogs[0];

return (
  <div className="bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-10">
          <div className="text-green-700  py-6 px-8 rounded-t-lg">
            <h1 className="text-4xl font-bold">{blog.title}</h1>
          </div>
          <div className="p-8">
            <div className="text-gray-800 text-lg leading-relaxed">
              <PortableText value={blog.blogdescription} />
            </div>
          </div>
        </div>

    </div>
)
}

