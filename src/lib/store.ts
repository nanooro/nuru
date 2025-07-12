import { create } from 'zustand';
import { articles as mockArticles } from './mockData'; // Import mock data

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
      set({ articles: data || [] });
    } catch (err: any) {
      console.error("❌ Real fetch failed:", err.message || err);
      console.log("Fallback to mock data.");
      set({ articles: mockArticles }); // Fallback to mock data
    }
  },
}));