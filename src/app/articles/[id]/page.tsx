import ArticleRead from "@/components/ui/articleRead";
import { createClient } from "@supabase/supabase-js";
import type { Metadata } from "next";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Props = {
  params: { id: string };
};

export async function generateMetadata(props: any): Promise<Metadata> {
  const { params } = await props;

  const { data: article } = await supabase
    .from("Nannuru_articles_table")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!article) return { title: "Not Found" };

  return {
    title: article.Heading,
    openGraph: {
      title: article.Heading,
      description: article.subHeading || article.Heading,
      url: `https://nannuru.com/articles/${params.id}`,
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

export default async function Page(props: any) {
  const { params } = await props;

  const { data: moreArticles } = await supabase
    .from("Nannuru_articles_table")
    .select("id, Heading, imgUrl")
    .neq("id", params.id) // exclude current article
    .limit(4); // limit to 4 more

  return <ArticleRead id={params.id} more={moreArticles || []} />;
}