const List = () => {
  return (
    <div className="flex flex-col items-start border p-6 shadow-lg shadow-gray-500">
      <header className="text-lg font-bold">Todo List</header>
      <section className="w-full flex justify-center gap-3">
        <input
          className="focus:outline-none focus-visible:ring-1 focus-visible:ring-black border rounded-md p-2"
          placeholder="Add a new Todo"
        />
        <select className="p-2 rounded-md">
          <option>Personal</option>
          <option>Work</option>
          <option>Shopping</option>
        </select>

        <div className="hover:bg-slate-700 bg-slate-900 transition-colors duration-300 ease-out text-white text-base flex justify-center items-center py-2 px-5 rounded hover:cursor-pointer focus-within:">
          +
        </div>
      </section>
    </div>
  );
};

export default List;
