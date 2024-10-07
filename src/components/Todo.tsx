import { useEffect, useState } from "react";

import { OptionProps, TodoProps } from "../types";
import List from "./List";

const defaultOptions: OptionProps[] = [
  { value: "personal", label: "Personal" },
  { value: "work", label: "Work" },
  { value: "shopping", label: "Shopping" },
];
const Todo = () => {
  const [text, setText] = useState<string>("");
  const [routine, setRoutine] = useState<string>("");
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [newOption, setNewOption] = useState<OptionProps | null>();
  const [options, setOptions] = useState<OptionProps[]>(defaultOptions);

  const handleAddTodo = () => {
    if (!text) {
      return null;
    } else if (text && routine) {
      setTodos((prev: TodoProps[]) => [
        { id: Date.now().toString(), text, routine, isEditting: false },
        ...prev,
      ]);
      setText("");
    }
  };

  const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const addedCustom = e.target.value;
    setNewOption({ value: addedCustom, label: addedCustom.toUpperCase() });
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "custom") {
      setRoutine(e.target.value);
      setIsCustom(true);
    } else {
      setRoutine(e.target.value);
      setIsCustom(false);
    }
  };

  const addCustom = () => {
    if (newOption) {
      setOptions((prevOptions) => [...prevOptions, newOption]);
    }
    setNewOption(null);
    setIsCustom(false);
  };

  useEffect(() => {
    // console.log("new to-do:", text);
    // console.log("new routine:", routine);
    // console.log("To-do list", todos);
    console.log("selected routine:", routine);
  });
  return (
    <div>
      <div className="flex flex-col items-start border p-10 shadow-xl shadow-gray-300 rounded-md">
        <header className="text-lg font-bold">Todo List</header>
        <section className="w-full flex flex-col">
          <div className="flex gap-3 p-4">
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
          </div>

          {isCustom && (
            <div className="flex justify-end gap-3">
              <input
                className="focus:outline-none focus-visible:ring-1 focus-visible:ring-black border rounded-md p-2 w-44"
                name="routine"
                onChange={(e) => onOptionChange(e)}
                placeholder="add a custom type"
              />
              <button
                onClick={addCustom}
                className="bg-slate-700 text-white  hover:bg-slate-900"
              >
                +Add custom
              </button>
            </div>
          )}
        </section>

        <List todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default Todo;
