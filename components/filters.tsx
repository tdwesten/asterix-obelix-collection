"use client";

import React, {
  ChangeEventHandler,
  MouseEvent,
  MouseEventHandler,
} from "react";
import FilterButton from "./filter-button";

export default function Filters({
  onFilterChange,
}: {
  onFilterChange: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className="flex gap-5 mt-10">
      <div className="p-3 text-gray-600">Show</div>
      <div className="flex overflow-hidden font-mono text-sm border border-gray-400 rounded ">
        <FilterButton
          value="all"
          label="All"
          onFilterChange={onFilterChange}
          isActive={true}
        />

        <FilterButton
          value="inCollection"
          label="In Collection"
          onFilterChange={onFilterChange}
          isActive={false}
        />

        <FilterButton
          value="notInCollection"
          label="Not in Collection"
          onFilterChange={onFilterChange}
          isActive={false}
        />
      </div>
    </div>
  );
}
