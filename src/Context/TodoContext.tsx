import { useUndoRedo } from "@/hooks/undoRedo";
import { Todo, TodoContextType } from "@/lib/types";
import { createContext, useEffect, useState } from "react";
export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    present: todos,
    set: setTodos,
    undo,
    redo,
    canUndo,
    canRedo,
  } = useUndoRedo<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [filter, setFilter] = useState<"all" | "incomplete" | "complete">(
    "all"
  );

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
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
