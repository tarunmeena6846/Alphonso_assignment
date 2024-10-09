import { Button } from "@/components/ui/button";
import { Searchbar } from "./SearchBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export function Landing() {
  return (
    <div className="mx-auto flex min-h-screen flex-col items-center p-24">
      <div className="flex w-full justify-between">
        <div>
          <h2 className="text-2xl">Today</h2>
        </div>
        <div className="w-2/5">
          <Searchbar />
        </div>
        <div className="space-x-2">
          <Button className="rounded-xl focus:bg-green-500">All</Button>
          <Button className="rounded-xl focus:bg-green-500">Incomplete</Button>
          <Button className="rounded-xl focus:bg-green-500">Completed</Button>
        </div>
      </div>
      <TodoList />
      <TodoForm />
    </div>
  );
}
