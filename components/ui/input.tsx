interface InputProps {
  disabled?: boolean;
  isRound?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  value: string;
}

const Input: React.FC<InputProps> = ({ disabled, isRound, onChange, type, placeholder, value }) => {
  return (
    <input
      className={`
      bg-neutral-200
      border-2
      border-green-300
      outline-none 
      text-lg p-2 
      text-black 
      transition
      w-full 
      ${isRound ? 'rounded-full' : 'rounded-md'}
      focus:border-2
      focus:border-green-500
      disabled:bg-neutral-500 disabled:opacity-70
      `}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};

export default Input;
