interface CustomTypeProps {
  onOptionAdd: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addCustom: () => void;
}

const CustomType = ({ onOptionAdd, addCustom }: CustomTypeProps) => {
  return (
    <div className="flex justify-end gap-3">
      <input
        className="focus:outline-none focus-visible:ring-1 focus-visible:ring-black border rounded-md p-2 w-44"
        name="routine"
        onChange={(e) => onOptionAdd(e)}
        placeholder="add a custom type"
      />
      <button
        onClick={addCustom}
        className="bg-slate-700 text-white  hover:bg-slate-900"
      >
        +Add custom
      </button>
    </div>
  );
};

export default CustomType;
