import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';
import { PASS_DATA_FROM_HANDLER_ERROR_MESSAGE } from './constants';
import { getQueryCachekey } from '../constants/getQueryCacheKey';
import { IWaitForResponseMutationOptions } from './types';
import { ToastService } from '../../services';

export function useWaitForResponseMutationOptions<T>(
  options: IWaitForResponseMutationOptions<T>,
) {
  const router = useRouter();
  const queryClient = useQueryClient();

  return {
    onSuccess: async (formData: T | undefined) => {
      if (options.redirect) {
        router.replace(options.redirect);
      }
      if (options.smartSuccessMessage) {
        if (formData === undefined) {
          throw new Error(
            'Please return what the data/message you want to return to user',
          );
        }
        ToastService.success(options.smartSuccessMessage(formData));
      } else if (options.successMessage) {
        ToastService.success(options.successMessage);
      }

      if (options.onSuccessActionWithFormData) {
        if (formData === undefined) {
          throw new Error(PASS_DATA_FROM_HANDLER_ERROR_MESSAGE);
        }
        options.onSuccessActionWithFormData(formData);
      }

      options.endpoints.forEach((queryKey) => {
        queryClient.invalidateQueries(getQueryCachekey(queryKey));
      });
    },
    onError: () => {
      ToastService.error(
        'Something went wrong. Please try again or contact support.',
      );
    },
  };
}
