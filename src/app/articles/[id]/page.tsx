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

export default function articleRead() {
  const { setTheme, theme } = useTheme();
  const params = useParams();
  const id = params?.id;

  const articles = [
    {
      id: 1,
      imgUrl: "https://i.postimg.cc/C53xrp9X/IMG-20250608-WA0001.jpg",
      Heading: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಯುವ ಪ್ರತಿಭೆಗಳಿಗೆ ಪ್ರತಿಭಾ ಪುರಸ್ಕಾರ",
      subHeading: "",
      date: "Sun, 8 june",
      rating: "",
      content: `ಬೆಂಗಳೂರು: ಜೂನ್ 8, 2025 ಭಾನುವಾರ — ಬೆಂಗಳೂರಿನಲ್ಲಿ ವಿಶ್ವಕರ್ಮ ವಿದ್ಯಾರ್ಥಿಗಳ ಪ್ರತಿಭಾ ಪುರಸ್ಕಾರದ ಪೂರ್ವಭಾವಿ ಸಭೆ ನಡೆಯಿತು.
  
  ಈ ಕಾರ್ಯಕ್ರಮದ ಮುಖ್ಯ ಸಮಾರಂಭವು 20-06-2025 ರಂದು ಶುಕ್ರವಾರ ಜೆ ಸಿ ರಸ್ತೆಯ ಪುರಭವನದಲ್ಲಿ ನಡೆಯಲಿದ್ದು, ವಿಶ್ವಕರ್ಮ ಸಮಾಜದ ಮಕ್ಕಳಿಗೆ ಪ್ರತಿಭಾ ಪುರಸ್ಕಾರ ನೀಡಲಾಗುತ್ತದೆ. ಈ ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ಮಾನ್ಯ मुख्यमंत्री ಭಾಗವಹಿಸುತ್ತಿದ್ದು, ಅಧ್ಯಕ್ಷತೆಯನ್ನು ಶ್ರೀಮತಿ ವಸಂತ ಮುರಳಿಯವರು ವಹಿಸಿಕೊಳ್ಳಲಿದ್ದಾರೆ. ಸಮಾಜದ ಮುಖಂಡರು, ಮಂತ್ರಿಗಳು, ಗಣ್ಯರು ಭಾಗವಹಿಸಲಿದ್ದಾರೆ.
  
  ಈ ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಮಲ್ಲೇಶ್ವರಂ ಜೆ.ಪಿ. ಭವನದ ವಿಶ್ವಕರ್ಮ ಸಮಾಜದ ಕಛೇರಿಯಲ್ಲಿ ಪೂರ್ವಭಾವಿ ಸಭೆ ಕರೆಯಲಾಗಿತ್ತು. ಸಭೆಯ ಅಧ್ಯಕ್ಷತೆಯನ್ನು ಹೊಸದುರ್ಗದ ಮಾರಬಗಟ್ಟ ಪುರುಷೋತ್ತಮ ಚಾರ್ಯರು ವಹಿಸಿದ್ದರು. ಅವರು, "ನಮ್ಮ ಪ್ರತಿಭಾನ್ವಿತ ವಿದ್ಯಾರ್ಥಿಗಳು ಮುಖ್ಯಮಂತ್ರಿಗಳ ಸಮ್ಮುಖದಲ್ಲಿ ಗೌರವ ಸನ್ಮಾನ ಸ್ವೀಕರಿಸುತ್ತಿರುವುದು ಸಂತಸದ ವಿಷಯ. ಎಲ್ಲ ಬಂಧುಗಳು ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳಬೇಕು," ಎಂದು ಮನವಿ ಮಾಡಿದರು.
  
  ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ಕಲಾವಿದೆ ಶ್ರೀ ಕೊಮಲರವರಿಗೆ ಸನ್ಮಾನ ನೀಡಿ ಗೌರವಿಸಲಾಯಿತು. ಅಧ್ಯಕ್ಷರಾದ ಕನ್ನಡ ಸೋಮು, ಹಿರಿಯರಾದ ದೇವೇಂದ್ರಚಾರ್, ಮಾರಬಗಟ್ಟ ಪರಮೇಶ್ವರ ಚಾರ್ (ಹೊಸದುರ್ಗ), ಗದಗಿನ ಕವಿತಾ ಬಡಿಗೇರ್, ಜಯಣ್ಣಚಾರ್, ರಾಜಣ್ಣ ಗಿರಿಯಾಪುರ, ಸುಧಾ ಗರುಡಚಾರ್ (ಪಾಳ್ಯ), ಜೆ ಎನ್ ಶಿವಪ್ರಸಾದ್ (ವಿಜಯಪುರ) ಮತ್ತು ಸಮಾಜದ ಹಲವಾರು ಮುಖಂಡರು, ಮಹಿಳೆಯರು ಭಾಗವಹಿಸಿದ್ದರು.`,
    },
    {
      id: 2,
      imgUrl: "https://i.postimg.cc/9FNq5K58/IMG-20250609-WA0002.jpg",
      Heading:
        "ಭವ್ಯಸನ್ಮಾನ - ಹಾಸನ: 9-06-2025, ಸೋಮವಾರ  ಬೂಕರ್ ಪ್ರಶಸ್ತಿ ಪುರಸ್ಕೃತ ಭಾನುಮುಸ್ತಕ್ ರವರಿಗೆ ಭವ್ಯಸನ್ಮಾನ",
      subHeading: "",
      date: "Mon, 9 june",
      rating: "",
      content:
        "ಹಾಸನದ ಹೆಮ್ಮೆಯ ಬರಹಗಾರ್ತಿ, ಅಂತರಾಷ್ಟ್ರೀಯ ಬೂಕರ್ ಪ್ರಶಸ್ತಿ ವಿಜೇತರಾದ ಶ್ರೀಮತಿ ಭಾನುಮುಸ್ತಕ್ ರವರನ್ನು ಹಾಸನ ಜಿಲ್ಲಾ ವಿಶ್ವಕರ್ಮ ಸಮಾಜದ ವತಿಯಿಂದ ಸಾಂಪ್ರದಾಯಿಕವಾಗಿ ಸನ್ಮಾನಿಸಲಾಯಿತು.ಈ ಸಂದರ್ಭದಲ್ಲಿ ಜಿಲ್ಲಾಧ್ಯಕ್ಷ ಶ್ರೀ ಹೆಚ್. ವಿ. ಹರೀಶ್, ರಾಜ್ಯ ಉಪಾಧ್ಯಕ್ಷ ಶ್ರೀ ಜಿ. ಕುಮಾರ್, ಜಿಲ್ಲಾ ಉಪಾಧ್ಯಕ್ಷ ಶ್ರೀ ಎ. ಸಿ. ನಾರಾಯಣ್, ಖಜಾಂಚಿ ಶ್ರೀ ಕೆ. ಎಸ್. ಜಗದೀಶ್, ಹಿರಿಯ ನಿರ್ದೇಶಕ ಶ್ರೀ ಹೆಚ್. ಎಸ್. ಶಿವಶಂಕರ್, ಕಾಳಿಕಾಂಬ ದೇವಾಲಯದ ಪೂಜಾ ಸಮಿತಿ ಅಧ್ಯಕ್ಷ ಶ್ರೀ ಹೆಚ್. ಕೆ. ಆನಂದ್, ಹಾಸನ ತಾಲ್ಲೂಕು ವಿಶ್ವಕರ್ಮ ಸಮಾಜದ ಉಪಾಧ್ಯಕ್ಷ ಶ್ರೀ ಎ. ಬ್ಯಾಟರಂಗಾಚಾರ್, ಖಜಾಂಚಿ ಶ್ರೀ ಬಿ. ಲೋಕೇಶ್, ನಿರ್ದೇಶಕರಾದ ಶ್ರೀ ಹೆಚ್. ಎಸ್. ಆನಂದ್, ಸಮಾಜದ ಪ್ರಮುಖರಾದ ಶ್ರೀಮತಿ ಎ. ಎನ್. ನಳಿನಾಕ್ಷಿ, ಶ್ರೀ ಕೆ. ಆರ್. ಭಾಸ್ಕರಾಚಾರ್ ಮತ್ತು ಶ್ರೀ ಕೆ. ವಿ. ಕಲ್ಲೇಶಚಾರ್ ಉಪಸ್ಥಿತರಿದ್ದರು. ವರದಿ: ಹೆಚ್. ವಿ. ಹರೀಶ್, ಹಾಸನ",
    },
  ];
  const article = articles.find((a) => a.id === parseInt(id || ""));
  if (!article) {
    // Show fallback UI or nothing to avoid crash
    return <div className="p-4 max-w-3xl mx-auto mt-12">Article not found</div>;
  }

  const currentUrl = `https://nannuru.com/articles/${id}`;
  const relatedArticles = articles;

  return (
    <>
      <Header setTheme={setTheme} theme={theme} />
      <Head>
        <meta
          property="og:image"
          content={article.imgUrl}
          key={`og-image-https://via.placeholder.com/800x400.png?text=Placeholder+Image`}
        />
        <link
          rel="image_src"
          href={article.imgUrl}
          key={`image-src-${article.id}`}
        />
      </Head>
      <div className="">
        <div className=" sticky top-0 left-0"></div>
        <div className=" p-4 max-w-3xl mx-auto">
          <div className="flex">
            <h1 className="text-2xl font-bold">{article.Heading}</h1>
            <Share
              className="ml-auto flex"
              id={article.id}
              imageUrl={article.imgUrl}
            />
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
  );
}
