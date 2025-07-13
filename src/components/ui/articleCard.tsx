"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function ArticleCard({
  article,
}) {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className="bg-white dark:bg-neutral-900 w-[250px] rounded-xl shadow transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-1 m-4 flex-shrink-0"
      aria-label="card-overlay-v3"
    >
      <div className="w-full rounded-t-xl h-[250px] flex-shrink-0 relative overflow-hidden">
        {article.imgUrl ? (
          <Image
            src={article.imgUrl}
            alt="Article card"
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-t-xl" />
        )}
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="pb-5 mb-5 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold line-clamp-2 h-[3em] overflow-hidden dark:text-white">
            {article.Heading}
          </h3>
          <span className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
            {article.subHeading}
          </span>
        </div>
        <div className="flex items-center justify-between w-full mt-auto">
          <div className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-300">
            {article.author?.avatar_url ? (
              <Image
                src={article.author.avatar_url}
                alt={article.author.full_name || "Author Avatar"}
                width={20}
                height={20}
                className="rounded-full"
              />
            ) : (
              <User className="w-5 h-5" />
            )}
            <span>{article.author?.full_name || 'N/A'} - {article.date}</span>
          </div>
          <div className="flex items-center gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-bold text-black dark:text-white">
              {article.rating}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}