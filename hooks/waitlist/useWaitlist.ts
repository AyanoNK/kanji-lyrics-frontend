import api from '@/providers/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { WAITLIST_CACHE_KEYS } from './waitlist.constants';
type Props = {
  data: FormData;
};

const disbursePaymentRequest = async (requestData: Props | null) => {
  if (!requestData) return;
  const { data } = await api.post(`/waitlist/`, requestData.data);
  return data;
};

const useUpdateDisbursedProofFile = () => {
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

export default useUpdateDisbursedProofFile;
