import { UseQueryResult } from 'react-query';

export type OrderValue = {
  field: string;
  by: 'ASC' | 'DESC';
};

export type PaginatedData<T> = {
  pageIndex: number;
  pageSize: number;
  totalRecords: number;
  data: T[];
};

type IPaginatedDataState = {
  page: number;
  order?: OrderValue;
  search?: string;
  searchFields?: string[];
  pageSize?: number;
};

export type IFEPaginatedDataState<T> = IPaginatedDataState & {
  filters?: Partial<Record<keyof T, T[keyof T] | T[keyof T][]>>;
};

export type IBEPaginatedDataState = IPaginatedDataState & {
  filters?: Record<string, string | number | boolean>;
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
