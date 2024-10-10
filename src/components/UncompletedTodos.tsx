import { TodoProps } from "../types";

interface UncompletedTodosProps {
  unCompletedTodos: TodoProps[];
  onChecked: (
    e: React.ChangeEvent<HTMLInputElement>,
    a: Partial<TodoProps>
  ) => void;
}

const UncompletedTodos: React.FC<UncompletedTodosProps> = ({
  unCompletedTodos,
  onChecked,
}) => {
  return (
    <div className="w-1/2 bg-white shadow-md shadow-slate-600 rounded-md p-4">
      <h4 className="font-serif antialiased text-xl pb-4">Uncompleted Tasks</h4>
      {unCompletedTodos.map((item) => (
        <div key={item.id} className="flex justify-start space-x-4">
          <input
            type="checkbox"
            checked={item.isChecked}
            onChange={(e) => onChecked(e, item)}
          />
          <p className="">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default UncompletedTodos;
