import { useCallback } from 'react';

interface ButtonProps {
  disabled?: boolean;
  label: string;
  large?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ disabled, label, large, onClick }) => {
  const handleClick = useCallback(() => {
    if (disabled) {
      return;
    }

    return onClick();
  }, [disabled, onClick]);

  return (
    <button
      className={`px-2 py-1 border-1 border-neutral-500 text-white 
      ${large ? 'w-full' : 'w-fit'}
      text-lg bg-green-400 cursor-pointer hover:bg-green-600 disabled:bg-green-200`}
      onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
