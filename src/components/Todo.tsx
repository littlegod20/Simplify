import { useState } from "react";

import { OptionProps, TodoProps } from "../types";
import List from "./List";
import CustomType from "./CustomType";
import TodoText from "./TodoText";
import { ListContext } from "./useContext/ListContext";

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

  const onOptionAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const addedCustom = e.target.value;
    setNewOption({
      value: addedCustom,
      label: addedCustom.charAt(0).toUpperCase() + addedCustom.slice(1),
    });
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
      setRoutine(newOption.value); // this is placed here so that after user has added the custom routine, the selector automatically switches to the new custom value
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
            <CustomType addCustom={addCustom} onOptionAdd={onOptionAdd} />
          )}
        </section>

        <ListContext.Provider value={options}>
          <List todos={todos} setTodos={setTodos} />
        </ListContext.Provider>
      </div>
    </div>
  );
};

export default Todo;
