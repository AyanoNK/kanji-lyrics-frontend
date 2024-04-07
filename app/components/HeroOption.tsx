interface ISelect extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
}

export default function HeroOption({ value, ...props }: ISelect) {
  return (
    <button
      {...props}
      className="group flex h-min items-center justify-center p-1 text-center font-medium text-xl px-4 py-2 focus:z-10 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 focus:text-cyan-700 rounded focus:ring-2"
    >
      {value}
    </button>
  );
}
