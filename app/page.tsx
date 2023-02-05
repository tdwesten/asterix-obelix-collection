import React from "react";
import AlbumCard from "../components/album-card";
import Filters from "../components/filters";
import { Album } from "../types/album";
import collection from "./data/collection.json";

export default function Home() {
  const albums = collection as Album[];
  const inCollection = albums.filter((album) => album.inCollection);
  const notInCollection = albums.filter((album) => !album.inCollection);

  function handleFilterChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const filter = event.target.value;

    switch (filter) {
      case "in-collection":
        return inCollection;
      case "not-in-collection":
        return notInCollection;
      default:
        return albums;
    }
  }

  return (
    <main className="grid grid-cols-12 gap-2 m-10">
      <section className="sticky top-0 col-span-3">
        <h2 className="text-2xl font-bold">Asterix & Obelix</h2>
        <h2 className="text-xl font-medium">Collection</h2>

        <Filters onFilterChange={handleFilterChange} />
      </section>
      <section className="grid grid-cols-2 col-span-9 gap-4 p-10 rounded sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 bg-slate-200">
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </section>
    </main>
  );
}
