import ArticleRead from "@/components/ui/articleRead";
import { articles } from "@/lib/mockData";

export async function generateMetadata(props: any): Promise<Metadata> {
  const { params } = await props;
  const article = articles.find((a) => a.id === params.id);

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
  const article = articles.find((a) => a.id === params.id);
  const moreArticles = articles.filter((a) => a.id !== params.id).slice(0, 4);

  if (!article) {
    return <div>Article not found</div>;
  }

  return <ArticleRead id={params.id} more={moreArticles || []} article={article} />;
}
