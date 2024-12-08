import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/PNu4lvsAzqnUQSaKiDMjzHPhe8WUYKSpkj7T4oxV3AbusDEy",
  "https://utfs.io/f/PNu4lvsAzqnUMtMHUBGIlOjTf94Q5G0NrgxeuZpbY7aJ2DHv",
  "https://utfs.io/f/PNu4lvsAzqnUrv21lzEOdKRunj6WspMvSEChzTgH3BaZPblA",
  "https://utfs.io/f/PNu4lvsAzqnUZoQh8GV1qn8MgXOwcW7rSbRx4yaeHN3hJAoF",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
