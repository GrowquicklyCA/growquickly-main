/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getBlogPosts } from "../../lib/contentful";
import { useState } from "react";
import { Search } from "lucide-react";
import { Card, CardContent } from "../../components/Ui/card"
import { Button } from "../../components/Ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/Ui/avatar";
import { Input } from "../../components/Ui/input";

export async function getStaticProps() {
  const posts = await getBlogPosts();
  return { props: { posts } };
}

export default function BlogHome({ posts }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(posts.flatMap((post) => post.fields.tags || []))),
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.fields.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      post.fields.tags?.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className=" bg-gray-50">
      <div className="relative bg-[#8C52FF] text-white text-center py-28">
  <div
    className="absolute inset-0 bg-cover bg-center opacity-20"
    style={{ backgroundImage: "url('/images/bgcontact.png')" }}
  ></div>
  <div className="relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
      Digital Marketing Blog
    </h1>
    <p className="mt-3 text-lg md:text-xl w-11/12 md:w-3/5 mx-auto leading-relaxed">
      Insights and strategies to accelerate your online growth in the
      Okanagan and beyond.
    </p>
    <div className="relative mt-8 flex justify-center">
      <div className="relative w-full md:w-1/2">
        <Input
          type="text"
          placeholder="Search articles..."
          className="pl-12 pr-4 py-3 w-full rounded-full text-white placeholder-gray-300 bg-transparent border border-white/50 focus:ring-2 focus:ring-white outline-none shadow-lg transition-all duration-300"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70"
          size={20}
        />
      </div>
    </div>
  </div>
</div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <Card className="border rounded-xl p-5 mb-6">
              <h3 className="font-semibold text-lg mb-3">Categories</h3>
              <ul className="space-y-2 text-sm">
                {categories.map((category) => (
                  <li
                    key={category}
                    className={`cursor-pointer ${
                      selectedCategory === category
                        ? "text-[#8C52FF] font-medium"
                        : "text-gray-700 hover:text-[#8C52FF]"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="border rounded-xl p-5 mb-6">
              <h3 className="font-semibold text-lg mb-3">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  ...new Set(posts.flatMap((post) => post.fields.tags || [])),
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-purple-100 hover:text-[#8C52FF] transition cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
            <Card className="border rounded-xl p-5 text-center">
              <h3 className="font-semibold text-lg mb-3">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our digital marketing experts are ready to help your business
                grow quickly.
              </p>
              <Link href="/contact">
              <Button className="bg-[#8C52FF] hover:bg-[#8C52FF] text-white rounded-full px-6 py-2">
                Contact Us
              </Button>
              </Link>
            </Card>
          </div>
          <div className="lg:w-3/4">
            <div className="flex max-lg:flex-col max-lg:items-start gap-5 justify-between items-center mb-6">
              {/* Left Side: Latest Article Heading */}
              <h2 className="text-3xl max-lg:text-xl  font-semibold">Latest Article</h2>

              {/* Right Side: Category Buttons */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      selectedCategory === category
                        ? "bg-[#8C52FF] text-white"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <Link
                  key={post.sys.id}
                  href={`/blog/${post.fields.slug}`}
                  passHref
                >
                  <Card className="border rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white cursor-pointer">
                    {post.fields.coverimage && (
                      <img
                        src={`https:${post.fields.coverimage.fields.file.url}`}
                        alt={post.fields.title}
                        className="rounded-t-xl mb-4 object-cover w-full h-52"
                      />
                    )}
                    <CardContent className="p-5">
                      <div className="bg-purple-100 text-[#8C52FF] text-xs font-medium px-3 py-1 rounded-full inline-block mb-3 whitespace-nowrap">
                        {post.fields.tags && post.fields.tags.length > 0
                          ? post.fields.tags
                          : "Marketing"}
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {post.fields.title}
                      </h2>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.fields.content?.content[0]?.content[0]?.value?.substring(
                          0,
                          100
                        ) || "No preview available..."}
                        ...
                      </p>
                      <div className="flex flex-col sm:flex-row sm:justify-between items-center text-gray-500 text-sm gap-2 sm:gap-0">
  <div className="flex items-center justify-center gap-2">
    <Avatar className="w-6 h-6 flex-shrink-0">
      <AvatarImage
        src="/avatar-placeholder.png"
        alt="Author"
      />
      <AvatarFallback>
        {post.fields.author?.charAt(0) || "U"}
      </AvatarFallback>
    </Avatar>
    <span className="font-medium text-gray-800 whitespace-nowrap">
      {post.fields.author || "Unknown"}
    </span>
  </div>
  <div className="flex items-center justify-center gap-2 sm:gap-0">
    <span className="whitespace-nowrap">
      {new Date(post.fields.publishedDate).toLocaleDateString()}
    </span>
    <span className="mx-2 text-gray-400">•</span>
    <span className="whitespace-nowrap">8 min read</span>
  </div>
</div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}