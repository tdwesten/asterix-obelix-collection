import AlbumGrid from "../components/album-grid";
import { Album } from "../types/album";
import collection from "./data/collection.json";

function Page({ params }: { params: { filter: string } }) {
  let albums: Album[] = collection as Album[];

  return (
    <>
      <AlbumGrid albums={albums} />
    </>
  );
}

export default Page;
