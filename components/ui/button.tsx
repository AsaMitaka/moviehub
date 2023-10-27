import { useCallback } from 'react';

interface ButtonProps {
  disabled?: boolean;
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ disabled, label, onClick }) => {
  const handleClick = useCallback(() => {
    if (disabled) {
      return;
    }

    return onClick();
  }, [disabled, onClick]);

  return (
    <button className="" onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
