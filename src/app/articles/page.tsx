"use client";
import Link from "next/link";
import Header from "../../components/ui/header";
import { useTheme } from "next-themes";
import SocialCard from "@ui/socialCard";
import ArticleCard from "@ui/articleCard";
import { useEffect } from "react";
import { useArticleStore } from "@/lib/store"; // ✅ your zustand store

export default function ArticlesList() {
  const { setTheme, theme } = useTheme();
  const articles = useArticleStore((s) => s.articles);
  const fetchArticles = useArticleStore((s) => s.fetchArticles);

  useEffect(() => {
    if (articles.length === 0) {
      fetchArticles(); // ✅ fetch only if not already loaded
    }
  }, []);

  return (
    <div className="">
      <Header setTheme={setTheme} theme={theme} />
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Articles</h1>

        <div className="flex flex-wrap gap-4 justify-center">
          {articles.map((article) => (
            <Link href={`/articles/${article.id}`} key={article.id}>
              <ArticleCard
                imgUrl={article.imgUrl}
                Heading={article.Heading}
                // subHeading={article.subHeading}
                date={
                  article.date || new Date(article.created_at).toDateString()
                }
                rating={article.rating || ""}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
