import Image from "next/image";
import { Album } from "../types/album";

export default function AlbumCard({ album }: { album: Album }) {
  return (
    <div className="p-4 transition-transform duration-200 ease-in-out bg-white rounded-lg shadow-lg hover:shadow-2xl hover:z-10 hover:scale-110">
      <Image src={album.cover} alt={album.title} width={300} height={300} />
      {album.id}
      <h2>{album.title}</h2>
      <p>{album.releaseDate}</p>
      <p>{album.scenario}</p>
      <p>{album.drawings}</p>
    </div>
  );
}
