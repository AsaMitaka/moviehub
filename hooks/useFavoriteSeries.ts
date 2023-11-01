import fetcher from '@/libs/fetcher';
import useSWR from 'swr';
import useCurrent from './useCurrent';
import { useCallback, useMemo } from 'react';
import toast from 'react-hot-toast';
import useLoginModal from './useLoginModal';
import axios from 'axios';

const useFavoriteSeries = (seriesId: string) => {
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrent();
  const { data: fetchedFilm, mutate: mutateFetchedSerie } = useSWR(
    `/api/series/${seriesId}`,
    fetcher,
  );

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
        request = () => axios.delete('/api/seriesFavorite', { data: { seriesId } });
      } else {
        request = () => axios.patch('/api/seriesFavorite', { seriesId });
      }

      await request();
      toast.success('Successfully');

      mutateFetchedSerie();
    } catch (error) {
      console.warn(error);
      toast.error('Something went wrong');
    }
  }, [currentUser, isFavorite, loginModal, mutateFetchedSerie, seriesId]);

  return { isFavorite, handleToggleFavorite };
};

export default useFavoriteSeries;
