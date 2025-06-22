import ArticleRead from "@/components/ui/articleRead";
import { supabase } from "@/lib/supabaseClient";

export const dynamic = "force-static";

export async function generateMetadata({ params }) {
  const { data: article } = await supabase
    .from("Nannuru_articles_table")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!article) return { title: "Not found" };

  const url = `https://nannuru.com/articles/${params.id}`;
  return {
    title: article.Heading,
    openGraph: {
      title: article.Heading,
      description: article.subHeading || article.Heading,
      url,
      images: [
        {
          url: article.imgUrl,
          width: 800,
          height: 400,
          alt: article.Heading,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.Heading,
      images: [article.imgUrl],
    },
  };
}

export default function Page({ params }) {
  return <ArticleRead id={params.id} />;
}
