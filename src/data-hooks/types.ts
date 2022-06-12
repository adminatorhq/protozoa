import { UseQueryResult } from 'react-query';

export type OrderValue = {
  id: string;
  desc: boolean;
};

export type PaginatedData<T> = {
  pageIndex: number;
  pageSize: number;
  totalRecords: number;
  data: T[];
};

type IPaginatedDataState = {
  pageIndex: number;
  pageSize?: number;
  sortBy?: OrderValue[];
  hiddenColumns?: string[];
};

export type IFEPaginatedDataState<T> = IPaginatedDataState & {
  filters?: Partial<Record<keyof T, T[keyof T] | T[keyof T][]>>;
  searchFields?: string[];
  search?: string;
};

export type IBEPaginatedDataState = IPaginatedDataState & {
  filters?: Record<string, unknown>[];
};

export type DataStateKeys<T> = Pick<
  UseQueryResult<T>,
  'data' | 'isLoading' | 'isRefetching' | 'error'
>;

export interface IUseApiOptions<T> {
  selector?: (input: any) => T;
  enabled?: boolean;
  errorMessage?: string;
  /*
  Some requests may go bad in the BE and it is makes sense
  Like checking if something exists in a list
  In this case you would not want an error and want to treat it as a state
  i.e the value doesn't exists
  i.e you want a value (undefined) and you want to handle it in the code
  */
  returnUndefinedOnError?: true;
  wipData?: Partial<T>;
}
