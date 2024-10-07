import { SetStateAction } from "react";
import { OptionProps } from "../types";

interface TodoTextProps {
  text: string;
  setText: React.Dispatch<SetStateAction<string>>;
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: OptionProps[];
  handleAddTodo: () => void;
  routine: string;
}

const TodoText = ({
  text,
  options,
  routine,
  setText,
  onSelectChange,
  handleAddTodo,
}: TodoTextProps) => {
  return (
    <>
      <input
        className="focus:outline-none focus-visible:ring-1 focus-visible:ring-black border rounded-md p-2"
        placeholder="Add a new Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select
        name="routine"
        className="p-2 rounded-md"
        value={routine}
        onChange={(e) => onSelectChange(e)}
      >
        <option value="">Select type</option>
        {options.map((option, index) => (
          <option value={option.value} key={index}>
            {" "}
            {option.label}{" "}
          </option>
        ))}
        <option value="custom">Custom</option>
      </select>
      <div
        className="hover:bg-slate-700  bg-slate-900 transition-colors duration-300 ease-out text-white text-base flex justify-center items-center py-2 px-5 rounded hover:cursor-pointer"
        onClick={handleAddTodo}
      >
        +
      </div>
    </>
  );
};

export default TodoText;
