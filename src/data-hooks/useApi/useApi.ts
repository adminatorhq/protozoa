import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { NotFoundError } from "../_errors";
import { getQueryCachekey } from "../constants";
import { IUseApiOptions } from "../types";
import { makeGetRequest } from "../makeRequest";
import { buildApiOptions } from "../_buildOptions";
import { AppStorage } from "../../services/storage/app";

export function useApi<T>(endPoint: string, options: IUseApiOptions<T> = {}) {
  const router = useRouter();
  return useQuery<T>(
    getQueryCachekey(endPoint),
    async () => {
      if (options.wipData) {
        return options.wipData;
      }
      try {
        return await makeGetRequest(endPoint, options.errorMessage);
      } catch (error) {
        if (options.returnUndefinedOnError) {
          return undefined;
        }
        if (error instanceof NotFoundError) {
          return router.replace("/404");
        }
        throw error;
      }
    },
    buildApiOptions(options)
  );
}

export function useStorageApi<T>(endPoint: string, options: IUseApiOptions<T>) {
  return useApi<T>(endPoint, {
    ...options,
    selector: (response) => {
      const data = options.selector ? options.selector(response) : response;
      AppStorage.set(endPoint, response);
      return data;
    },
    placeholderData: AppStorage.get(endPoint),
  });
}
