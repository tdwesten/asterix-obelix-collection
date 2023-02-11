"use client";

import FilterButton from "./filter-button";

export default function Filters({}: {}) {
  return (
    <div className="flex flex-col items-center gap-5 px-4 sm:flex-row sm:px-10 sm:text-base">
      <div className="text-gray-600 dark:text-gray-300">Filters:</div>
      <div className="flex overflow-hidden font-mono text-sm border border-gray-400 rounded ">
        <FilterButton value="all" label="All" isActive={true} />

        <FilterButton
          value="in-collection"
          label="In Collection"
          isActive={false}
        />

        <FilterButton
          value="not-in-collection"
          label="Not in Collection"
          isActive={false}
        />
      </div>
    </div>
  );
}
