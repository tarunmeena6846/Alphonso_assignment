import { Button } from "@/components/ui/button";
import { Searchbar } from "./SearchBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useContext } from "react";
import { TodoContext } from "@/Context/TodoContext";

export function Landing() {
  const todoContext = useContext(TodoContext);
  if (!todoContext) {
    throw new Error("TodoContext not found");
  }
  const { setFilter, undo, redo, canUndo, canRedo } = todoContext;

  const handleButtonToggle = (type: "all" | "incomplete" | "complete") => {
    setFilter(type);
  };
  return (
    <div className="mx-auto flex min-h-screen flex-col items-center p-4 md:p-24">
      <div className="flex md:flex-row flex-col w-full justify-between mb-7 space-y-3 md:space-y-0">
        <div>
          <h2 className="order-1 md:order-none text-2xl">Today</h2>
        </div>
        <div className="w-full md:w-2/5 order-2 md:order-none">
          <Searchbar />
        </div>
        <div className="space-x-2 order-3 md:order-none">
          <Button
            className="rounded-xl focus:bg-green-500"
            onClick={() => handleButtonToggle("all")}
          >
            All
          </Button>
          <Button
            className="rounded-xl focus:bg-green-500"
            onClick={() => handleButtonToggle("incomplete")}
          >
            Incomplete
          </Button>
          <Button
            className="rounded-xl focus:bg-green-500"
            onClick={() => handleButtonToggle("complete")}
          >
            Completed
          </Button>
          {(canRedo || canUndo) && (
            <>
              <Button
                onClick={undo}
                disabled={!canUndo}
                className="rounded-xl focus:bg-green-500"
              >
                Undo
              </Button>
              <Button
                onClick={redo}
                disabled={!canRedo}
                className="rounded-xl focus:bg-green-500"
              >
                Redo
              </Button>
            </>
          )}
        </div>
      </div>
      <TodoList />
      <TodoForm />
    </div>
  );
}
