import AlbumCard from "../components/album-card";
import { Album } from "../types/album";
import collection from "./data/collection.json";

export default function Home() {
  const albums = collection as Album[];
  const inCollection = albums.filter((album) => album.inCollection);
  const notInCollection = albums.filter((album) => !album.inCollection);

  return (
    <main className="grid grid-cols-6 gap-2 m-4 max-w-7xl">
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </main>
  );
}
