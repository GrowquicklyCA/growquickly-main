import Link from "next/link";
import { getBlogPostBySlug, getBlogPosts } from "../../lib/contentful";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/Ui/avatar";
import { Button } from "../../components/Ui/button";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";

export async function getStaticPaths() {
  const posts = await getBlogPosts();
  const paths = posts.map((post) => ({ params: { slug: post.fields.slug } }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post }, revalidate: 10 };
}

const renderOptions = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">{children}</h2>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal list-outside ml-6 space-y-4">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="text-gray-700 leading-relaxed">{children}</li>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} className="text-purple-600 hover:underline">
        {children}
      </a>
    ),
  },
};

export default function BlogPost({ post }) {
  if (!post) {
    return <div className="text-center py-10">Loading post...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      <div className="bg-purple-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">{post.fields.title}</h1>
          <div className="flex items-center mt-4">
            <Avatar className="w-10 h-10 mr-3">
              <AvatarImage src="/avatar-placeholder.png" alt="Author" />
              <AvatarFallback>{post.fields.author?.charAt(0) || "U"}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{post.fields.author || "Unknown"}</p>
              <p className="text-xs text-gray-300">
                {new Date(post.fields.publishedDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {post.fields.coverimage && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <Image
            src={`https:${post.fields.coverimage.fields.file.url}`}
            alt={post.fields.title}
            width={800}
            height={600}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            loading="lazy"
            priority ={true}
            placeholder="blur"
          />
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="prose prose-lg max-w-none">
          {post.fields.content ? (
            documentToReactComponents(post.fields.content, renderOptions)
          ) : (
            <p className="text-gray-600">No content available.</p>
          )}
        </div>

        {/* Tags */}
        {post.fields.tags && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(post.fields.tags) ? (
                post.fields.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))
              ) : (
                <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  {post.fields.tags || "No tags"}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Author Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
        <div className="flex items-center">
          <Avatar className="w-12 h-12 mr-4">
            <AvatarImage src="/avatar-placeholder.png" alt="Author" />
            <AvatarFallback>{post.fields.author?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold text-gray-900">{post.fields.author || "Unknown"}</p>
            <p className="text-sm text-gray-600">
              {post.fields.authorBio || "A passionate writer sharing insights on digital marketing."}
            </p>
          </div>
        </div>
      </div>

      {/* Back to Blog Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <Link href="/blog/bloghome" passHref>
          <Button variant="outline" className="rounded-full px-6 py-2 border-gray-300 hover:bg-gray-100">
            Back to Blog
          </Button>
        </Link>
      </div>
    </div>
  );
}