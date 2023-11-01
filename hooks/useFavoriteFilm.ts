import fetcher from '@/libs/fetcher';
import useSWR from 'swr';
import useCurrent from './useCurrent';
import { useCallback, useMemo } from 'react';
import toast from 'react-hot-toast';
import useLoginModal from './useLoginModal';
import axios from 'axios';

const useFavoriteFilm = (filmId: string) => {
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrent();
  const { data: fetchedFilm, mutate: mutateFetchedFilm } = useSWR(`/api/films/${filmId}`, fetcher);

  const isFavorite = useMemo(() => {
    return fetchedFilm?.isFavorite;
  }, [fetchedFilm?.isFavorite]);

  const handleToggleFavorite = useCallback(async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      let request;

      if (isFavorite) {
        request = () => axios.delete('/api/filmFavorite', { data: { filmId } });
      } else {
        request = () => axios.patch('/api/filmFavorite', { filmId });
      }

      await request();
      toast.success('Successfully');

      mutateFetchedFilm();
    } catch (error) {
      console.warn(error);
      toast.error('Something went wrong');
    }
  }, [currentUser, filmId, isFavorite, loginModal, mutateFetchedFilm]);

  return { isFavorite, handleToggleFavorite };
};

export default useFavoriteFilm;
