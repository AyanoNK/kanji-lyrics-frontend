interface ISelect extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
}

export default function HeroOption({ value, ...props }: ISelect) {
  return (
    <button
      {...props}
      className="flex items-center justify-center border p-4 border-gray-400 hover:border-gray-600 rounded"
    >
      {value}
    </button>
  );
}
