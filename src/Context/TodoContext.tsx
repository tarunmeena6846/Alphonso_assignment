import { useUndoRedo } from "@/hooks/undoRedo";
import { Todo, TodoContextType } from "@/lib/types";
import { createContext, useEffect, useState } from "react";
export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const storedTodos = localStorage.getItem("todos");
  const initialTodos: Todo[] = storedTodos
    ? (JSON.parse(storedTodos) as Todo[])
    : [];
  const {
    present: todos,
    set: setTodos,
    undo,
    redo,
    canUndo,
    canRedo,
  } = useUndoRedo<Todo[]>(initialTodos);

  const [filter, setFilter] = useState<"all" | "incomplete" | "complete">(
    "all"
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  const addTodo = (todo: string) => {
    setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
  };

  const completeTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        completeTodo,
        deleteTodo,
        filter,
        setFilter,
        undo,
        redo,
        canUndo,
        canRedo,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
