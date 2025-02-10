"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimatedContent } from "./_components/animated-content";

function BlogPostCard({
  post,
  index,
}: {
  post: {
    id: number;
    title: string;
    description: string;
    date: string;
    image: string;
    link: string;
    readTime: string;
    category: string;
    categoryColor: string;
  };
  index: number;
}) {
  return (
    <AnimatedContent delay={index * 0.1}>
      <article>
        <Link href={post.link} className="block group/card">
          <div
            className={cn(
              "cursor-pointer overflow-hidden relative h-96 rounded-xl shadow-xl",
              "bg-cover bg-center transition-transform duration-300 group-hover/card:scale-[1.02]"
            )}
            style={{ backgroundImage: `url(${post.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 transition duration-300 group-hover/card:from-black/40 group-hover/card:to-black/80" />
            <div className="flex flex-col justify-between h-full p-6 relative z-10">
              <div className="flex items-center space-x-4">
                <Image
                  height={40}
                  width={40}
                  alt="Profile"
                  src="/icons/nikcladis.jpg"
                  className="rounded-full border-2 border-white/20 object-cover"
                />
                <div>
                  <p className="text-white font-medium">Nick Kladis</p>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              <div>
                <div
                  className={cn(
                    "inline-block px-3 py-1 rounded-full text-xs font-medium mb-3",
                    post.categoryColor,
                    "text-white bg-white/10 backdrop-blur-sm"
                  )}
                >
                  {post.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-200 text-sm line-clamp-2">
                  {post.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </article>
    </AnimatedContent>
  );
}

export default function BlogPage() {
  const t = useTranslations("blog");

  const posts = [
    {
      id: 1,
      title: t("posts.post1.title"),
      description: t("posts.post1.description"),
      date: t("posts.post1.date"),
      image: t("posts.post1.image"),
      link: t("posts.post1.link"),
      readTime: "5 min read",
      category: t("categories.technology.title"),
      categoryColor: t("categories.technology.color"),
    },
    {
      id: 2,
      title: t("posts.post2.title"),
      description: t("posts.post2.description"),
      date: t("posts.post2.date"),
      image: t("posts.post2.image"),
      link: t("posts.post2.link"),
      readTime: "3 min read",
      category: t("categories.selfImprovement.title"),
      categoryColor: t("categories.selfImprovement.color"),
    },
    {
      id: 3,
      title: t("posts.post3.title"),
      description: t("posts.post3.description"),
      date: t("posts.post3.date"),
      image: t("posts.post3.image"),
      link: t("posts.post3.link"),
      readTime: "4 min read",
      category: t("categories.sciFi.title"),
      categoryColor: t("categories.sciFi.color"),
    },
  ];

  return (
    <section className="relative w-full bg-white dark:bg-black py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent>
          <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">
            {t("title")}
          </h1>
        </AnimatedContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
