"use client";
import Link from "next/link";
import Header from "../../../components/ui/header";
import { useTheme } from "next-themes";
import Share from "@ui/share";
import SocialCard from "@ui/socialCard";
import ArticleCard from "@ui/articleCard";
import Image from "next/image";
import { useSearchParams, useParams } from "next/navigation";

export default function articleRead() {
  const { setTheme, theme } = useTheme();
  const params = useParams();
  const id = params.id;

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
      rating: "5",
    },
  ];

  const article = articles.find((a) => a.id === parseInt(id)) || articles[0];
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const relatedArticles = articles;

  return (
    <>
      <div className="mt-12">
        <Header setTheme={setTheme} theme={theme} />
        <div className="p-4 max-w-3xl mx-auto">
          <div className="flex">
            <h1 className="text-2xl font-bold">{article.Heading}</h1>
            <Share className="ml-auto flex" imageUrl={article.imgUrl} />
          </div>

          <p className="text-sm text-gray-500">{article.date}</p>

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
            {relatedArticles.map((articles) => (
              <Link href={`/articles/${articles.id}`} key={articles.id}>
                <ArticleCard
                  imgUrl={articles.imgUrl}
                  Heading={articles.Heading}
                  subHeading={articles.subHeading}
                  date={articles.date}
                  rating={articles.rating}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
