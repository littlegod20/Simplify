import { ListProps, TodoProps } from "../types";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { IoIosSave } from "react-icons/io";

const List: React.FC<ListProps> = ({ todos, setTodos }) => {
  const toggleEdit = (a: Partial<TodoProps>) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === a.id ? { ...todo, isEditting: !todo.isEditting } : todo
      )
    );
  };

  const onUpdateTodo = (
    a: Partial<TodoProps>,
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updateTodo = todos.find((item) => item.id === a.id);
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo === updateTodo ? { ...updateTodo, [name]: value } : todo
      )
    );
  };

  // const onUpdateTodoSelect = (
  //   a: Partial<TodoProps>,
  //   e: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   const updateTodo = todos.find((item) => item.id === a.id);
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) =>
  //       todo === updateTodo ? { ...updateTodo, routine: e.target.value } : todo
  //     )
  //   );
  // };

  return (
    <>
      <section className="pt-6 w-full ">
        {todos.map((item, index) => (
          <div
            className="flex flex-row justify-between items-center w-full pb-4"
            key={index}
          >
            {item.isEditting ? (
              <input
                name="text"
                className="focus:outline-none focus-visible:ring-1 focus-visible:ring-black border rounded-md p-2 w-44"
                value={item.text}
                onChange={(e) => onUpdateTodo(item, e)}
              />
            ) : (
              <div className="flex flex-row gap-2">
                <input type="checkbox" />
                <p className="max-w-44 truncate"> {item.text} </p>
              </div>
            )}

            <div className="flex flex-row justify-center items-center space-x-2">
              {item.isEditting ? (
                <p>
                  <select
                    name="routine"
                    className="p-2 rounded-md"
                    value={item.routine}
                    onChange={(e) => onUpdateTodo(item, e)}
                  >
                    <option value="personal">Personal</option>
                    <option value="work">Work</option>
                    <option value="shopping">Shopping</option>
                  </select>
                </p>
              ) : (
                <p className=" flex justify-center items-center hover:bg-slate-100 p-2 text-xs border rounded-md ">
                  {/* add a functionality that when the checkbox is ticked the color of the todo changes to green */}
                  {item.routine}
                </p>
              )}
              <div
                className="rounded-md  hover:bg-slate-100 transition-all duration-300 ease-in p-3"
                onClick={() => {
                  setTodos(todos.filter((a) => a.id !== item.id));
                }}
              >
                <RiDeleteBin6Line />
              </div>
              <div className="rounded-md  hover:bg-slate-100 transition-all duration-300 ease-in p-3">
                {item.isEditting ? (
                  <IoIosSave onClick={() => toggleEdit(item)} />
                ) : (
                  <MdEdit onClick={() => toggleEdit(item)} />
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default List;
