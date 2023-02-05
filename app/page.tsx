import React from "react";
import AlbumCard from "../components/album-card";
import Filters from "../components/filters";
import { Album } from "../types/album";
import collection from "./data/collection.json";

export default function Home() {
  const albums = collection as Album[];
  const inCollection = albums.filter((album) => album.inCollection);
  const notInCollection = albums.filter((album) => !album.inCollection);

  return (
    <div className="flex flex-col mx-auto max-w-7xl">
      <header className="sticky top-0 z-30 flex flex-col justify-center p-10 bg-white">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span className="font-normal">Thomas&apos;</span> Asterix & Obelix
          <span className="font-normal">Collection</span>
        </h2>
        <p className="text-sm text-gray-500">
          {inCollection.length} albums collected out of the {albums.length}{" "}
          published albums. Grayed out albums are not (jet) in my collection.
        </p>

        {/* <Filters onFilterChange={} /> */}
      </header>
      <main className="mx-10 my-5">
        <section className="grid grid-cols-2 col-span-9 gap-4 p-10 rounded sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 bg-slate-200">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </section>
      </main>
    </div>
  );
}
