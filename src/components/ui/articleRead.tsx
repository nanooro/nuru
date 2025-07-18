"use client";
import Link from "next/link";
// import Header from "@/components/ui/header";
import { useTheme } from "next-themes";
import Share from "@/components/ui/share";
import SocialCard from "@/components/ui/socialCard";
import ArticleCard from "@/components/ui/articleCard";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ArticleRead({ id, more, article: initialArticle }: { id: string, more: any[], article: any }) {
  const { setTheme, theme } = useTheme();

  const [article, setArticle] = useState<any>(initialArticle);
  const [moreArticles, setMoreArticles] = useState<any[]>(more);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on article ID change

    const fetchArticle = async () => {
      if (!id) return;

      const { data, error } = await supabase
        .from("Nannuru_articles_table")
        .select("*")
        .eq("id", id)
        .single();

      if (!error && data) setArticle(data);
    };

    const fetchMoreArticles = async () => {
      const { data, error } = await supabase
        .from("Nannuru_articles_table")
        .select("id, Heading, imgUrl, date, rating")
        .neq("id", id)
        .limit(4);

      if (!error && data) setMoreArticles(data);
    };

    if (!initialArticle) {
      fetchArticle();
      fetchMoreArticles();
    }
  }, [id, initialArticle]);

  const currentUrl = `https://nannuru.com/articles/${id}`;

  if (!article)
    return (
      <div className="text-center mt-20 text-lg text-gray-500 animate-pulse">
        Loading article...
      </div>
    );

  return (
    <>
      {/* <Header setTheme={setTheme} theme={theme} /> */}
      <Head>
        <meta
          property="og:image"
          content={article.imgUrl}
          key={`og-image-${article.id}`}
        />
      </Head>

      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold">{article.Heading}</h1>
        <div className="flex items-center justify-between w-full my-2">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.jpg" // Placeholder for author avatar
              alt="Author Avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
            <p className="text-sm text-gray-500">Nannuru Team - {article.date}</p>
          </div>
          <Share id={id} />
        </div>
        <Image
          src={article.imgUrl}
          alt={article.Heading}
          width={800}
          height={400}
          className="my-4 w-full rounded"
        />
        <p>{article.subHeading}</p>
        <p>{article.content}</p>

        <div className="flex justify-center items-center mt-12">
          <p>End</p>
        </div>

        <hr className="my-4 border-t border-gray-300" />

        <fieldset className="mt-20 mb-20">
          <legend className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6 text-center">
            Share this article ❤️
          </legend>
          <div className="flex-wrap gap-2 scale-110 flex justify-center items-center">
            <SocialCard
              linkUrl={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                currentUrl
              )}`}
              imgUrl="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              name="facebook"
            />
            <SocialCard
              linkUrl={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                currentUrl
              )}`}
              imgUrl="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              name="whatsapp"
            />
          </div>
        </fieldset>

        <div className="flex-wrap gap-4 justify-center mt-24 flex">
          <h2 className="text-xl font-bold w-full text-center mb-6">
            More Articles
          </h2>
          {moreArticles.map((article) => (
            <Link href={`/articles/${article.id}`} key={article.id}>
              <ArticleCard
                imgUrl={article.imgUrl}
                Heading={article.Heading}
                date={article.date}
                rating={article.rating}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
