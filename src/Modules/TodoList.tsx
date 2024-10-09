import { TodoContext } from "@/Context/TodoContext";
import { Button } from "@/components/ui/button";
import { Todo } from "@/lib/types";
import { Check, Delete, Ticket } from "lucide-react";
import React, { useContext } from "react";

const TodoList = () => {
  const { todos, completeTodo, deleteTodo, filter } = useContext(TodoContext);

  console.log("filter", filter);
  return (
    <>
      {todos
        .filter((todo: Todo) => {
          if (filter === "complete") return todo.completed;
          if (filter === "incomplete") return !todo.completed;
          else return todo;
        })
        .map((todo: Todo) => (
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
