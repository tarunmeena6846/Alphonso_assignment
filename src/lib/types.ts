export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: string) => void;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  filter: "all" | "incomplete" | "complete";
  setFilter: (type: "all" | "incomplete" | "complete") => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}
