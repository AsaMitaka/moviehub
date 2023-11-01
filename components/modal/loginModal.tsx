import { useCallback, useState } from 'react';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';

import Modal from './modal';
import Input from '../ui/input';
import useSignupModal from '@/hooks/useSignupModal';
import useLoginModal from '@/hooks/useLoginModal';

const LoginModal = () => {
  const loginModal = useLoginModal();
  const signUpModal = useSignupModal();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const bodyContent = (
    <div className="flex flex-col gap-2">
      <Input
        disabled={isLoading}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        type="email"
        value={email}
      />
      <Input
        disabled={isLoading}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type="password"
        value={password}
      />
    </div>
  );

  const handleToggle = useCallback(() => {
    if (isLoading) {
      return;
    }

    loginModal.onClose();
    signUpModal.onOpen();
  }, [isLoading, loginModal, signUpModal]);

  const footerContent = (
    <div className="flex items-center gap-3">
      <p className="text-lg text-black">You do not have an account?</p>
      <span
        className="text-green-400 cursor-pointer hover:underline hover:text-green-600"
        onClick={handleToggle}>
        Sign Up
      </span>
    </div>
  );

  const handleSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      signIn('credentials', { email, password });
      toast.success('Success signup');
      loginModal.onClose();
    } catch (error) {
      console.warn(error);
      toast.error('Something goes wrong');
    } finally {
      setIsLoading(false);
    }
  }, [email, loginModal, password, setIsLoading]);

  return (
    <Modal
      actionLabel="Login"
      body={bodyContent}
      disabled={isLoading}
      footer={footerContent}
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      onSubmit={handleSubmit}
      label="Login"
    />
  );
};

export default LoginModal;
