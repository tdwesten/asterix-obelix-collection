import React, { ChangeEventHandler } from "react";

export default function Filters({
  onFilterChange,
}: {
  onFilterChange: ChangeEventHandler<HTMLSelectElement>;
}) {
  function getClasses(): string | undefined {
    let classes = "mt-10";

    return classes;
  }

  return (
    <div className={getClasses()}>
      <div>
        <label htmlFor="filter-in-collection">Show:</label>
        <select
          name="filter-in-collection"
          id="filter-in-collection"
          // onChange={onFilterChange}
        >
          <option value="all">All albums</option>
          <option value="in-collection">In collection</option>
          <option value="not-in-collection">Not (jet) in collection</option>
        </select>
      </div>
    </div>
  );
}
