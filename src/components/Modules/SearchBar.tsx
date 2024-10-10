import { TodoContext } from "@/Context/TodoContext";
import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";

export function Searchbar() {
  const todoContext = useContext(TodoContext);
  if (!todoContext) {
    throw new Error("TodoContext not found");
  }
  const { setSearchQuery } = todoContext;
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setSearchQuery(inputValue);
    }, 500);
  }, [inputValue, setSearchQuery]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("search query", e.target.value);
    setInputValue(e.target.value);
  };
  return (
    <Input
      className="rounded-2xl"
      type="search"
      placeholder="Search..."
      onChange={handleSearch}
    />
  );
}
