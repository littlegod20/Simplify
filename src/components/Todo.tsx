import { useState } from "react";

import { OptionProps, TodoProps } from "../types";
import List from "./List";
import CustomType from "./CustomType";
import TodoText from "./TodoText";

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

  return (
    <div>
      <div className="flex flex-col items-start border p-10 shadow-xl shadow-gray-300 rounded-md">
        <header className="text-lg font-bold">Todo List</header>
        <section className="w-full flex flex-col">
          <div className="flex gap-3 p-4">
            <TodoText
              text={text}
              options={options}
              routine={routine}
              onSelectChange={onSelectChange}
              handleAddTodo={handleAddTodo}
              setText={setText}
            />
          </div>

          {isCustom && (
            <CustomType addCustom={addCustom} onOptionChange={onOptionChange} />
          )}
        </section>

        <List todos={todos} setTodos={setTodos} options={options} />
      </div>
    </div>
  );
};

export default Todo;
