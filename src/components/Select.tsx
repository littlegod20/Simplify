import { SelectProps } from "../types";
import { useOptionsContext } from "./useContext/ListContext";

const Select = ({ todoItem, onUpdateTodo }: SelectProps) => {
  const options = useOptionsContext();
  return (
    <>
      <select
        name="routine"
        className="p-2 rounded-md"
        value={todoItem.routine}
        onChange={(e) => onUpdateTodo(todoItem, e)}
      >
        {options?.map((option, index) => (
          <option key={index}>{option.label}</option>
        ))}
      </select>
    </>
  );
};

export default Select;
