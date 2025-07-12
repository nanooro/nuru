import { motion } from "framer-motion";

export default function Hero({ theme, articlesRef }: { theme: string; articlesRef: React.RefObject<HTMLDivElement> }) {
  const handleScroll = () => {
    if (articlesRef.current) {
      articlesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-10rem)] py-20 relative">
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold">
        News and{" "}
        <span className="inline-block">
          <span className="bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">
            entertainment
          </span>
          <span className="block h-2 bg-gradient-to-r from-pink-500 to-yellow-500 mt-2"></span>
        </span>
      </h1>
      <motion.div
        className="absolute bottom-10 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        onClick={handleScroll}
      >
        <svg
          className="w-10 h-10 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7" />
        </svg>
      </motion.div>
    </div>
  );
}