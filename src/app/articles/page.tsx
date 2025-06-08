"use client";
import Link from "next/link";
import Header from "../../../components/ui/header";
import { useTheme } from "next-themes";
import SocialCard from "@ui/socialCard";
import ArticleCard from "@ui/articleCard";

export default function ArticlesList() {
  const { setTheme, theme } = useTheme();

  const articles = [
    {
      id: 1,
      imgUrl: "https://i.postimg.cc/50mKKNwJ/image-20250516211308-0000.jpg",
      Heading:
        "ಬೆಂಗಳೂರು: ಜೂನ್ 8 -6-2025     ಭಾನುವಾರ        ಬೆಂಗಳೂರಿನಲ್ಲಿ ವಿಶ್ವಕರ್ಮ ವಿದ್ಯಾರ್ಥಿಗಳ ಪ್ರತಿಭಪುರಸ್ಕಾರದ ಪೂರ್ವ ಬಾವಿ ಸಭೆ:",
      subHeading: "",
      date: "Sun, 8 june",
      rating: "",
    },
    // Add more articles here if needed
  ];

  return (
    <div className="mt-12">
      <Header setTheme={setTheme} theme={theme} />
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Articles</h1>

        <div className="flex flex-wrap gap-4 justify-center">
          {articles.map((article) => (
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
  );
}