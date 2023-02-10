"use client";

import FilterButton from "./filter-button";

export default function Filters({}: {}) {
  return (
    <div className="flex items-center gap-5 px-10">
      <div className="text-gray-600 dark:text-gray-400">Show</div>
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
