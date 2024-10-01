import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { IoIosSave } from "react-icons/io";

interface TodoProps {
  id: string;
  text: string;
  routine: string;
}

const List = () => {
  const [text, setText] = useState<string>("");
  const [routine, setRoutine] = useState<string>("personal");
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  // const [update, setUpdate] = useState<TodoProps[]>([])

  const handleAddTodo = () => {
    if (!text) {
      return null;
    } else if (text && routine) {
      setTodos((prev: TodoProps[]) => [
        { id: Date.now().toString(), text, routine },
        ...prev,
      ]);
      setText("");
    }
  };

  // const handleUpdateTodo = (e:React.ChangeEvent<HTMLInputElement>, item) => {
  //   if (text){
  //     item.text = e.target.value
  //     setUpdate((prev)=> [...prev, ])
  //   }
  // }

  const toggleEdit = () => {
    setIsEdit(!isEdit);
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
              {isEdit ? (
                <input
                  className="focus:outline-none focus-visible:ring-1 focus-visible:ring-black border rounded-md p-2"
                  // value={item.text}
                />
              ) : (
                <div className="flex flex-row gap-2">
                  <input type="checkbox" />
                  <p> {item.text} </p>
                </div>
              )}

              <div className="flex flex-row justify-center items-center space-x-2">
                <p className=" flex justify-center items-center hover:bg-slate-100 p-2 text-xs border rounded-md ">
                  {/* add a functionality that when the checkbox is ticked the color of the todo changes to green */}
                  {item.routine}
                </p>
                <div
                  className="rounded-md  hover:bg-slate-100 transition-all duration-300 ease-in p-3"
                  onClick={() => {
                    setTodos(todos.filter((a) => a.id !== item.id));
                  }}
                >
                  <RiDeleteBin6Line />
                </div>
                <div className="rounded-md  hover:bg-slate-100 transition-all duration-300 ease-in p-3">
                  {isEdit ? (
                    <IoIosSave onClick={toggleEdit} />
                  ) : (
                    <MdEdit onClick={toggleEdit} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default List;
