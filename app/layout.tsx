import "./globals.css";
import React from "react";
import { Inter } from "@next/font/google";
import collection from "./data/collection.json";
import { Album } from "../types/album";
import Filters from "../components/filters";
import { AnalyticsWrapper } from "../components/analytics";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let albums: Album[] = collection as Album[];
  const inCollection = albums.filter((album) => album.inCollection);
  const notInCollection = albums.filter((album) => !album.inCollection);

  return (
    <html lang="en" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-gray-800">
        <div className="flex flex-col mx-auto max-w-7xl">
          <header className="sticky top-0 z-30 flex flex-col justify-center p-10 bg-white dark:bg-gray-800">
            <h2 className="flex items-center gap-2 text-2xl font-bold dark:text-gray-100">
              <span className="font-normal ">Thomas&apos;</span> Asterix &
              Obelix
              <span className="font-normal">Collection</span>
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {inCollection.length} albums collected out of the {albums.length}{" "}
              published albums. Grayed out albums({notInCollection.length}) are
              not (jet) in my collection.
            </p>
          </header>
          <Filters />
          {children}
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
