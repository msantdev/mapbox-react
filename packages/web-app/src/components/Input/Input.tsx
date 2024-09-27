import { twMerge } from "tailwind-merge";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string
}

const Input = ({ value, onChange, placeholder, className = "" }: InputProps) => {
  return (
    <input
      data-testid="input-field"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={twMerge("m-2 p-2 text-base font-medium border rounded-xl w-full bg-gray-50 focus:outline-none border-green-brand", className)}
    />
  );
};

export default Input;
