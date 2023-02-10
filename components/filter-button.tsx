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
    "px-5 py-3 border-l border-gray-300  first-of-type:border-l-0",
  ];

  classes.push(
    pathname === `/${value}` ? "bg-slate-200 font-bold" : "hover:bg-slate-200"
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
