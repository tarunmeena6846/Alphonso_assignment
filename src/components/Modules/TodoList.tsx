import { TodoContext } from "@/Context/TodoContext";
import { Button } from "@/components/ui/button";
import { Todo } from "@/lib/types";
import { Check, Delete } from "lucide-react";
import { useContext } from "react";

const TodoList = () => {
  const todoContext = useContext(TodoContext);
  if (!todoContext) {
    throw new Error("TodoContext not found");
  }
  const { todos, completeTodo, deleteTodo, filter, searchQuery } = todoContext;

  console.log("filter", filter);
  const filteredTodos = todos.filter((todo: Todo) => {
    const statusMatch =
      filter === "all" ||
      (filter === "complete" && todo.completed) ||
      (filter === "incomplete" && !todo.completed);

    const searchedTodos = todo.text
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return statusMatch && searchedTodos;
  });

  console.log("filteredTodos", filteredTodos);
  return (
    <>
      {filteredTodos.map((todo: Todo) => (
        <div
          key={todo.id}
          className={`flex w-full justify-between items-center border rounded-xl p-2 my-2 ${
            todo.completed ? "bg-green-200" : ""
          }`}
        >
          <h2>{todo.text}</h2>

          <div>
            <Button
              className="text-green-500 hover:text-green-600 shadow-none"
              onClick={() => completeTodo(todo.id)}
            >
              <Check />
            </Button>
            <Button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-600 shadow-none"
            >
              <Delete />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;
