export interface TodoProps {
  id: string;
  text: string;
  routine: string;
  isEditting: boolean;
  isChecked?: boolean;
}

export interface ListProps {
  todos: TodoProps[];
  onChecked: (
    e: React.ChangeEvent<HTMLInputElement>,
    a: Partial<TodoProps>
  ) => void;
  // isChecked: boolean;
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

export type SelectProps = {
  todoItem: Partial<TodoProps>;
  onUpdateTodo: (
    todoItem: Partial<TodoProps>,
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

export interface OptionProps {
  value: string;
  label: string;
}
