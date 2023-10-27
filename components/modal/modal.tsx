import { useCallback } from 'react';
import Button from '../ui/button';

interface ModalProps {
  actionLabel: string;
  body?: React.ReactElement;
  disabled?: boolean;
  footer?: React.ReactElement;
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  label?: string;
}

const Modal: React.FC<ModalProps> = ({
  actionLabel,
  body,
  disabled,
  footer,
  isOpen,
  onClose,
  onSubmit,
  label,
}) => {
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    return onSubmit();
  }, [disabled, onSubmit]);

  return (
    <div>
      <div>{label}</div>

      <div>
        <Button disabled={disabled} label={actionLabel} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Modal;
