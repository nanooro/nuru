"use client";
import Header from "../../components/ui/header";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import ArticleCard from "../../components/ui/articleCard";
export default function ArticleList() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const articles = [
    {
      id: 1,
      imgUrl: "https://i.postimg.cc/5t9dV556/1000174880-removebg-preview.png",
      Heading: "Chitradurga",
      subHeading: "",
      date: "May 11, 2025.",
      rating: "",
    },
    {
      id: 2,
      imgUrl: "https://i.postimg.cc/50mKKNwJ/image-20250516211308-0000.jpg",
      Heading: "ಶನಿವಾರಸಂತೆಯ ಕಾಳಿಕಾಂಬ ದೇವಾಲಯದ ವಾರ್ಷಿಕೋತ್ಸವ",
      subHeading: "",
      date: "Fri, 16 may",
      rating: "",
    },
    {
      id: 3,
      imgUrl: "https://i.postimg.cc/3wKmqSD3/IMG-20250528-WA0011.jpg",
      Heading: "ಬೆಂಗಳೂರು ಟೌನ್ ಹಾಲ್ ನಲ್ಲಿ ವಿಶ್ವಕರ್ಮ ಸಮಾಜ ಬಾಂಧವರ…",
      subHeading: "",
      date: "Wed, 28 may",
      rating: "",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Header setTheme={setTheme} theme={theme} />
      <div className="mt-24 flex flex-col gap-8">
        {articles.map((a) => (
          <Link href={`/articleList/${a.id}`} key={a.id}>
            <ArticleCard
              imgUrl={a.imgUrl}
              Heading={a.Heading}
              subHeading={a.subHeading}
              date={a.date}
              rating={a.rating}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
