import { create } from "zustand";

type Article = {
  id: number;
  Heading: string;
  subHeading: string;
  imgUrl: string;
  created_at: string;
};

type ArticleStore = {
  articles: Article[];
  fetchArticles: () => Promise<void>;
};

export const useArticleStore = create<ArticleStore>((set) => ({
  articles: [],
  fetchArticles: async () => {
    try {
      console.log("🔄 Fetching real articles…");
      const res = await fetch(
        "https://dhnrkykrkxucnmymcekb.supabase.co/functions/v1/get-articles",
        {
          headers: {
            apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            Authorization: `Bearer ${process.env
              .NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
          },
        }
      );

      if (!res.ok) throw new Error(`status ${res.status}`);

      const data = await res.json();
      console.log("✅ Articles received:", data);
      set({ articles: data || [] });
    } catch (err: any) {
      console.error("❌ Real fetch failed:", err.message || err);
    }
  },
}));
