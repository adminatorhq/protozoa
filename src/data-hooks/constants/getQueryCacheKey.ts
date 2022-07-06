import { IBEPaginatedDataState } from '../types';

export const getQueryCachekey = (endPoint: string) => endPoint.split('/');

export const getPaginatedDataCachekey = (
  endPoint: string,
  dataState: IBEPaginatedDataState,
) => [...getQueryCachekey(endPoint), JSON.stringify(dataState)];
