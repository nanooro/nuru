// app/articles/[id]/page.tsx
import ArticleRead from "@/components/ui/articleRead";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function generateMetadata({ params }: { params: { id: string } }) {
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

export default function Page({ params }: { params: { id: string } }) {
  return <ArticleRead id={params.id} />;
}
