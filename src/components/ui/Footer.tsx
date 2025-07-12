import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-neutral-900 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Nannuru. All Rights Reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              A property of{" "}
              <Link href="https://www.youtube.com/channel/UCiIjpbV1aonM5F61JeiJ9gQ" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Janapriya Media
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              About
            </Link>
            <Link href="/articles" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Articles
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
