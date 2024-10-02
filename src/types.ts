export interface TodoProps {
  id: string;
  text: string;
  routine: string;
}

export interface ListProps {
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}
