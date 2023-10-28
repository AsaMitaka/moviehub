import { create } from 'zustand';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useLoginModal = create<LoginModalProps>((set) => ({
  isOpen: true,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useLoginModal;
