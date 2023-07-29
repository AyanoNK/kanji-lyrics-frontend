import api from '@/providers/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { WAITLIST_CACHE_KEYS } from './waitlist.constants';
type Props = {
  email: string;
};

const disbursePaymentRequest = async (requestData: Props | null) => {
  if (!requestData) return;
  const { data } = await api.post(`/waitlist/public`, requestData);
  return data;
};

const useCreateNewWaitlist = () => {
  const queryClient = useQueryClient();

  return useMutation(disbursePaymentRequest, {
    onError: (error) => {
      let errorMessage = '';
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        errorMessage = `- ${error.response.data.message}`;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries([WAITLIST_CACHE_KEYS.newWaitlist]);
    },
  });
};

export default useCreateNewWaitlist;
