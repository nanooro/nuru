import Image from "next/image";
import { users } from "@/lib/mockData";

export default function AuthorInfo({ authorId }: { authorId: string }) {
  const author = users.find((user) => user.id === authorId);

  if (!author) {
    return null;
  }

  return (
    <div className="flex items-center gap-3 mt-6 mb-8">
      <Image
        src={author.avatar_url}
        alt={author.username}
        width={48}
        height={48}
        className="rounded-full"
      />
      <div>
        <p className="font-semibold text-lg text-gray-900 dark:text-white">{author.username}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Author</p>
      </div>
    </div>
  );
}
