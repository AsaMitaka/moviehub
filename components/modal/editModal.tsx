import useEditModal from '@/hooks/useEditModal';
import Modal from './modal';
import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';

const EditModal = () => {
  const editModal = useEditModal();
  const [isLoading, setIsLoading] = useState(false);

  const bodyContent = <></>;

  const handleSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      toast.success('Successfully');
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <Modal
      actionLabel="Edit Profile"
      body={bodyContent}
      disabled={isLoading}
      isOpen={editModal.isOpen}
      onClose={editModal.onClose}
      onSubmit={handleSubmit}
      label="Save"
    />
  );
};

export default EditModal;
