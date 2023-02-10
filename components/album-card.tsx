import React from "react";
import Image from "next/image";
import { Album } from "../types/album";

export default function AlbumCard({ album }: { album: Album }) {
  function getClasses(): string | undefined {
    let classes = "rounded shadow-lg bg-white overflow-hidden dark:bg-gray-800";

    return classes;
  }

  return (
    <div className={getClasses()}>
      <Image
        src={album.cover}
        alt={album.title}
        width={300}
        height={300}
        className={album.inCollection ? "" : " grayscale opacity-75"}
      />
      <div className="p-3 text-center">
        <h2 className="mb-2 font-medium leading-tight dark:text-gray-300">
          {album.title}
        </h2>
        <p className="font-serif text-sm italic text-gray-500">
          {album.releaseDate}
        </p>
      </div>
    </div>
  );
}
