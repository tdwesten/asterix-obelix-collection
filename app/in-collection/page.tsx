import AlbumGrid from "../../components/album-grid";
import { Album } from "../../types/album";
import collection from "./../data/collection.json";

export default function InCollection({}: {}) {
  let albums: Album[] = collection as Album[];

  const inCollection = albums.filter((album) => album.inCollection);
  return (
    <>
      <AlbumGrid albums={inCollection} />
    </>
  );
}
