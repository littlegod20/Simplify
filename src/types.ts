export interface TodoProps {
  id: string;
  text: string;
  routine: string;
  isEditting: boolean;
}

export interface ListProps {
  todos: TodoProps[];
  options: OptionProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

export type SelectProps = {
  todoItem: Partial<TodoProps>;
  options: OptionProps[];
  onUpdateTodo: (
    todoItem: Partial<TodoProps>,
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

export interface OptionProps {
  value: string;
  label: string;
}
