// write a filter provider

import { createContext, useState } from "react";

export const FilterContext = createContext<{
  filter: string;
  setFilters: React.Dispatch<React.SetStateAction<string>>;
}>({
  filter: "",
  setFilters: () => {},
});

export default function FilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filter, setFilter] = useState<string>("all");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
