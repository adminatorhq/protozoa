import { useQuery, UseQueryResult } from 'react-query';
import get from 'lodash/get';
import { makeGetRequest } from '../makeRequest';
import { getQueryCachekey } from '../constants/getQueryCacheKey';
import { IFEPaginatedDataState, IUseApiOptions, PaginatedData } from '../types';

const DEFAULT_PAGE_SIZE = 10;

const compareNumbers = (value1: number, value2: number) => value1 - value2;
const compareString = (value1: string, value2: string) => value1.localeCompare(value2);

export function useFEPaginatedData<T>(
  endPoint: string,
  dataState: IFEPaginatedDataState<T>,
  options: IUseApiOptions<T[]> = {},
): UseQueryResult<PaginatedData<T>> {
  return useQuery<PaginatedData<T>>(
    getQueryCachekey(endPoint),
    async () => {
      if (options?.wipData) {
        return options.wipData;
      }
      return await makeGetRequest(endPoint, 'Data could not be retrieved');
    },
    {
      enabled: options.enabled,
      select: (data: any) => {
        let returnData: T[] = (data as unknown) as T[];
        const pageSize = dataState.pageSize || DEFAULT_PAGE_SIZE;
        if (dataState.filters) {
          const filter = Object.entries(dataState.filters);
          returnData = returnData.filter((datum) => filter.every(([filterField, filterValue]) => {
            if (Array.isArray(filterValue)) {
              return filterValue.includes(get(datum, filterField));
            }
            return get(datum, filterField) === filterValue;
          }));
        }
        if (dataState.searchFields && dataState.search) {
          const { searchFields, search } = dataState;
          returnData = returnData.filter((datum) => searchFields.some((searchField) => get(datum, searchField, '')
            .toLowerCase()
            .includes(search.toLowerCase())));
        }
        if (dataState.sortBy) {
          const { id, desc } = dataState.sortBy[0];
          returnData = returnData.sort((a, b) => {
            const value1 = get(desc ? b : a, id);
            const value2 = get(desc ? a : b, id);
            if (typeof value1 === 'string') {
              return compareString(value1, value2);
            }
            if (typeof value1 === 'number') {
              return compareNumbers(value1, value2);
            }
            // Dont order if unknown types
            return 0;
          });
        }
        const totalReturnData = returnData.length;
        return {
          pageIndex: dataState.pageIndex,
          pageSize,
          totalRecords: totalReturnData,
          data: returnData.slice(
            (dataState.pageIndex - 1) * pageSize,
            dataState.pageIndex * pageSize,
          ),
        };
      },
    },
  );
}
