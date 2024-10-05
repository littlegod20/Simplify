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

export type SelectProps = {
  todoItem: Partial<TodoProps>;
  onUpdateTodo: (
    todoItem: Partial<TodoProps>,
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
};
