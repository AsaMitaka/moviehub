import { create } from 'zustand';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useSignupModal = create<SignupModalProps>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useSignupModal;
