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
}
