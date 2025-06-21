"use client";
import Link from "next/link";
import Header from "../../../components/ui/header";
import { useTheme } from "next-themes";
import Share from "@ui/share";
import SocialCard from "@ui/socialCard";
import ArticleCard from "@ui/articleCard";
import Image from "next/image";
import { useParams } from "next/navigation";
import Head from "next/head";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function articleRead() {
  const { setTheme, theme } = useTheme();
  const params = useParams();
  const id = params?.id;

  const [articles, setArticles] = useState([
    {
      id: 1,
      imgUrl: "https://i.postimg.cc/C53xrp9X/IMG-20250608-WA0001.jpg",
      Heading: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಯುವ ಪ್ರತಿಭೆಗಳಿಗೆ ಪ್ರತಿಭಾ ಪುರಸ್ಕಾರ",
      subHeading: "",
      date: "Sun, 8 june",
      rating: "",
      content: `ಬೆಂಗಳೂರು: ಜೂನ್ 8, 2025 ಭಾನುವಾರ — ...`,
    },
    {
      id: 2,
      imgUrl: "https://i.postimg.cc/9FNq5K58/IMG-20250609-WA0002.jpg",
      Heading:
        "ಭವ್ಯಸನ್ಮಾನ - ಹಾಸನ: 9-06-2025, ಸೋಮವಾರ ಬೂಕರ್ ಪ್ರಶಸ್ತಿ ಪುರಸ್ಕೃತ ಭಾನುಮುಸ್ತಕ್ ರವರಿಗೆ ಭವ್ಯಸನ್ಮಾನ",
      subHeading: "",
      date: "Mon, 9 june",
      rating: "",
      content: "ಹಾಸನದ ಹೆಮ್ಮೆಯ ಬರಹಗಾರ್ತಿ, ಅಂತರಾಷ್ಟ್ರೀಯ ಬೂಕರ್...",
    },
    {
      id: 3,
      imgUrl: "https://i.postimg.cc/fWYT0fBV/IMG-20250610-WA0000.jpg",
      Heading: "ಕನ್ನಡ ಸ ರೆ ಗ ಮ ಪ 21 ರ ವಿಜೇತೆ ಶಿವಾನಿಗೆ ಶುಭಾಶಯಗಳು",
      subHeading: "",
      date: "saturday, 14 june",
      rating: "",
      content: "ಕನ್ನಡನಾಡಿನಲ್ಲದೆ ಹೊರರಾಜ್ಯದ ಹೊರದೇಶಗಳಲ್ಲಿಯು...",
    },
  ]);
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) return;
      const { data, error } = await supabase
        .from("Nannuru_articles_table")
        .select("*")
        .eq("id", id)
        .single();

      if (!error && data) {
        setArticle(data);
        setArticles((prev) => {
          const exists = prev.some((a) => a.id === data.id);
          return exists ? prev : [...prev, data];
        });
      }
    };

    fetchArticle();
  }, [id]);

  const currentUrl = `https://nannuru.com/articles/${id}`;
  const relatedArticles = article ? [article] : [];

  return (
    <>
      <Header setTheme={setTheme} theme={theme} />

      {!article ? (
        <div className="text-center mt-20 text-lg text-gray-500 animate-pulse">
          Loading article...
        </div>
      ) : (
        <>
          <Head>
            <meta
              property="og:image"
              content={article.imgUrl}
              key={`og-image-${article.id}`}
            />
            <link
              rel="image_src"
              href={article.imgUrl}
              key={`image-src-${article.id}`}
            />
          </Head>
          <div className="">
            <div className="sticky top-0 left-0"></div>
            <div className="p-4 max-w-3xl mx-auto">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">{article.Heading}</h1>
              </div>

              <div className="w-full h-auto flex">
                <p className="text-sm text-gray-500 m-2">{article.date}</p>
                <Share id={id} className="ml-auto" />
              </div>

              <Image
                src={article.imgUrl}
                alt=""
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

              <div className="flex-wrap gap-2 mt-20 mb-20 flex justify-center items-center">
                <fieldset>
                  <legend className="text-3xl font-bold text-gray-700 -ml-6 mb-6">
                    Share this articles <span>❤️</span>
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
              </div>

              <div className="flex flex-wrap gap-4 justify-center mt-24">
                {relatedArticles.map((article) => (
                  <Link href={`/articles/${article.id}`} key={article.id}>
                    <ArticleCard
                      imgUrl={article.imgUrl}
                      Heading={article.Heading}
                      subHeading={article.subHeading}
                      date={article.date}
                      rating={article.rating}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
