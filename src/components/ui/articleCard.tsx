"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ArticleCard({
  imgUrl,
  Heading,
  subHeading,
  date,
  rating,
}) {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className="gap-5 justify-center items-center w-full h-auto flex flex-wrap"
      id="articlesWrapper"
    >
      <div
        className="bg-white dark:bg-neutral-900 w-[300px] h-[420px] flex flex-col rounded-xl shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1 m-4"
        aria-label="card-overlay-v3"
      >
        <div className="w-full h-[200px] flex-shrink-0 relative overflow-hidden rounded-t-xl">
          {imgUrl ? (
            <Image
              src={imgUrl}
              alt="Article card"
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-800" />
          )}
        </div>
        <div className="flex flex-col flex-grow p-5">
          <div className="flex-grow pb-5 mb-5 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold line-clamp-2 h-[3em] overflow-hidden dark:text-white">
              {Heading}
            </h3>
            <span className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
              {subHeading}
            </span>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="text-sm text-slate-400 dark:text-slate-300">
              {date}
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
                {rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}