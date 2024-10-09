import { TodoContext } from "@/Context/TodoContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, useContext } from "react";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-4 w-full">
      <Input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="w-full p-2 border rounded-xl"
        placeholder="Add a new todo..."
        required
      />
      <Button
        type="submit"
        className="mt-2 w-full bg-black text-white p-2 rounded-xl hover:bg-gray-600"
      >
        Add Todo
      </Button>
    </form>
  );
};

export default TodoForm;
