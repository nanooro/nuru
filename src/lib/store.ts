// store.ts
import { create } from "zustand";
import { supabase } from "@/lib/supabaseClient";

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
    const { data, error } = await supabase
      .from("Nannuru_articles_table")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching articles:", error);
      return;
    }

    set({ articles: data || [] });
  },
}));
