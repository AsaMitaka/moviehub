import { useCallback, useState } from 'react';
import { signIn } from 'next-auth/react';
import axios from 'axios';
import toast from 'react-hot-toast';

import Modal from './modal';
import Input from '../ui/input';
import useSignupModal from '@/hooks/useSignupModal';
import useLoginModal from '@/hooks/useLoginModal';

const SignupModal = () => {
  const signUpModal = useSignupModal();
  const loginModal = useLoginModal();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
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
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        type="text"
        value={username}
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

    loginModal.onOpen();
    signUpModal.onClose();
  }, [isLoading, loginModal, signUpModal]);

  const footerContent = (
    <div className="flex items-center gap-2">
      <p className="text-lg text-black">You have an account?</p>
      <span
        className="text-green-400 cursor-pointer hover:underline hover:text-green-600"
        onClick={handleToggle}>
        Login
      </span>
    </div>
  );

  const handleSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      //   await axios.post('/api/signup', { email, username, password });

      toast.success('Success signup');
      signIn('credentials', { email, password });
      signUpModal.onClose();
    } catch (error) {
      console.warn(error);
      toast.error('Something goes wrong');
    } finally {
      setIsLoading(false);
    }
  }, [email, password, setIsLoading, signUpModal, username]);

  return (
    <Modal
      actionLabel="Sign Up"
      body={bodyContent}
      disabled={isLoading}
      footer={footerContent}
      isOpen={signUpModal.isOpen}
      onClose={signUpModal.onClose}
      onSubmit={handleSubmit}
      label="Signup"
    />
  );
};

export default SignupModal;
