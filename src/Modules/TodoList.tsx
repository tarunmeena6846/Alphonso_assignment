import { TodoContext } from "@/Context/TodoContext";
import { Button } from "@/components/ui/button";
import { Check, Delete, Ticket } from "lucide-react";
import React, { useContext } from "react";

const TodoList = () => {
  const { todos, completeTodo, deleteTodo } = useContext(TodoContext);

  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          onClick={() => completeTodo(todo.id)}
          className={`flex w-full justify-between items-center mt-7 border rounded-xl p-2 ${
            todo.completed ? "bg-green-200" : ""
          }`}
        >
          <h2
          // onClick={() => completeTodo(todo.id)}
          >
            {todo.text}
          </h2>

          <div>
            <Button className="text-green-500 hover:text-green-600 shadow-none">
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
