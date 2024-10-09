import { Todo, TodoContextType } from "@/lib/types";
import { createContext, useState } from "react";
export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
  };

  const completeTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, completeTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
