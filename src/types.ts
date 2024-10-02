export interface TodoProps {
  id: string;
  text: string;
  routine: string;
  isEditting: boolean;
}

export interface ListProps {
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}
