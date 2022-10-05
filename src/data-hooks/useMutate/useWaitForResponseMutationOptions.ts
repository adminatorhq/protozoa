import { useQueryClient } from "react-query";
import { PASS_DATA_FROM_HANDLER_ERROR_MESSAGE } from "./constants";
import { getQueryCachekey } from "../constants/getQueryCacheKey";
import { IWaitForResponseMutationOptions } from "./types";
import { ToastService } from "../../services";

export function useWaitForResponseMutationOptions<T>(
  options: IWaitForResponseMutationOptions<T>
) {
  const queryClient = useQueryClient();

  return {
    onSuccess: async (formData: T | undefined) => {
      options.endpoints.forEach((queryKey) => {
        queryClient.invalidateQueries(getQueryCachekey(queryKey));
      });

      if (options.smartSuccessMessage) {
        if (formData === undefined) {
          throw new Error(
            "Please return what the data/message you want to return to user"
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
    },
    onError: (error: { message: string }) => {
      ToastService.error(
        error.message || "Something went wrong. Please try again"
      );
    },
  };
}
