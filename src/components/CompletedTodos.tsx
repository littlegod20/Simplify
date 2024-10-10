import { TodoProps } from "../types";

interface CompletedTodosProps {
  completedTodos: TodoProps[];
}

const CompletedTodos: React.FC<CompletedTodosProps> = ({ completedTodos }) => {
  return (
    <div className="w-1/2 bg-white shadow-md shadow-slate-600 rounded-md p-4">
      <h4 className="font-serif antialiased text-xl pb-4">Completed Tasks</h4>
      {completedTodos.map((item) => (
        <div
          key={item.id}
          className="flex justify-start space-x-4 boder-b-2 border-slate-600"
        >
          <input type="checkbox" checked readOnly />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CompletedTodos;
