import { ListProps } from "../types";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { useState } from "react";

const List: React.FC<ListProps> = ({ todos, setTodos }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <>
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
    </>
  );
};

export default List;
