import { IPaginatedDataState } from "../types";

export const getQueryCachekey = (endPoint: string) =>
  endPoint.replace("?", "/").split("/");

export const getPaginatedDataCachekey = (
  endPoint: string,
  dataState: IPaginatedDataState<unknown>
) => [...getQueryCachekey(endPoint), JSON.stringify(dataState)];
