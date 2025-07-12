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

import { create } from 'zustand';
import { articles as mockArticles } from './mockData';

export const useArticleStore = create((set) => ({
  articles: [],
  fetchArticles: async () => {
    // Simulate API latency
    await new Promise((resolve) => setTimeout(resolve, 500));
    set({ articles: mockArticles });
  },
}));
