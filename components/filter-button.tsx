"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FiltersButton({
  value,
  isActive,
  label,
}: {
  value: string;
  isActive: boolean;
  label: string;
}) {
  const pathname = usePathname();

  const classes = [
    "px-2  sm:px-5 py-3 border-l dark:text-gray-400 border-gray-300 dark:border-gray-800  first-of-type:border-l-0",
  ];

  classes.push(
    pathname === `/${value}` || (pathname === "/" && value === "all")
      ? "bg-slate-200 dark:bg-gray-700 font-bold"
      : "hover:bg-slate-200 hover:dark:bg-gray-600"
  );

  const href = () => {
    if ("all" === value) {
      return "/";
    }

    return `/${value}`;
  };

  return (
    <Link href={href()} className={classes.join(" ")}>
      {label}
    </Link>
  );
}
