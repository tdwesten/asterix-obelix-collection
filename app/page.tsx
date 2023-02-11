import AlbumGrid from "../components/album-grid";
import { Album } from "../types/album";
import collection from "./data/collection.json";

function Page({ params }: { params: { filter: string } }) {
  let albums: Album[] = collection as Album[];

  return (
    <>
      <AlbumGrid albums={albums} />
      <div className="p-4 text-xs text-center text-gray-400">
        All images are property of their respective owners.
      </div>
    </>
  );
}

export default Page;
