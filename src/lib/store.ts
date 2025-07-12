

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
