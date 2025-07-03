"use client";

import Link from "next/link";
import Header from "../../components/ui/header";
import { useTheme } from "next-themes";
import ArticleCard from "@ui/articleCard";
import { useEffect, useState } from "react";
import { useArticleStore } from "@/lib/store";

export default function ArticlesList() {
  const { setTheme, theme } = useTheme();
  const articles = useArticleStore((s) => s.articles);
  const fetchArticles = useArticleStore((s) => s.fetchArticles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      if (articles.length === 0) await fetchArticles();
      setLoading(false);
    };
    load();
  }, []);

  const SkeletonCard = () => (
    <div className="animate-pulse bg-muted rounded-lg p-4 space-y-2 h-[280px] w-full max-w-sm">
      <div className="bg-gray-300 h-40 rounded w-full" />
      <div className="bg-gray-300 h-4 w-3/4 rounded" />
      <div className="bg-gray-300 h-4 w-1/2 rounded" />
    </div>
  );

  return (
    <div>
      <Header setTheme={setTheme} theme={theme} />

      <div className="p-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Articles</h1>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : articles.map((article) => (
                <Link href={`/articles/${article.id}`} key={article.id}>
                  <ArticleCard
                    imgUrl={article.imgUrl}
                    Heading={article.Heading}
                    date={
                      article.date ||
                      new Date(article.created_at).toDateString()
                    }
                    rating={article.rating || ""}
                  />
                </Link>
              ))}
        </div>

        {!loading && (
          <div className="mt-20 text-center bg-muted/40 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-2">Got something to share?</h2>
            <p className="mb-4 text-muted-foreground">
              Create your own articles and get featured on Nannuru.
            </p>
            <a
              href="https://create.nannuru.com"
              target="_blank"
              className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Start Writing →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}