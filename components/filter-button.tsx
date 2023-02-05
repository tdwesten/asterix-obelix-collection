import { MouseEventHandler } from "react";

export default function FiltersButton({
  value,
  isActive,
  onFilterChange,
  label,
}: {
  value: string;
  isActive: boolean;
  label: string;
  onFilterChange: MouseEventHandler<HTMLButtonElement>;
}) {
  const classes = [
    "px-5 py-3 border-l border-gray-300  first-of-type:border-l-0",
  ];

  classes.push(isActive ? "bg-slate-200 font-bold" : "hover:bg-slate-200");

  return (
    <button
      value={value}
      onClick={onFilterChange}
      className={classes.join(" ")}
    >
      {label}
    </button>
  );
}
