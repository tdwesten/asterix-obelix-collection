import { Album } from "../types/album";
import AlbumCard from "./album-card";

export default function AlbumGrid({ albums }: { albums: Album[] }) {
  return (
    <main className="my-5 sm:mx-10">
      <section className="grid grid-cols-2 col-span-9 gap-4 p-4 sm:rounded sm:p-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 bg-slate-200 dark:bg-gray-700">
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </section>
    </main>
  );
}
