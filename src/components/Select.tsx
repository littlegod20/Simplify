import { SelectProps } from "../types";

const Select = ({ todoItem, onUpdateTodo }: SelectProps) => {
  return (
    <>
      <select
        name="routine"
        className="p-2 rounded-md"
        value={todoItem.routine}
        onChange={(e) => onUpdateTodo(todoItem, e)}
      >
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="shopping">Shopping</option>
      </select>
    </>
  );
};

export default Select;
