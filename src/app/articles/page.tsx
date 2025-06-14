"use client";
import Link from "next/link";
import Header from "../../components/ui/header";
import { useTheme } from "next-themes";
import SocialCard from "@ui/socialCard";
import ArticleCard from "@ui/articleCard";

export default function ArticlesList() {
  const { setTheme, theme } = useTheme();

  const articles = [
    {
      id: 1,
      imgUrl: "https://i.postimg.cc/C53xrp9X/IMG-20250608-WA0001.jpg",
      Heading: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಯುವ ಪ್ರತಿಭೆಗಳಿಗೆ ಪ್ರತಿಭಾ ಪುರಸ್ಕಾರ",

      subHeading: "",
      date: "Sun, 8 june",
      rating: "",
    },
    {
      id: 2,
      imgUrl: "https://i.postimg.cc/9FNq5K58/IMG-20250609-WA0002.jpg",
      Heading:
        "ಭವ್ಯಸನ್ಮಾನ - ಹಾಸನ: 9-06-2025, ಸೋಮವಾರ  ಬೂಕರ್ ಪ್ರಶಸ್ತಿ ಪುರಸ್ಕೃತ ಭಾನುಮುಸ್ತಕ್ ರವರಿಗೆ ಭವ್ಯಸನ್ಮಾನ",
      subHeading: "",
      date: "Mon, 9 june",
      rating: "",
    },
    {
      id: 3,
      imgUrl: "https://i.postimg.cc/fWYT0fBV/IMG-20250610-WA0000.jpg",
      Heading: "ಕನ್ನಡ ಸ ರೆ ಗ ಮ ಪ 21 ರ ವಿಜೇತೆ ಶಿವಾನಿಗೆ ಶುಭಾಶಯಗಳು",
      subHeading: "",
      date: "saturday, 14 june",
      rating: "",
    },
  ];

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
