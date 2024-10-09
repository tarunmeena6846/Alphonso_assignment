import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function Searchbar() {
  return (
    // <div className="flex items-center">
    <Input className="rounded-2xl" type="search" placeholder="Search..." />
    //   <Search />
    // </div>
  );
}
