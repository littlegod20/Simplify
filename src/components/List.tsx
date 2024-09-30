import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

interface TodoProps {
  [key: string]: string;
}

const List = () => {
  const [text, setText] = useState<string>("");
  const [routine, setRoutine] = useState<string>("personal");
  const [todos, setTodos] = useState<TodoProps[]>([]);
  // const [isAdded, setIsAdded] = useState<boolean>(false)

  const handleAddTodo = () => {
    if (!text) {
      return null;
    } else if (text && routine) {
      setTodos((prev: TodoProps[]) => [...prev, { [text]: routine }]);
      setText("");
    }
  };

  useEffect(() => {
    console.log("new to-do:", text);
    console.log("new routine:", routine);
    console.log("To-do list", todos);
  });
  return (
    <div>
      <div className="flex flex-col items-start border p-10 shadow-xl shadow-gray-300 rounded-md">
        <header className="text-lg font-bold">Todo List</header>
        <section className="w-full flex justify-center gap-3">
          <input
            className="focus:outline-none focus-visible:ring-1 focus-visible:ring-black border rounded-md p-2"
            placeholder="Add a new Todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <select
            className="p-2 rounded-md"
            onChange={(e) => setRoutine(e.target.value)}
            value={routine}
          >
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="shopping">Shopping</option>
          </select>

          <div
            className="hover:bg-slate-700 bg-slate-900 transition-colors duration-300 ease-out text-white text-base flex justify-center items-center py-2 px-5 rounded hover:cursor-pointer focus-within:"
            onClick={handleAddTodo}
          >
            +
          </div>
        </section>
        <section className="pt-6 w-full ">
          {todos.map((item, index) => (
            <div
              className="flex flex-row justify-between items-center w-full pb-4"
              key={index}
            >
              <div className="flex flex-row gap-2">
                <input type="checkbox" />
                <p>{Object.keys(item)}</p>
              </div>

              <div className="flex flex-row">
                <p className=" flex justify-center items-center hover:bg-slate-100 p-2 text-xs border rounded-md ">
                  {Object.values(item)}
                </p>
                <button>
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default List;
