import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        [...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
          </div>
        ))}
      </div>
    </main>
  );
}
