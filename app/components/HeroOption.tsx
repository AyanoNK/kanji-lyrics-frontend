interface ISelect extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
}

export default function HeroOption({ value, ...props }: ISelect) {
  return (
    <button
      {...props}
      // className="flex items-center justify-center border p-4 border-gray-400 hover:border-gray-600 rounded"
      className="group flex h-min items-center justify-center p-1 text-center font-medium focus:z-10 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 focus:text-cyan-700 rounded-lg focus:ring-2"
    >
      <span className="flex items-center rounded-md text-xl px-4 py-2">
        {value}
      </span>
    </button>
  );
}
