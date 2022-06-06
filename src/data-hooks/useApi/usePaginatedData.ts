import { useQuery, UseQueryResult } from 'react-query';
import { makeGetRequest } from '../makeRequest';
import { getPaginatedDataCachekey } from '../constants';
import { IBEPaginatedDataState, IUseApiOptions, PaginatedData } from '../types';
import { buildApiOptions } from '../_buildOptions';
import qs from 'qs';

const tableDataParamsToQueryString = (
  dataState: IBEPaginatedDataState
): string => {
  const sortBy = dataState?.order?.[0]?.field || 'createdAt';
  const orderBy = dataState?.order?.[0]?.by === 'DESC' ? 'DESC' : 'ASC';

  return (
    '?' +
    qs.stringify({
      page: dataState.pageIndex + 1,
      take: dataState.pageSize,
      orderBy,
      sortBy,
      filters: dataState.filters,
    })
  );
};

export function usePaginatedData<T extends Record<string, unknown>>(
  endPoint: string,
  dataState: IBEPaginatedDataState,
  options: IUseApiOptions<PaginatedData<T>> = {}
): UseQueryResult<PaginatedData<T>> {
  return useQuery<PaginatedData<T>>(
    getPaginatedDataCachekey(endPoint, dataState),
    async () => {
      if (options?.wipData) {
        return options.wipData;
      }
      return await makeGetRequest(
        endPoint + tableDataParamsToQueryString(dataState),
        'Data could not be retrieved'
      );
    },
    { ...buildApiOptions(options), keepPreviousData: true }
  );
}
