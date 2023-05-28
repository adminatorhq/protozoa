import noop from "lodash/noop";
import { useQueryClient } from "react-query";
import { IApiMutateOptions } from "./types";
import { useApiMutate } from "./useApiMutate";
import { getQueryCachekey } from "../constants/getQueryCacheKey";
import { ToastService } from "../../services";

export function useApiMutateOptimisticOptions<T, K, V = void>(
  options: IApiMutateOptions<T, K, V>
) {
  const apiMutate = useApiMutate<T>(options.dataQueryPath);
  const queryClient = useQueryClient();

  return {
    onMutate: async (formData: K) =>
      apiMutate.set((oldData) => options.onMutate(oldData, formData)),
    onSuccess: async (requestResponse: V) => {
      if (options.smartSuccessMessage) {
        ToastService.success(options.smartSuccessMessage(requestResponse));
      } else if (options.successMessage) {
        ToastService.success(options.successMessage);
      }
      if (options.otherEndpoints) {
        options.otherEndpoints.forEach((queryKey) => {
          queryClient.invalidateQueries(getQueryCachekey(queryKey));
        });
      }
      if (options.onSuccessActionWithFormData) {
        options.onSuccessActionWithFormData(requestResponse);
      }
    },
    onError: (
      error: { message: string },
      formData: K,
      oldData: T | undefined
    ) => {
      noop(formData, error);
      apiMutate.reset(oldData);
      ToastService.error(
        error.message ||
          "Something went wrong. Please try again or contact support."
      );
    },
    onSettled: () => {
      if (options.isOnMockingMode) {
        return;
      }
      apiMutate.invalidate();
    },
  };
}
